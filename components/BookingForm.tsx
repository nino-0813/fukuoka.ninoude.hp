'use client';

import { useState, useRef, useEffect } from 'react';
import { Loader2, Calendar as CalendarIcon } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { ja } from 'date-fns/locale';
import { format, startOfDay, isBefore } from 'date-fns';
import 'react-day-picker/style.css';

const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30', '18:00',
];

function getTodayJST(): Date {
  const now = new Date();
  const jstOffset = 9 * 60;
  const localOffset = now.getTimezoneOffset();
  const jst = new Date(now.getTime() + (jstOffset + localOffset) * 60000);
  return startOfDay(jst);
}

function dateToYMD(d: Date): string {
  return format(d, 'yyyy-MM-dd');
}

function ymdToDisplay(ymd: string): string {
  if (!ymd) return '';
  const [y, m, d] = ymd.split('-').map(Number);
  return `${y}年${m}月${d}日`;
}

export function BookingForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorText, setErrorText] = useState('');
  const [calendarOpen, setCalendarOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  const todayJST = getTodayJST();
  const selectedDate = date ? new Date(date + 'T12:00:00') : undefined;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (calendarRef.current && !calendarRef.current.contains(e.target as Node)) {
        setCalendarOpen(false);
      }
    }
    if (calendarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [calendarOpen]);

  const handleSelect = (d: Date | undefined) => {
    if (d) {
      setDate(dateToYMD(d));
      setCalendarOpen(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorText('');
    if (!name.trim()) {
      setErrorText('お名前を入力してください。');
      return;
    }
    if (!email.trim()) {
      setErrorText('メールアドレスを入力してください。');
      return;
    }
    if (!date) {
      setErrorText('ご希望日を選択してください。');
      return;
    }
    if (!time) {
      setErrorText('ご希望時間を選択してください。');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          date,
          time,
          message: message.trim(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus('error');
        setErrorText(data.message || '送信に失敗しました。しばらく経ってからお試しください。');
        return;
      }
      setStatus('success');
      setName('');
      setEmail('');
      setPhone('');
      setDate('');
      setTime('');
      setMessage('');
    } catch {
      setStatus('error');
      setErrorText('送信に失敗しました。しばらく経ってからお試しください。');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-[32px] border border-[#a67c52]/10 shadow-sm p-10 md:p-14 text-center">
        <p className="text-[#a67c52] font-bold text-lg mb-4">ご予約リクエストを送信しました</p>
        <p className="text-[#5a5a5a] leading-relaxed font-serif-jp text-sm">
          ご記入いただいた内容を確認のうえ、ご連絡いたします。少々お待ちください。
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[32px] border border-[#a67c52]/10 shadow-sm p-10 md:p-14">
      <p className="text-[#5a5a5a] leading-loose font-serif-jp mb-8 text-center">
        初回体験のご予約はこちらから。ご希望日時をご選択のうえ送信してください。
      </p>
      <ul className="text-left text-sm text-[#5a5a5a] space-y-3 mb-8 font-serif-jp">
        <li className="flex items-start gap-2">
          <span className="text-[#a67c52] shrink-0">・</span>
          <span>初回体験コース 60分 ¥9,900（税込）</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-[#a67c52] shrink-0">・</span>
          <span>確認のご連絡はメールまたはお電話で行います</span>
        </li>
      </ul>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="booking-name" className="block text-sm font-bold text-[#1a1a1a] mb-2">
            お名前 <span className="text-[#a67c52]">*</span>
          </label>
          <input
            id="booking-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#a67c52]/20 text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#a67c52]/40 focus:border-[#a67c52]"
            placeholder="山田 花子"
            required
          />
        </div>
        <div>
          <label htmlFor="booking-email" className="block text-sm font-bold text-[#1a1a1a] mb-2">
            メールアドレス <span className="text-[#a67c52]">*</span>
          </label>
          <input
            id="booking-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#a67c52]/20 text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#a67c52]/40 focus:border-[#a67c52]"
            placeholder="example@email.com"
            required
          />
        </div>
        <div>
          <label htmlFor="booking-phone" className="block text-sm font-bold text-[#1a1a1a] mb-2">
            電話番号
          </label>
          <input
            id="booking-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#a67c52]/20 text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#a67c52]/40 focus:border-[#a67c52]"
            placeholder="090-1234-5678"
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="relative" ref={calendarRef}>
            <label htmlFor="booking-date" className="block text-sm font-bold text-[#1a1a1a] mb-2">
              ご希望日 <span className="text-[#a67c52]">*</span>
            </label>
            <div className="relative">
              <input
                id="booking-date"
                type="text"
                readOnly
                value={date ? ymdToDisplay(date) : ''}
                onClick={() => setCalendarOpen(!calendarOpen)}
                placeholder="日付を選択"
                className="w-full px-4 py-3 pr-12 rounded-xl border border-[#a67c52]/20 text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#a67c52]/40 focus:border-[#a67c52] bg-white cursor-pointer"
                required
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a67c52] pointer-events-none">
                <CalendarIcon size={22} aria-hidden />
              </span>
            </div>
            {calendarOpen && (
              <div className="absolute left-0 z-20 mt-2 p-4 bg-white rounded-2xl border border-[#a67c52]/20 shadow-xl [&_.rdp-day_button]:rounded-xl [&_.rdp-selected]:!bg-[#a67c52] [&_.rdp-selected]:!text-white [&_.rdp-today]:text-[#a67c52] [&_.rdp-day_button:hover]:bg-[#a67c52]/10">
                <DayPicker
                  mode="single"
                  locale={ja}
                  selected={selectedDate}
                  onSelect={handleSelect}
                  disabled={(d) => isBefore(d, todayJST)}
                  defaultMonth={selectedDate || todayJST}
                  today={todayJST}
                />
              </div>
            )}
          </div>
          <div>
            <label htmlFor="booking-time" className="block text-sm font-bold text-[#1a1a1a] mb-2">
              ご希望時間 <span className="text-[#a67c52]">*</span>
            </label>
            <select
              id="booking-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#a67c52]/20 text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#a67c52]/40 focus:border-[#a67c52] bg-white"
              required
            >
              <option value="">選択してください</option>
              {TIME_SLOTS.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="booking-message" className="block text-sm font-bold text-[#1a1a1a] mb-2">
            ご要望・ご質問
          </label>
          <textarea
            id="booking-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-[#a67c52]/20 text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#a67c52]/40 focus:border-[#a67c52] resize-none"
            placeholder="ご要望やご質問があればご記入ください"
          />
        </div>
        {errorText && (
          <p className="text-sm text-red-600" role="alert">
            {errorText}
          </p>
        )}
        <div className="pt-4">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#a67c52] hover:bg-[#8c6239] disabled:bg-[#a67c52]/70 text-white py-4 px-10 rounded-full font-bold text-sm tracking-widest transition-all shadow-md disabled:cursor-not-allowed"
          >
            {status === 'sending' ? (
              <>
                <Loader2 size={20} className="animate-spin" aria-hidden />
                送信中...
              </>
            ) : (
              '予約リクエストを送信する'
            )}
          </button>
        </div>
        <p className="text-center text-xs text-[#1a1a1a]/50">受付時間 9:00〜18:00</p>
      </form>
    </div>
  );
}

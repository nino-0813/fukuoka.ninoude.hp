import { ImageResponse } from 'next/og';
import { SALON_NAME } from '@/lib/constants';

export const runtime = 'edge';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px 64px',
          background:
            'linear-gradient(135deg, #f5f2ed 0%, #efe5d8 45%, #dcc3a8 100%)',
          color: '#1f1a16',
          fontFamily: '"Hiragino Sans", "Noto Sans JP", sans-serif',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            border: '2px solid #8f6a45',
            borderRadius: 9999,
            padding: '10px 24px',
            fontSize: 28,
            color: '#8f6a45',
            letterSpacing: 1.2,
          }}
        >
          福岡市東区・完全予約制
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.2 }}>
            二の腕痩せ専門サロン
          </div>
          <div style={{ fontSize: 48, fontWeight: 600, lineHeight: 1.2 }}>
            {SALON_NAME}
          </div>
          <div
            style={{
              fontSize: 30,
              color: '#6f5740',
              lineHeight: 1.4,
            }}
          >
            肩甲骨出し・ブライダルケアに対応
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 26,
            color: '#6f5740',
            borderTop: '1px solid rgba(111, 87, 64, 0.35)',
            paddingTop: 20,
          }}
        >
          <span>www.ninoude-fukuoka.com</span>
          <span>Gypsofil Fukuoka</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

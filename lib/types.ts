export interface CaseStudy {
  id: number;
  title: string;
  beforeImg: string;
  afterImg: string;
  /** 表示用：例）3ヶ月、6ヶ月・20回以上 */
  period: string;
  /** 回数：例）8回、6回目、20回以上 */
  count: string;
  /** 引用で表示する一言 */
  description: string;
  /** 回数・期限や補足の本文（任意） */
  body?: string;
}

export interface MenuItem {
  id: number;
  title: string;
  price: string;
  duration: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface MonitorType {
  id: number;
  title: string;
  description: string;
  image: string;
  note?: string;
}

export interface MonitorRequirement {
  id: number;
  title: string;
  items: string[];
}


export interface CaseStudy {
  id: number;
  title: string;
  beforeImg: string;
  afterImg: string;
  period: string;
  count: string;
  description: string;
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

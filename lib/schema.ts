import { BASE_URL, SALON_NAME, TELEPHONE, LINE_URL, INSTAGRAM_URL, FAQS } from './constants';
import type { FAQItem } from './types';

export function getLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: SALON_NAME,
    description:
      '福岡県福岡市東区の二の腕痩せ・肩甲骨出し・ブライダル専門サロン。完全予約制のプライベート空間で、理想の二の腕を叶えます。',
    url: BASE_URL,
    telephone: TELEPHONE,
    address: {
      '@type': 'PostalAddress',
      addressLocality: '福岡市東区',
      addressRegion: '福岡県',
      addressCountry: 'JP',
    },
    geo: {
      '@type': 'GeoCoordinates',
      addressLocality: '福岡市東区',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [LINE_URL, INSTAGRAM_URL].filter(Boolean),
    priceRange: '¥¥',
    image: `${BASE_URL}/og-image.jpg`,
  };
}

export function getFAQPageJsonLd(faqs: FAQItem[] = FAQS) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

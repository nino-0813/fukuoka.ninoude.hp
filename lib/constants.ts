import type { CaseStudy, MenuItem, FAQItem, MonitorType, MonitorRequirement } from './types';

export const SALON_NAME = '二の腕痩せ専門ジプソフィル®︎';
export const SALON_NAME_EN = 'Gypsofil';
export const BASE_URL = 'https://gypsofil-fukuoka.example.com'; // 本番で差し替え

export const LOCATION = '福岡県福岡市東区の自宅サロン';
export const HOURS = '平日・土曜 9:00～18:00 (ご希望に合わせて調整可)';
export const TELEPHONE = '000-0000-0000';
export const LINE_URL = 'https://line.me';
export const INSTAGRAM_URL = 'https://www.instagram.com/ninoude.fukuoka.emi/?hl=ja';

export const MONITOR_TYPES: MonitorType[] = [
  {
    id: 1,
    title: '部分モニター',
    description:
      'ホームページ・SNSなどの媒体で、体の部位ごと、または片側だけなどを撮影したお写真を使用させていただくのが部分モニターです。施術前後のお写真は、比較的個人を特定されにくいモニターになります。',
    image: 'https://picsum.photos/600/400?face,profile',
    note: '※価格は、料金表のモニター料金をご確認ください。',
  },
  {
    id: 2,
    title: '全顔・YouTubeモニター',
    description:
      '施術風景やビフォーアフターの様子を動画で撮影し、当院のYouTubeに公開させていただける方を対象とするのがYouTubeモニターです。原則として全顔出しモニターとなります。',
    image: 'https://picsum.photos/600/400?face,beauty',
  },
];

export const MONITOR_REQUIREMENTS: MonitorRequirement[] = [
  {
    id: 1,
    title: 'モニター募集の対象',
    items: [
      '初回体験をすでに受けられた方',
      'その後のカスタムメニュー（短期集中改善コース・挙式直前ブライダルケア等）をご利用される方',
      '募集は5組までとなります。',
    ],
  },
  {
    id: 2,
    title: 'ご協力いただきたいこと',
    items: [
      '施術前後の写真撮影、WEBサイトやSNS等への掲載にご協力いただける方',
      '撮影・掲載内容についてご説明のうえ、ご承諾いただいた方',
    ],
  },
  {
    id: 3,
    title: 'その他',
    items: [
      'モニターの適応は、カウンセリング・施術内容に応じて判断させていただきます。',
      'ご希望やお体の状態により、モニター価格でご案内できない場合もございます。予めご了承ください。',
    ],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: '振袖肉スッキリ改善',
    beforeImg: '/images/cases/LINE_ALBUM_Before%20%E3%83%BBafter_260302_18.webp',
    afterImg: '/images/cases/LINE_ALBUM_Before%20%E3%83%BBafter_260302_17.webp',
    period: '3ヶ月',
    count: '8回',
    description: 'ノースリーブを自信を持って着られるようになりました。',
  },
  {
    id: 2,
    title: '肩周りの厚みが解消',
    beforeImg: '/images/cases/LINE_ALBUM_Before%20%E3%83%BBafter_260302_20.webp',
    afterImg: '/images/cases/LINE_ALBUM_Before%20%E3%83%BBafter_260302_19.webp',
    period: '2ヶ月',
    count: '5回',
    description: '埋もれていた肩甲骨が出てきて、後ろ姿が別人に。',
  },
  {
    id: 3,
    title: '結婚式前の集中ケア',
    beforeImg: '/images/cases/LINE_ALBUM_Before%20%E3%83%BBafter_260302_29.webp',
    afterImg: '/images/cases/LINE_ALBUM_Before%20%E3%83%BBafter_260302_29.webp',
    period: '1.5ヶ月',
    count: '4回',
    description: 'ドレス試着の時とは見違えるほど細くなりました！',
  },
  {
    id: 4,
    title: '二の腕・背中まわりスッキリ',
    beforeImg: '/images/cases/LINE_ALBUM_Before%20%E3%83%BBafter_260302_30.webp',
    afterImg: '/images/cases/LINE_ALBUM_Before%20%E3%83%BBafter_260302_30.webp',
    period: '2ヶ月',
    count: '6回',
    description: 'タンクトップを堂々と着られるように。',
  },
  {
    id: 5,
    title: 'ブライダル二の腕ケア',
    beforeImg: '/images/cases/LINE_ALBUM_Before%20%E3%83%BBafter_260302_28.webp',
    afterImg: '/images/cases/LINE_ALBUM_Before%20%E3%83%BBafter_260302_28.webp',
    period: '2ヶ月',
    count: '5回',
    description: '挙式までに理想のラインに。',
  },
  {
    id: 6,
    title: '振袖・二の腕集中ケア',
    beforeImg: '/images/cases/LINE_ALBUM_%E3%83%97%E3%83%AC%E8%8A%B1%E5%AB%81%E6%A7%98%F0%9F%91%B0%E2%80%8D%E2%99%80%EF%B8%8F_260302_15.webp',
    afterImg: '/images/cases/LINE_ALBUM_%E3%83%97%E3%83%AC%E8%8A%B1%E5%AB%81%E6%A7%98%F0%9F%91%B0%E2%80%8D%E2%99%80%EF%B8%8F_260302_15.webp',
    period: '2ヶ月',
    count: '6回',
    description: '振袖のときの見た目が気にならなくなりました。',
  },
  {
    id: 7,
    title: '肩甲骨・二の腕まわり改善',
    beforeImg: '/images/cases/LINE_ALBUM_%E3%83%97%E3%83%AC%E8%8A%B1%E5%AB%81%E6%A7%98%F0%9F%91%B0%E2%80%8D%E2%99%80%EF%B8%8F_260302_8.webp',
    afterImg: '/images/cases/LINE_ALBUM_%E3%83%97%E3%83%AC%E8%8A%B1%E5%AB%81%E6%A7%98%F0%9F%91%B0%E2%80%8D%E2%99%80%EF%B8%8F_260302_8.webp',
    period: '1.5ヶ月',
    count: '4回',
    description: '背中から腕まわりがすっきり。',
  },
  {
    id: 8,
    title: 'ノースリーブが着たい方のケア',
    beforeImg: '/images/cases/LINE_ALBUM_Before%20%E3%83%BBafter_260302_129.webp',
    afterImg: '/images/cases/LINE_ALBUM_Before%20%E3%83%BBafter_260302_129.webp',
    period: '2ヶ月',
    count: '5回',
    description: '夏の服を楽しめるように。',
  },
  {
    id: 9,
    title: '二の腕・たるみ集中ケア',
    beforeImg: '/images/cases/LINE_ALBUM_Before%20%E3%83%BBafter_260302_114.webp',
    afterImg: '/images/cases/LINE_ALBUM_Before%20%E3%83%BBafter_260302_114.webp',
    period: '2ヶ月',
    count: '6回',
    description: 'たるみが気にならなくなりました。',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    title: '初回体験コース',
    price: '¥9,900',
    duration: '90分',
    description:
      'まずは初回体験から。カウンセリング＋全身デトックス＋二の腕集中アプローチ。体験後はお悩みに合わせたカスタムメニューをお選びいただけます。',
    icon: 'Sparkles',
  },
  {
    id: 2,
    title: '短期集中改善コース',
    price: '',
    duration: '全8回',
    description:
      '初回体験後にお選びいただけるカスタムメニュー。二の腕のセルライトと脂肪を分解し、形状記憶させる1番人気のコースです。',
    icon: 'Activity',
  },
  {
    id: 3,
    title: '挙式直前ブライダルケア',
    price: '',
    duration: '全3回',
    description:
      '初回体験後にお選びいただけるカスタムメニュー。挙式までに最短で仕上げたい方向け。背中とデコルテも同時にケアします。',
    icon: 'Clock',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: '何回くらいで効果を実感できますか？',
    answer:
      '個人差はございますが、1回の施術でもサイズダウンを実感される方がほとんどです。根本的な改善には3ヶ月（8回〜）程度の継続をおすすめしています。',
  },
  {
    question: '痛みはありますか？',
    answer:
      '老廃物が溜まっている箇所は多少の痛みを感じる場合がありますが、お客様の体調や好みに合わせて強さを調整いたしますのでご安心ください。多くの方が途中で眠ってしまうほどのリラックス効果もございます。',
  },
  {
    question: '運動や食事制限は必要ですか？',
    answer:
      '過度な制限は必要ありませんが、施術効果を高めるための簡単なホームケアや、老廃物を流しやすくする食事のコツなどのアドバイスを行っております。',
  },
];

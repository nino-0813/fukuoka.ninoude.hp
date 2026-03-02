import type { CaseStudy, MenuItem, FAQItem, MonitorType, MonitorRequirement } from './types';

export const SALON_NAME = '二の腕痩せ専門ジプソフィル®︎';
export const SALON_NAME_EN = 'Gypsofil';
export const BASE_URL = 'https://gypsofil-fukuoka.example.com'; // 本番で差し替え

export const LOCATION = '福岡県福岡市東区の自宅サロン';
export const HOURS = '平日・土曜 9:00～18:00 (ご希望に合わせて調整可)';
export const TELEPHONE = '000-0000-0000';
export const LINE_URL = 'https://line.me';
export const INSTAGRAM_URL = 'https://instagram.com';

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
    note: '※通常料金から 50%OFFいたします。',
  },
];

export const MONITOR_REQUIREMENTS: MonitorRequirement[] = [
  {
    id: 1,
    title: '下記の条件にご承諾いただける治療モニターを募集しております。',
    items: [
      '施術前後の写真撮影や手術中の動画撮影、WEBサイトやインターネット・雑誌広告等への公開にご協力いただける方',
      '手術日・1週間後・1ヶ月後・3ヶ月後に写真撮影にご来院いただける方 ※施術の内容で来院日程が変わる可能性があります。',
      '原則として20歳以上の方(未成年の場合は、親権者の方がモニター施術に同意している方)',
    ],
  },
  {
    id: 2,
    title: 'モニター施術には選考がございます。',
    items: [
      'モニター施術が実施できるかについては、医師のカウンセリング・診察にて判断させていただきます。',
      'お客様のご希望や適応により、モニター価格でご案内できないこともございます。予めご了承くださいませ。',
    ],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: '振袖肉スッキリ改善',
    beforeImg: 'https://picsum.photos/400/500?random=1',
    afterImg: 'https://picsum.photos/400/500?random=2',
    period: '3ヶ月',
    count: '8回',
    description: 'ノースリーブを自信を持って着られるようになりました。',
  },
  {
    id: 2,
    title: '肩周りの厚みが解消',
    beforeImg: 'https://picsum.photos/400/500?random=3',
    afterImg: 'https://picsum.photos/400/500?random=4',
    period: '2ヶ月',
    count: '5回',
    description: '埋もれていた肩甲骨が出てきて、後ろ姿が別人に。',
  },
  {
    id: 3,
    title: '結婚式前の集中ケア',
    beforeImg: 'https://picsum.photos/400/500?random=5',
    afterImg: 'https://picsum.photos/400/500?random=6',
    period: '1.5ヶ月',
    count: '4回',
    description: 'ドレス試着の時とは見違えるほど細くなりました！',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    title: '初回体験コース',
    price: '¥5,500',
    duration: '90分',
    description:
      'カウンセリング＋全身デトックス＋二の腕集中アプローチ。まずは効果を実感してください。',
    icon: 'Sparkles',
  },
  {
    id: 2,
    title: '短期集中改善コース',
    price: '¥88,000〜',
    duration: '全8回',
    description:
      '徹底的に二の腕のセルライトと脂肪を分解し、形状記憶させる1番人気のコースです。',
    icon: 'Activity',
  },
  {
    id: 3,
    title: '挙式直前ブライダルケア',
    price: '¥45,000',
    duration: '全3回',
    description: '挙式までに最短で仕上げたい方向け。背中とデコルテも同時にケアします。',
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

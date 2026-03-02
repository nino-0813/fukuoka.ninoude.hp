export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  thumbnail: string;
  category?: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'ninoude-yasenai-kaiketsu',
    title: '二の腕が痩せない理由と、細くするための解決法',
    description:
      '「運動しても二の腕だけ痩せない」とお悩みの方へ。原因と、福岡の二の腕専門サロンがおすすめする解決方法を解説します。',
    date: '2026-03-02',
    thumbnail: '/images/cases/LINE_ALBUM_Before%20%E3%83%BBafter_260302_56.webp',
    category: '二の腕痩せ',
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

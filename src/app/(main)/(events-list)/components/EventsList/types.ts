export type Category = 'trending' | 'week' | 'featured' | 'news';

export type EventCategory = {
  title: string;
  description: string;
  category: Category;
};

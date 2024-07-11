import { CategoryCarouselView } from './CategoryCarouselView';
import { getEvents } from '../service';
import { Category } from '../types';

type CategorCarouselModelProps = {
  category: Category;
  title: string;
  description: string;
};
export async function CategorCarouselModel({
  category,
  description,
  title,
}: CategorCarouselModelProps) {
  const events = await getEvents(category);

  return (
    <CategoryCarouselView
      events={events}
      description={description}
      title={title}
    />
  );
}

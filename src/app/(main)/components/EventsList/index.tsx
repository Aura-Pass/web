import { CategorCarouselModel } from './CategoryCarousel/CategoryCarouselModel';
import { categories } from './constants';

export function EventsList() {
  return (
    <section>
      <div className='flex flex-col gap-14'>
        {categories.map((category) => (
          <CategorCarouselModel key={category.category} {...category} />
        ))}
      </div>
    </section>
  );
}

import { CategorCarouselModel } from './CategoryCarousel/CategoryCarouselModel';
import { categories } from './constants';

export function EventsList() {
  return (
    <section>
      <div className='flex flex-col gap-8 pl-5 sm:gap-14 sm:pl-0'>
        {categories.map((category) => (
          <CategorCarouselModel key={category.category} {...category} />
        ))}
      </div>
    </section>
  );
}

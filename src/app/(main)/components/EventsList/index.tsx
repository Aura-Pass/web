import { CategoryCarousel } from './CategoryCarousel';
import { categories } from './constants';

export function EventsList() {
  return (
    <section>
      <div className='flex flex-col gap-14'>
        {categories.map((category) => (
          <CategoryCarousel key={category.category} {...category} />
        ))}
      </div>
    </section>
  );
}

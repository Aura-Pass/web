'use client';
import { SectionHeader } from '../SectionHeader';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/Carousel';
import { useCategories } from './useCategories';
import { CategoryCard } from './CategoryCard';

export function EventsCategories() {
  const { categories } = useCategories();
  return (
    <Carousel
      className='w-full pl-5 sm:pl-0'
      opts={{
        slidesToScroll: 4,
        align: 'start',
      }}
    >
      <SectionHeader
        title='Categorias'
        description='Busque por eventos específicos'
      />
      <CarouselContent className='-ml-4 mt-6 sm:-ml-6 sm:mt-9'>
        {categories.map((category) => (
          <CarouselItem
            className='basis-[175px] pl-4 sm:basis-[249px] sm:pl-6'
            key={category.url}
          >
            <CategoryCard {...category} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

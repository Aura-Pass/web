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
    <Carousel className='w-full'>
      <SectionHeader
        title='Categorias'
        description='Busque por eventos específicos'
      />
      <CarouselContent className='-ml-10 mt-9'>
        {categories.map((category) => (
          <CarouselItem className='basis-[265px] pl-10' key={category.url}>
            <CategoryCard {...category} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

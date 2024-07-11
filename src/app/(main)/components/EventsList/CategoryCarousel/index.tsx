'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/Carousel';
import { SectionHeader } from '../../SectionHeader';
import { EventCategory } from '../typex';
import { useCategoryCarousel } from './useCategoryCarousel';
import { EventCard } from '@/components/EventCard';

export function CategoryCarousel({
  category,
  description,
  title,
}: EventCategory) {
  const { events } = useCategoryCarousel(category);

  return (
    <Carousel className='w-full' opts={{ slidesToScroll: 3, align: 'start' }}>
      <SectionHeader title={title} description={description} />
      <CarouselContent className='-ml-6 mt-9'>
        {events.map((category) => (
          <CarouselItem className='basis-[310px] pl-6' key={category.id}>
            <EventCard {...category} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

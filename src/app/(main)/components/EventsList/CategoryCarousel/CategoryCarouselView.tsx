'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/Carousel';
import { SectionHeader } from '../../SectionHeader';
import { EventCard } from '@/components/EventCard';
import { Event } from '@/components/EventCard/types';

type CategoryCarouselProps = {
  events: Event[];
  description: string;
  title: string;
};

export function CategoryCarouselView({
  events,
  description,
  title,
}: CategoryCarouselProps) {
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

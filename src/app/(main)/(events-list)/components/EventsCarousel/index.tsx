'use client';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPagination,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/Carousel';
import { useState } from 'react';
import { useEventsCarousel } from './useEventsCarousel';
import { Event } from './Event';
export function EventsCarousel() {
  const { events } = useEventsCarousel();
  const [api, setApi] = useState<CarouselApi>();
  return (
    <Carousel
      setApi={setApi}
      className='mx-auto w-full rounded-2xl'
      opts={{
        loop: true,
        align: 'center',
        duration: 50,
      }}
      plugins={[
        Autoplay({
          delay: 4500,
          stopOnMouseEnter: true,
        }),
      ]}>
      <CarouselContent className='rounded-2xl'>
        {events.map((event) => (
          <CarouselItem className='rounded-2xl' key={event.title}>
            <Event {...event} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='-left-16' />
      <CarouselNext className='-right-16' />
      <CarouselPagination api={api} />
    </Carousel>
  );
}

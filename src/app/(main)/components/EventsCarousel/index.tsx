'use client';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPagination,
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
      className='mx-auto w-full max-w-[1366px]'
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
      ]}
    >
      <CarouselContent>
        {events.map((event) => (
          <CarouselItem className='peer hover:bg-red-50' key={event.title}>
            <Event {...event} />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
      <CarouselPagination api={api} />
    </Carousel>
  );
}

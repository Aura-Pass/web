'use client';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselPagination,
  type CarouselApi,
} from '@/components/ui/Carousel';
import Image from 'next/image';
import { useState } from 'react';
import { useEventsCarousel } from './useEventsCarousel';
export function EventsCarousel() {
  const { imagesEvents } = useEventsCarousel();
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
        {imagesEvents.map((img) => (
          <CarouselItem key={img.title}>
            <Image
              width={1366}
              height={524}
              alt={img.title}
              src={img.src}
              className='mx-auto block h-[400px] xl:h-[540px] xl:w-[1366px]'
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <CarouselPagination api={api} />
    </Carousel>
  );
}

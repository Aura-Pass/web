import { CarouselNext, CarouselPrevious } from '@/components/ui/Carousel';
import {
  ArrowCircleLeft,
  ArrowCircleRight,
} from '@phosphor-icons/react/dist/ssr';

export function CarouselControllers() {
  return (
    <div className='flex items-center gap-2'>
      <CarouselPrevious className='static translate-y-0 text-white'>
        <ArrowCircleLeft className='size-9' />
        <span className='sr-only'>Previous slide</span>
      </CarouselPrevious>
      <CarouselNext className='static translate-y-0 text-white'>
        <ArrowCircleRight className='size-9' />
        <span className='sr-only'>Next slide</span>
      </CarouselNext>
    </div>
  );
}

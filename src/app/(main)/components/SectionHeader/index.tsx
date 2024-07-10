import { CarouselNext, CarouselPrevious } from '@/components/ui/Carousel';
import { ArrowCircleLeft, ArrowCircleRight } from '@phosphor-icons/react';

interface SectionHeaderProps {
  title: string;
  description: string;
}

export function SectionHeader({ description, title }: SectionHeaderProps) {
  return (
    <div className='relative flex justify-between pl-4'>
      <div className='absolute left-0 top-[9px] h-8 w-1 bg-gradient-to-r from-[#62E7DE] to-[#24DBE7]' />
      <div className='flex flex-col'>
        <h2 className='text-2xl font-bold text-base-white'>{title}</h2>
        <p className='text-base font-normal text-gray-800'>{description}</p>
      </div>
      <div className='flex items-center gap-4'>
        <CarouselPrevious className='static translate-y-0 text-white'>
          <ArrowCircleLeft className='size-9' />
          <span className='sr-only'>Previous slide</span>
        </CarouselPrevious>
        <CarouselNext className='static translate-y-0 text-white'>
          <ArrowCircleRight className='size-9' />
          <span className='sr-only'>Next slide</span>
        </CarouselNext>
      </div>
    </div>
  );
}

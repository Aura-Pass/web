import { CarouselControllers } from './CarouselControllers';

interface SectionHeaderProps {
  title: string;
  description: string;
}

export function SectionHeader({ description, title }: SectionHeaderProps) {
  return (
    <div className='relative flex justify-between pl-4'>
      <div className='absolute left-0 top-[2px] h-8 w-1 bg-gradient-to-r from-[#62E7DE] to-[#24DBE7]' />
      <div className='flex w-full flex-col gap-[6px]'>
        <h2 className='text-lg font-bold leading-none text-base-white sm:text-xl'>
          {title}
        </h2>
        <p className='text-sm font-normal leading-none text-neutral-200 sm:text-base'>
          {description}
        </p>
      </div>
      <div className='hidden sm:block'>
        <CarouselControllers />
      </div>
    </div>
  );
}

'use client';
import Image from 'next/image';
interface CategoryBannerProps {
  image_url: string;
  title: string;
  description: string;
}
export function CategoryBanner({
  description,
  image_url,
  title,
}: CategoryBannerProps) {
  return (
    <div className='relative flex h-screen max-h-[200px] items-end justify-start p-5 sm:pb-16 sm:pl-[72px] md:max-h-[416px]'>
      <Image
        className='pointer-events-none object-cover'
        src={image_url}
        alt=''
        fill
      />
      <div className='relative z-10'>
        <h1 className='text-xl font-bold sm:text-5xl'>{title}</h1>
        <p className='text-sm font-[600] sm:text-xl'>São Paulo e Região</p>
        <p className='mt-2 text-xs sm:text-xl'>{description}</p>
      </div>
    </div>
  );
}

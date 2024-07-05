import Link from 'next/link';
import { Category } from './types';
import Image from 'next/image';

type CategoryCardProps = Category;

export function CategoryCard({ imageUrl, name, url }: CategoryCardProps) {
  return (
    <Link
      href={`/events?search=${url}`}
      className='group relative flex h-36 w-56 items-end justify-start overflow-hidden rounded-2xl border border-gray-200 bg-red-50 p-4'
    >
      <div className='absolute left-0 top-0 z-10 block size-full bg-gradient-to-b from-black/0 to-black/80' />
      <Image
        className='absolute left-0 top-0 z-0 size-full object-fill transition-all  group-hover:scale-110'
        src={imageUrl}
        alt=''
        width={225}
        height={140}
      />
      <div className='relative z-10 text-lg font-normal text-[#FEFDFF] group-hover:text-white'>
        {name}
      </div>
    </Link>
  );
}

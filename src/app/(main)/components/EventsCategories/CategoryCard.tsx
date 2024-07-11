import Link from 'next/link';
import { Category } from './types';
import Image from 'next/image';

type CategoryCardProps = Category;

export function CategoryCard({ imageUrl, name, url }: CategoryCardProps) {
  return (
    <Link
      href={`/events?search=${url}`}
      className='group relative flex h-36 w-[225px] items-end justify-start overflow-hidden rounded-2xl border-[1.5px] border-gray-200 bg-red-50 p-3 shadow duration-300 hover:border-[#62E7DE] hover:shadow-brand'
    >
      <div className='absolute left-0 top-0 z-10 block size-full bg-gradient-to-b from-black/0 to-black/80' />
      <Image
        className='absolute left-0 top-0 z-0 size-full object-fill transition-all duration-300 group-hover:scale-110'
        src={imageUrl}
        alt=''
        width={225}
        height={140}
      />
      <div className='relative z-10 text-base font-semibold text-base-white group-hover:bg-gradient-light group-hover:bg-clip-text group-hover:text-transparent'>
        {name}
      </div>
    </Link>
  );
}

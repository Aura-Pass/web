import Image from 'next/image';
import { Event } from './types';
import Link from 'next/link';

type EventCardProps = Event;

export function EventCard(props: EventCardProps) {
  const url = `/event/${props.id}`;
  return (
    <Link
      href={url}
      className='group/event block h-[201px] w-full rounded-2xl border-[1.5px] border-neutral-800 bg-neutral-1000 transition-all duration-300 hover:border-[#62E7DE] hover:shadow-brand sm:h-80'>
      <div className='h-[87px] w-full overflow-hidden rounded-t-2xl sm:h-[157px]'>
        <Image
          src={props.imageUrl}
          alt=''
          width={286}
          height={157}
          className='size-full object-fill transition-all'
        />
      </div>
      <div className='mt-[6px] px-2 pb-4 sm:mt-4 sm:px-4 sm:pb-5'>
        <p className='mb-[2px] bg-gradient-light bg-clip-text text-xs font-medium text-transparent sm:mb-1 sm:text-base'>
          {props.date}
        </p>
        <p className='line-clamp-2 text-xs font-semibold leading-5 text-base-white sm:text-base'>
          {props.title}
        </p>
        <p className='mt-[2px] line-clamp-2 text-xs font-medium leading-5 text-neutral-300 sm:mt-2 sm:text-sm'>
          {props.location}
        </p>
      </div>
    </Link>
  );
}

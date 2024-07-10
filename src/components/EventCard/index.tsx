import Image from 'next/image';
import { Event } from './types';
import Link from 'next/link';

type EventCardProps = Event;

export function EventCard(props: EventCardProps) {
  const url = `/event/${props.id}`;
  return (
    <Link
      href={url}
      className='group/event block h-80 w-full rounded-2xl border border-gray-200 bg-gray-50 transition-all hover:border-[#62E7DE] hover:shadow-brand'
    >
      <div className='h-[157px] w-full overflow-hidden rounded-t-2xl'>
        <Image
          src={props.imageUrl}
          alt=''
          width={286}
          height={157}
          className='size-full object-fill transition-all group-hover/event:scale-110'
        />
      </div>
      <div className='mt-3 px-4 pb-5'>
        <p className='bg-gradient-light bg-clip-text text-base font-medium text-transparent'>
          {props.date}
        </p>
        <p className='line-clamp-2 text-lg font-semibold leading-5 text-base-white'>
          {props.title}
        </p>
        <p className='mt-2 line-clamp-2 text-base font-medium leading-5 text-gray-700'>
          {props.location}
        </p>
      </div>
    </Link>
  );
}
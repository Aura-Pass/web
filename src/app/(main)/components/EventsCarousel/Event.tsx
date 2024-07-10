import Image from 'next/image';
import { EventType } from './types';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

type EventProps = EventType;

export function Event(props: EventProps) {
  return (
    <div className='relative'>
      <Image
        width={1366}
        height={524}
        alt={props.title}
        src={props.imgUrl}
        className='mx-auto block h-[400px] xl:h-[540px] xl:w-[1366px]'
      />
      <article className='absolute left-0 top-0 size-full bg-event-banner-gradient py-24 pl-20 opacity-0 transition-all hover:opacity-100'>
        <div>
          <div
            aria-description='Data do evento'
            className='w-fit rounded-full bg-gradient-primary px-4 py-1 text-lg font-bold text-gray-50'
          >
            {props.date}
          </div>
          <p className='text-4xl font-extrabold text-base-white'>
            {props.title}
          </p>
        </div>
        <div className='mt-10'>
          <p className='text-gradient text-xl font-medium'>{props.category}</p>
          <p className='max-w-60 text-base-white'>{props.address}</p>
        </div>
        <div className='mt-16 w-fit'>
          <Button asChild variant='outline' colorScheme='brand'>
            <Link href={props.url}>Ver mais</Link>
          </Button>
        </div>
      </article>
    </div>
  );
}

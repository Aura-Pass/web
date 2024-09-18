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
        className='mx-auto block h-[440px] rounded-2xl xl:h-[500px] xl:w-[1366px]'
      />
      <article className='absolute left-0 top-0 flex size-full flex-col justify-center rounded-2xl bg-event-banner-gradient pl-20 opacity-0 transition-all duration-500 ease-in-out hover:opacity-100'>
        <div>
          <div>
            <div
              aria-description='Data do evento'
              className='mb-2 w-fit rounded-full bg-gradient-light px-4 py-[2px] text-lg font-bold text-neutral-1000'>
              {props.date}
            </div>
            <p className='text-4xl font-extrabold text-base-white'>
              {props.title}
            </p>
          </div>
          <div className='mt-10'>
            <p className='bg-gradient-light bg-clip-text text-xl font-bold text-transparent'>
              {props.category}
            </p>
            <p className='max-w-60 font-normal text-base-white'>
              {props.address}
            </p>
          </div>
          <div className='mt-16 w-fit'>
            <Button
              asChild
              variant='outline'
              colorScheme='brand'
              className='w-36'>
              <Link href={props.url}>Ver mais</Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
}

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PropsWithChildren } from 'react';

type CardProps = PropsWithChildren & {
  className?: string;
  title: string;
  description: string;
};

export function Card({ children, description, title, className }: CardProps) {
  return (
    <div
      className={cn(
        'mx-auto bg-black/95 p-10 grid h-screen w-full items-center rounded-none md:h-auto md:max-w-[575px] md:rounded-2xl',
        className,
      )}>
      <Image
        className='mx-auto md:mx-0'
        alt='AURA'
        src={'/logos/aura_pass.svg'}
        width={154}
        height={42}
      />
      <div className='mb-6 text-center md:text-left'>
        <h1 className='mt-6 text-xl font-bold md:text-2xl'>{title}</h1>
        <p className='text-sm font-normal md:text-base'>{description}</p>
      </div>

      {children}
    </div>
  );
}

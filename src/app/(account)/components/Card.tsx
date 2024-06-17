import { PropsWithChildren } from 'react';

export function Card({ children }: PropsWithChildren) {
  return (
    <div className='mx-auto max-w-[575px] rounded-2xl bg-black/95 p-10'>
      {children}
    </div>
  );
}

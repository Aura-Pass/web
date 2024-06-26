import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

type CardProps = PropsWithChildren & {
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn('mx-auto bg-black/95 p-10', className)}>{children}</div>
  );
}

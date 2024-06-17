import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

type DividerProps = HTMLAttributes<HTMLDivElement>;

export function Divider(props: DividerProps) {
  return (
    <div
      className={cn('h-px w-full bg-gray-400', props.className)}
      {...props}
    />
  );
}

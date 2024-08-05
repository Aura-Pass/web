'use client';
import { forwardRef } from 'react';
import { Trigger, Icon } from '@radix-ui/react-select';
import { CaretDown } from '@phosphor-icons/react/dist/ssr';
import { cn } from '@/lib/utils';

export const SelectTrigger = forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger> & { errorMessage?: string }
>(({ className, children, errorMessage, ...props }, ref) => (
  <Trigger
    ref={ref}
    className={cn(
      'flex h-12 w-full py-[14px] items-center justify-between rounded-md border bg-transparent px-4 border-neutral-600 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300',
      errorMessage ? 'border-danger-500' : '',
      className,
    )}
    {...props}>
    {children}
    <Icon asChild>
      <CaretDown className='ml-1 size-4 opacity-50' />
    </Icon>
  </Trigger>
));

SelectTrigger.displayName = Trigger.displayName;

'use client';
import { forwardRef } from 'react';
import { ScrollDownButton } from '@radix-ui/react-select';
import { cn } from '@/lib/utils';
import { CaretDown } from '@phosphor-icons/react/dist/ssr';

export const SelectScrollDownButton = forwardRef<
  React.ElementRef<typeof ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof ScrollDownButton>
>(({ className, ...props }, ref) => (
  <ScrollDownButton
    ref={ref}
    className={cn(
      'flex cursor-default items-center justify-center py-1',
      className,
    )}
    {...props}
  >
    <CaretDown className='size-4' />
  </ScrollDownButton>
));
SelectScrollDownButton.displayName = ScrollDownButton.displayName;

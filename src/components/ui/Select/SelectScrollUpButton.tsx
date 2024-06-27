'use client';
import { cn } from '@/lib/utils';
import { CaretUp } from '@phosphor-icons/react/dist/ssr';
import { ScrollUpButton } from '@radix-ui/react-select';
import { forwardRef } from 'react';

export const SelectScrollUpButton = forwardRef<
  React.ElementRef<typeof ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof ScrollUpButton>
>(({ className, ...props }, ref) => (
  <ScrollUpButton
    ref={ref}
    className={cn(
      'flex cursor-default items-center justify-center py-1',
      className,
    )}
    {...props}
  >
    <CaretUp className='size-4' />
  </ScrollUpButton>
));
SelectScrollUpButton.displayName = ScrollUpButton.displayName;

'use client';
import { cn } from '@/lib/utils';
import { Label } from '@radix-ui/react-select';
import { forwardRef } from 'react';

export const SelectLabel = forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => (
  <Label
    ref={ref}
    className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
    {...props}
  />
));
SelectLabel.displayName = Label.displayName;

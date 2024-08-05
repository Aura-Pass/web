'use client';

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const labelVariants = cva(
  'text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants> & {
      variant?: 'default' | 'error';
    }
>(({ className, variant = 'default', ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    data-variant={variant}
    className={cn(
      labelVariants(),
      'data-[variant="error"]:text-danger-500',
      className,
    )}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };

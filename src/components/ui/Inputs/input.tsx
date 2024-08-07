import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, leftIcon, rightIcon, type, errorMessage, ...props }, ref) => {
    const hasError = Boolean(errorMessage);
    return (
      <label className='relative block'>
        {props.label && (
          <p className='mb-1 inline text-base font-medium'>{props.label}</p>
        )}
        <div className='relative flex items-center'>
          {leftIcon && (
            <span className='absolute left-4 flex items-center'>
              {leftIcon}
            </span>
          )}
          <input
            data-error={hasError}
            type={type}
            className={cn(
              'flex h-12 w-full border bg-transparent border-neutral-600 px-4 py-[14px] rounded-[4px] placeholder:text-neutral-400 text-sm font-medium data-[error="true"]:border-danger-500 leading-[48px] outline-none focus:border-base-white',
              leftIcon ? 'pl-10' : '',
              rightIcon ? 'pr-10' : '',
              className,
            )}
            ref={ref}
            {...props}
          />
          {rightIcon && (
            <span className='absolute right-4 flex items-center'>
              {rightIcon}
            </span>
          )}
        </div>
        {hasError && (
          <p className='text-sm font-medium text-danger-500'>{errorMessage}</p>
        )}
      </label>
    );
  },
);

Input.displayName = 'Input';

export { Input };

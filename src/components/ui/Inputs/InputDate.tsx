import * as React from 'react';

import { cn } from '@/lib/utils';
import { Input, InputProps } from './input';

const InputDate = React.forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    return (
      <Input
        className={cn('', props.className)}
        type='date'
        ref={ref}
        {...props}
      />
    );
  },
);

InputDate.displayName = 'InputDate';

export { InputDate };

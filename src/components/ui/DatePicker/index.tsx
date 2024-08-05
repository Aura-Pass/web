'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { CalendarBlank as CalendarIcon } from '@phosphor-icons/react';
import { ptBR } from 'date-fns/locale';

import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/Calendar/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Label } from '../Label';
import { DefaultFormField } from '@/utils/types/DefaultFormField';

type DatePickerProps = DefaultFormField<React.ComponentProps<typeof Calendar>>;

export function DatePicker({ label, errorMessage, ...rest }: DatePickerProps) {
  const date = rest.selected as Date;
  const hasError = Boolean(errorMessage);
  return (
    <div>
      {label && <Label>{label}</Label>}
      <Popover>
        <PopoverTrigger asChild>
          <button
            data-error={hasError}
            className={cn(
              'data-[error="true"]:border-red-500 w-full justify-between text-left font-normal flex items-center border border-neutral-600 px-4 h-12 py-[14px] text-sm rounded-[4px]',
              !date && 'text-muted-foreground',
            )}>
            {date ? (
              format(date, 'P', { locale: ptBR })
            ) : (
              <span className='font-medium text-neutral-600'>
                Selecione uma data
              </span>
            )}
            <CalendarIcon weight='fill' className='size-4' />
          </button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0'>
          <Calendar locale={ptBR} {...rest} />
        </PopoverContent>
      </Popover>
      {errorMessage && (
        <Label variant='error' className='text-sm font-medium'>
          {errorMessage}
        </Label>
      )}
    </div>
  );
}

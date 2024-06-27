import { tv } from 'tailwind-variants';

export const baseButton = tv({
  base: [
    'flex',
    'items-center',
    'justify-center',
    'gap-2',
    'whitespace-nowrap',
    'rounded-[4px]',
    'px-6',
    'text-center',
    'font-semibold',
    'transition-all',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
  ],
  variants: {
    variant: {
      fill: '',
      outline: '',
      text: '',
    },
    size: {
      lg: 'py-3 text-base',
      md: 'py-2 text-sm',
    },
  },
  defaultVariants: {
    variant: 'fill',
    sizes: 'lg',
  },
});

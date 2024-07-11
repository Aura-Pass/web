import { tv } from 'tailwind-variants';

export const baseButton = tv({
  base: [
    'flex',
    'items-center',
    'justify-center',
    'gap-2',
    'whitespace-nowrap',
    'rounded-[4px]',
    'text-center',
    'font-semibold',
    'transition-all',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
    'duration-300',
  ],
  variants: {
    variant: {
      fill: 'px-6',
      outline: 'px-6',
      text: 'px-0',
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

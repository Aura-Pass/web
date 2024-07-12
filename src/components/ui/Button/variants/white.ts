import { tv } from 'tailwind-variants';
import { baseButton } from './base';

export const whiteButton = tv({
  extend: baseButton,
  variants: {
    variant: {
      fill: 'bg-base-white text-neutral-900 hover:bg-neutral-100',
      outline:
        'border border-base-white bg-transparent text-base-white hover:bg-base-white hover:text-neutral-900',
      text: 'border-transparent bg-transparent px-0 text-base-white',
    },
  },
});

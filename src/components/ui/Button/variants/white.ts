import { tv } from 'tailwind-variants';
import { baseButton } from './base';

export const whiteButton = tv({
  extend: baseButton,
  variants: {
    variant: {
      fill: 'bg-base-white text-gray-100 hover:bg-gray-900',
      outline:
        'border border-base-white bg-transparent text-base-white hover:bg-base-white hover:text-gray-100',
      text: 'border-transparent bg-transparent px-0 text-base-white',
    },
  },
});

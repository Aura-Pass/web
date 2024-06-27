import { tv } from 'tailwind-variants';
import { baseButton } from './base';

export const whiteButton = tv({
  extend: baseButton,
  variants: {
    variant: {
      fill: 'bg-[#FEFDFF] text-gray-100 hover:bg-gray-900',
      outline:
        'border border-[#FEFDFF] bg-transparent text-[#FEFDFF] hover:bg-[#FEFDFF] hover:text-gray-100',
      text: 'border-transparent bg-transparent text-[#FEFDFF]',
    },
  },
});

import { tv } from 'tailwind-variants';
import { baseButton } from './base';

export const brandButton = tv({
  extend: baseButton,
  variants: {
    variant: {
      fill: 'relative overflow-hidden text-base-white before:absolute before:inset-0 before:-z-10 before:block before:bg-gradient-to-r before:from-[#5174A9] before:to-[#22B2B4] after:absolute after:inset-0 after:-z-10 after:block after:bg-gradient-to-r after:from-[#62E7DE] after:to-[#24DBE7] after:opacity-0 hover:before:opacity-0 hover:after:opacity-100',
      outline:
        'border border-[#62E7DE] bg-gradient-to-r from-[#62E7DE] to-[#24DBE7] bg-clip-text text-transparent transition-none before:absolute before:inset-0 before:-z-10 before:block before:bg-gradient-to-r before:from-[#22B2B4] before:to-[#5174A9] before:opacity-0 hover:border-transparent hover:bg-none hover:bg-clip-padding hover:text-base-white hover:before:opacity-100',
      text: 'bg-gradient-to-r from-[#62E7DE] to-[#24DBE7] bg-clip-text px-0 text-transparent',
    },
  },
});

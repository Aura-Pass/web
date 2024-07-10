import { tv } from 'tailwind-variants';
import { baseButton } from './base';

export const brandButton = tv({
  extend: baseButton,
  variants: {
    variant: {
      fill: 'bg-gradient-to-r from-[#5174A9] to-[#22B2B4] text-base-white hover:from-[#62E7DE] hover:to-[#24DBE7]',
      outline:
        'border border-[#62E7DE] bg-gradient-to-r from-[#62E7DE] to-[#24DBE7] bg-clip-text text-transparent transition-none hover:border-transparent hover:from-[#5174A9] hover:to-[#22B2B4] hover:bg-clip-padding hover:text-base-white ',
      text: 'bg-gradient-to-r from-[#62E7DE] to-[#24DBE7] bg-clip-text px-0 text-transparent',
    },
  },
});

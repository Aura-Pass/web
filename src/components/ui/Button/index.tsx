import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { Slot } from '@radix-ui/react-slot';
const button = tv({
  base: 'flex h-12 w-full items-center justify-center gap-1 rounded-[4px] text-center text-sm font-semibold transition-all hover:brightness-90 active:brightness-75 md:text-base',
  variants: {
    variants: {
      fill: 'bg-[#FEFDFF] text-[#111]',
      outline:
        'rounded-lg border border-gray-200 bg-transparent hover:bg-[#FEFDFF] hover:text-[#111]',
      inline: 'w-fit bg-none',
    },
  },
  defaultVariants: {
    variants: 'fill',
  },
});

type ButtonVariants = VariantProps<typeof button>;

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    asChild?: boolean;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={button({
          variants: props.variants,
          class: className,
        })}
        {...props}
        ref={ref}
      />
    );
  },
);

Button.displayName = 'Button';

export { Button };

/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from 'react';
import { type VariantProps } from 'tailwind-variants';
import { Slot } from '@radix-ui/react-slot';
import { baseButton, brandButton, whiteButton } from './variants';

type ButtonVariants = VariantProps<typeof baseButton>;
type ButtonColorsSchemes = 'brand' | 'white';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    asChild?: boolean;
    colorScheme?: ButtonColorsSchemes;
  };

const buttonVariants: Record<ButtonColorsSchemes, (params: any) => string> = {
  white: whiteButton,
  brand: brandButton,
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = 'lg',
      colorScheme = 'white',
      className,
      variant,
      asChild,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    const buttonVariant = buttonVariants[colorScheme];
    return (
      <Comp
        className={buttonVariant({
          variant: variant,
          size: size,
          class: className,
        })}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

export { Button };

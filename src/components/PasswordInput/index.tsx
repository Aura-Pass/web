'use client';
import { Eye, EyeSlash } from '@phosphor-icons/react/dist/ssr';
import { Input } from '../ui/Inputs/input';
import { ComponentProps, useState } from 'react';

type PasswordInputProps = ComponentProps<typeof Input>;

export function PasswordInput(props: PasswordInputProps) {
  const [type, setType] = useState<'password' | 'text'>('password');
  const handleToggleType = () => {
    if (type === 'password') {
      setType('text');
      return;
    }
    setType('password');
  };

  return (
    <Input
      type={type}
      rightIcon={
        type === 'password' ? (
          <EyeSlash
            weight='fill'
            className='block size-5 cursor-pointer'
            onClick={handleToggleType}
          />
        ) : (
          <Eye
            weight='fill'
            className='block size-5 cursor-pointer'
            onClick={handleToggleType}
          />
        )
      }
      {...props}
    />
  );
}

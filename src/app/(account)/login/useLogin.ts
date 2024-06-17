'use client';
import { useForm } from 'react-hook-form';
import { LoginData, loginSchema } from './types';
import { zodResolver } from '@hookform/resolvers/zod';
import { makeLogin } from './service/makeLogin';

export function useLogin() {
  const hookForm = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const handleMakeLogin = async (data: LoginData) => {
    const response = await makeLogin(data);
    return response;
  };

  return {
    ...hookForm,
    handleMakeLogin,
  };
}

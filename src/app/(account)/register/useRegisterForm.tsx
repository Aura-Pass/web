import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { RegisterRequestData, registerFormSchema } from './types';
import { registerUser } from './service';

export function useRegisterForm() {
  const form = useForm<RegisterRequestData>({
    resolver: zodResolver(registerFormSchema),
  });

  const onSubmitRegisterForm = form.handleSubmit(async (data) => {
    try {
      await registerUser(data);
    } catch (error) {
      console.log(error);
    }
  });

  return {
    form,
    onSubmitRegisterForm,
  };
}

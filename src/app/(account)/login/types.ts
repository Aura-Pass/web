import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'Campo obrigatório' })
    .email('E-mail inválido'),
  password: z
    .string({ required_error: 'Campo obrigatório' })
    .min(1, 'Campo obrigatório'),
});

export type LoginData = z.infer<typeof loginSchema>;

export type LoginResponse = {
  name: string;
  token: string;
};

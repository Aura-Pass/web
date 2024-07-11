import { z } from 'zod';

const GENDERS_TYPES = ['MALE', 'FEMALE', 'NON_BINARY', 'OTHER'] as const;
export type Gender = (typeof GENDERS_TYPES)[number];

export const RegisterFormData = z.object(
  {
    email: z.string().email(''),
    password: z.string(),
    name: z.string(),
    surname: z.string(),
    document: z.string(),
    birthDate: z.date(),
    phone: z.string().optional(),
    gender: z.object({
      label: z.string(),
      value: z.enum(GENDERS_TYPES),
    }),
  },
  {
    required_error: 'Campo obrigatório',
    invalid_type_error: 'Insira um valor válido',
  },
);

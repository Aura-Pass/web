import { customZodErrorsMessage } from '@/utils/customZodErrorsMessage';
import { z } from 'zod';

const GENDERS_TYPES = [
  'MALE',
  'FEMALE',
  'NONBINARY',
  'PREFERNOTTOSAY',
  'OTHER',
] as const;
export type Gender = (typeof GENDERS_TYPES)[number];

export const registerFormSchema = z.object(
  {
    email: z.string().email(customZodErrorsMessage.emailInvalid),
    password: z
      .string({ required_error: customZodErrorsMessage.isRequired })
      .min(6, customZodErrorsMessage.min(6))
      .max(16, customZodErrorsMessage.max(16)),
    name: z.string().min(1, { message: customZodErrorsMessage.isRequired }),
    surname: z.string().min(1, { message: customZodErrorsMessage.isRequired }),
    document: z.string().min(1, { message: customZodErrorsMessage.isRequired }),
    birthDate: z.date({ message: customZodErrorsMessage.isRequired }),
    phone: z.string().optional(),
    gender: z.enum(GENDERS_TYPES, {
      message: customZodErrorsMessage.isRequired,
    }),
  },
  {
    required_error: customZodErrorsMessage.isRequired,
    invalid_type_error: customZodErrorsMessage.fieldInvalid,
  },
);

export type RegisterRequestData = z.infer<typeof registerFormSchema>;

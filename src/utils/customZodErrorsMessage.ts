export const customZodErrorsMessage = {
  isRequired: 'Campo obrigatório',
  fieldInvalid: 'Campo inválido',
  emailInvalid: 'E-mail inválido',
  min: (min: number) => `No mínimo ${min} caracteres`,
  max: (max: number) => `No máximo ${max} caracteres`,
} as const;

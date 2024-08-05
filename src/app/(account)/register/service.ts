import { identityApi } from '@/service/apis/identity';
import { RegisterRequestData } from './types';

type RegisterResponse = {
  token: string;
};

export const registerUser = async (
  data: RegisterRequestData,
): Promise<RegisterResponse> => {
  const response = await identityApi.post<RegisterResponse>(
    '/api/v1/auth/register',
    data,
  );

  return response.data;
};

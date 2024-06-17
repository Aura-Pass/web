import { LoginData, LoginResponse } from '../types';

export async function makeLogin(data: LoginData): Promise<LoginResponse> {
  const res = await fetch('', { method: 'post', body: JSON.stringify(data) });
  const dataJson: LoginResponse = await res.json();
  return dataJson;
}

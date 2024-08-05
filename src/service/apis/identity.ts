import config from '@/config';
import { createApiInstance } from '../createApiInstance';

export const identityApi = createApiInstance({
  url: config.IDENTITY_API_URL,
});

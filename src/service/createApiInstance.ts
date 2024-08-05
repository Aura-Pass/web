import { Axios } from 'axios';

interface createApiInstance {
  url: string;
}

export const createApiInstance = ({ url }: createApiInstance): Axios => {
  const api = new Axios({
    baseURL: url,
  });

  return api;
};

import { Option } from '@/utils/types/Option';
import { Gender } from './types';

export const genders: Option<Gender>[] = [
  {
    label: 'Homem',
    value: 'MALE',
  },
  {
    label: 'Mulher',
    value: 'FEMALE',
  },
  {
    label: 'Não binário',
    value: 'NON_BINARY',
  },
  {
    label: 'Outro',
    value: 'OTHER',
  },
];

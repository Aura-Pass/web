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
    value: 'NONBINARY',
  },
  {
    label: 'Prefiro não dizer',
    value: 'PREFERNOTTOSAY',
  },
  {
    label: 'Outro',
    value: 'OTHER',
  },
];

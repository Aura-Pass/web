import { EventCategory } from './types';

export const categories: EventCategory[] = [
  {
    title: 'Eventos em alta',
    description: 'Confira os destaques da nossa paltaforma',
    category: 'trending',
  },
  {
    title: 'Eventos da semana',
    description: 'Confira os eventos em alta essa semana',
    category: 'week',
  },
  {
    title: 'Eventos em destaque',
    description: 'Confira os eventos em destaque na Aura Pass',
    category: 'featured',
  },
  {
    title: 'Novidades',
    description: 'Confira as novidades da plataforma',
    category: 'news',
  },
];

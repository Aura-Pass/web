import { Category } from './types';

export function useCategories() {
  const categories: Category[] = [
    {
      imageUrl: '/assets/categories/festivais.jpg',
      name: 'Festivais',
      url: 'festivais',
    },
    {
      imageUrl: '/assets/categories/festas_e_shows.jpg',
      name: 'Festas & Shows',
      url: 'festivais',
    },
    {
      imageUrl: '/assets/categories/teatros_e_shows.jpg',
      name: 'Teatros e espetáculos',
      url: 'festivais',
    },
    {
      imageUrl: '/assets/categories/cursos_e_workshops.jpg',
      name: 'Cursos e Workshops',
      url: 'festivais',
    },
    {
      imageUrl: '/assets/categories/gastronomia.jpg',
      name: 'Gastronomia',
      url: 'festivais',
    },
  ];

  return {
    categories,
  };
}

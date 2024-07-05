import { Category } from './types';

export function useCategories() {
  const categories: Category[] = [
    {
      imageUrl: '/categories/category_mock.jpg',
      name: 'Festivais',
      url: 'festivais',
    },
    {
      imageUrl: '/categories/category_mock.jpg',
      name: 'Festas & Shows',
      url: 'festivais',
    },
    {
      imageUrl: '/categories/category_mock.jpg',
      name: 'Teatros e espetáculos',
      url: 'festivais',
    },
    {
      imageUrl: '/categories/category_mock.jpg',
      name: 'Cursos e Workshops',
      url: 'festivais',
    },
    {
      imageUrl: '/categories/category_mock.jpg',
      name: 'Gastronomia',
      url: 'festivais',
    },
    {
      imageUrl: '/categories/category_mock.jpg',
      name: 'Mock',
      url: 'mock',
    },
    {
      imageUrl: '/categories/category_mock.jpg',
      name: 'Mock 2',
      url: 'mock2',
    },
  ];

  return {
    categories,
  };
}

import { Event } from '@/components/EventCard/types';
import { Category } from '../typex';

export function useCategoryCarousel(category: Category) {
  console.log(category);
  const events: Event[] = [
    {
      imageUrl: '/banners/mock_01.png',
      category: '',
      date: 'SAB, 17 AGO • 16:00',
      title: 'Quintaneja: A queridinha está de volta',
      location: 'Neo Química Arena - Show realizado em São Paulo',
      id: '1',
    },
    {
      imageUrl: '/banners/mock_02.jpg',
      category: '',
      date: 'SAB, 17 AGO • 16:00',
      title: 'Quintaneja: A queridinha está de volta',
      location: 'Audio Eventos E - São Paulo, SP',
      id: '2',
    },
    {
      imageUrl: '/banners/mock_01.png',
      category: '',
      date: 'SAB, 17 AGO • 16:00',
      title: 'Quintaneja: A queridinha está de volta',
      location: 'Neo Química Arena - Show realizado em São Paulo',
      id: '3',
    },
    {
      imageUrl: '/banners/mock_02.jpg',
      category: '',
      date: 'SAB, 17 AGO • 16:00',
      title: 'Quintaneja: A queridinha está de volta',
      location: 'Audio Eventos E - São Paulo, SP',
      id: '4',
    },
    {
      imageUrl: '/banners/mock_01.png',
      category: '',
      date: 'SAB, 17 AGO • 16:00',
      title: 'Quintaneja: A queridinha está de volta',
      location: 'Audio Eventos E - São Paulo, SP',
      id: '5',
    },
    {
      imageUrl: '/banners/mock_02.jpg',
      category: '',
      date: 'SAB, 17 AGO • 16:00',
      title: 'Quintaneja: A queridinha está de volta',
      location: 'Audio Eventos E - São Paulo, SP',
      id: '6',
    },
    {
      imageUrl: '/banners/mock_01.png',
      category: '',
      date: 'SAB, 17 AGO • 16:00',
      title: 'Quintaneja: A queridinha está de volta',
      location: 'Audio Eventos E - São Paulo, SP',
      id: '7',
    },
    {
      imageUrl: '/banners/mock_02.jpg',
      category: '',
      date: 'SAB, 17 AGO • 16:00',
      title: 'Quintaneja: A queridinha está de volta',
      location: 'Audio Eventos E - São Paulo, SP',
      id: '8',
    },
  ];

  return {
    events,
  };
}

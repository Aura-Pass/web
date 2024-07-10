import { EventType } from './types';

export function useEventsCarousel() {
  const events: EventType[] = [
    {
      imgUrl: '/banners/mock_02.jpg',
      title: 'kayblack 02',
      address:
        'Rua São Canuto, 500 - Jardim Santa Cruz (Campo Grande) - São Paulo - SP',
      category: 'Audio Eventos',
      date: '12 de maio',
      url: 'kayblack',
    },
    {
      imgUrl: '/banners/mock_01.png',
      title: 'kayblack',
      address:
        'Rua São Canuto, 500 - Jardim Santa Cruz (Campo Grande) - São Paulo - SP',
      category: 'Audio Eventos',
      date: '12 de maio',
      url: 'kayblack',
    },
  ];
  return { events };
}

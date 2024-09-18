import { Event } from '@/shared/EventCard/types';
import { Category } from './types';
import { eventsByCategoryMock } from './mocks';

export async function getEvents(eventCategory: Category): Promise<Event[]> {
  const promise = new Promise<Event[]>((res) => {
    setTimeout(() => {
      res(eventsByCategoryMock[eventCategory]);
    }, 2000);
  });
  return await promise;
}

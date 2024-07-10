import { EventsCarousel } from './components/EventsCarousel';
import { EventsCategories } from './components/EventsCategories';
import { EventsList } from './components/EventsList';

export default function Home() {
  return (
    <main>
      <div className='w-full'>
        <EventsCarousel />
      </div>
      <div className='mx-auto mt-14 w-full max-w-[1366px]'>
        <EventsCategories />
        <div className='mt-14'>
          <EventsList />
        </div>
      </div>
    </main>
  );
}

import { EventsCarousel } from './components/EventsCarousel';
import { EventsCategories } from './components/EventsCategories';
import { EventsList } from './components/EventsList';
import { PromotionalBanner } from './components/PromotionalBanner';

export default function Home() {
  return (
    <main>
      <div className='mx-auto mt-10 max-w-[1222px] rounded-2xl'>
        <EventsCarousel />
      </div>
      <div className='mx-auto mt-14 w-full max-w-[1222px]'>
        <EventsCategories />
        <div className='mt-14'>
          <EventsList />
        </div>
      </div>
      <div className='mx-auto mt-24 w-full max-w-[1222px]'>
        <PromotionalBanner />
      </div>
    </main>
  );
}

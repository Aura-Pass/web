import { EventsCarousel } from './components/EventsCarousel';
import { EventsCategories } from './components/EventsCategories';
import { EventsList } from './components/EventsList';
import { PromotionalBanner } from './components/PromotionalBanner';

export default function Home() {
  return (
    <main>
      <div className='mx-auto mt-10 hidden max-w-[1222px] rounded-2xl sm:block'>
        <EventsCarousel />
      </div>
      <div className='mx-auto mt-6 w-full max-w-[1222px] sm:mt-14'>
        <EventsCategories />
        <div className='mt-8 sm:mt-14'>
          <EventsList />
        </div>
      </div>
      <div className='mx-auto mt-14 w-full max-w-[1222px] sm:mb-36 sm:mt-24'>
        <PromotionalBanner />
      </div>
    </main>
  );
}

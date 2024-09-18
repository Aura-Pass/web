import { EventsCategories } from '@/shared/EventsCategories';
import { CategoryBanner } from './components/CategoryBanner';
import { EventsList } from './components/EventsList';

export default function Page({ params }: { params: { category: string } }) {
  console.log(params);
  return (
    <>
      <CategoryBanner
        description='Descrição sobre festivais'
        image_url='/assets/categories/category_banner_example.png'
        title='Festivais'
      />
      <div className='mx-auto mt-6 w-full max-w-[1222px] sm:mt-14'>
        <EventsList />
      </div>
      <div className='mx-auto mb-16 mt-8 w-full max-w-[1222px]  sm:mt-14'>
        <EventsCategories
          title='Outras categorias'
          description='Confira outras categorias'
        />
      </div>
    </>
  );
}

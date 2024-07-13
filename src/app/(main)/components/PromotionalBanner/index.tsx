import Image from 'next/image';
import { ListItem } from './ListItem';
import {
  ChartDonut,
  File,
  ListMagnifyingGlass,
} from '@phosphor-icons/react/dist/ssr';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function PromotionalBanner() {
  return (
    <section className='relative rounded-none border border-neutral-800 bg-neutral-1000 px-5 py-6 pb-0 sm:rounded-3xl sm:px-24 sm:py-14'>
      <div>
        <Image
          className='hidden sm:block'
          src={'/logos/aura_pass.svg'}
          alt='AURA'
          width={126}
          height={34}
        />
        <h2 className='mt-0 max-w-[391px] bg-gradient-light bg-clip-text text-center text-2xl font-semibold leading-10 text-transparent sm:mt-4 sm:text-left sm:text-[32px]'>
          Organize seu evento com a plataforma da Aura Pass
        </h2>
        <div className='mt-6 flex flex-col gap-4 sm:gap-6'>
          <ListItem
            icon={<ListMagnifyingGlass />}
            description='Gerencie seus eventos e acompanhe todos os detalhes de forma eficiente'
          />
          <ListItem
            icon={<File />}
            description='Gere relatórios e extraia informações detalhadas dos ingressos'
          />
          <ListItem
            icon={<ChartDonut />}
            description='Acompanhe os detalhes das vendas por meio de gráficos personalizados'
          />
        </div>
        <Button asChild className='mt-8 hidden w-72 sm:block'>
          <Link href='/partner'>Seja parceiro</Link>
        </Button>
        <Button size='md' asChild className='mt-6 w-full sm:hidden'>
          <Link href='/partner'>Seja parceiro</Link>
        </Button>
      </div>
      <div className='relative sm:static'>
        <div className='absolute bottom-0 right-1/2 size-[220px] translate-x-1/2 rounded-full bg-gradient-primary opacity-30 blur-[111px] sm:bottom-3 sm:right-28 sm:size-[487px] sm:-translate-x-0' />
        <Image
          className='absolute bottom-0 right-1/2 h-[211px] w-[200px] translate-x-1/2 sm:bottom-5 sm:right-[135px] sm:size-auto sm:translate-x-0'
          src={'/logos/brand-minimal-white.svg'}
          alt=''
          width={441}
          height={468}
        />
        <Image
          className='static bottom-0 right-[74px] mt-4 sm:absolute sm:mt-0'
          src={'/assets/images/banner-right.png'}
          alt=''
          width={718}
          height={556}
        />
      </div>
    </section>
  );
}

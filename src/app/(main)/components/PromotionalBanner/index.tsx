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
    <section className='relative rounded-3xl border border-gray-200 bg-gray-50 py-14 pl-24'>
      <div>
        <Image
          src={'/logos/aura_pass.svg'}
          alt='AURA'
          width={126}
          height={34}
        />
        <h2 className='mt-4 max-w-[391px] bg-gradient-light bg-clip-text text-[32px] font-semibold leading-10 text-transparent'>
          Organize seu evento com a plataforma da Aura Pass
        </h2>
        <div className='mt-6 flex flex-col gap-6'>
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
        <Button asChild className='mt-8 w-72'>
          <Link href='/partner'>Seja parceiro</Link>
        </Button>
      </div>
      <div className='absolute bottom-3 right-28 size-[487px] rounded-full bg-gradient-primary opacity-30 blur-[111px]' />
      <Image
        className='absolute bottom-5 right-[135px]'
        src={'/logos/brand-minimal-white.svg'}
        alt=''
        width={441}
        height={468}
      />
      <Image
        className='absolute bottom-0 right-[74px]'
        src={'/assets/images/banner-right.png'}
        alt=''
        width={718}
        height={556}
      />
    </section>
  );
}

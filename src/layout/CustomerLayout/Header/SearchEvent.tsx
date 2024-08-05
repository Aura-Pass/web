import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr';
import { Input } from '@/components/ui/Inputs/input';

export function SearchEvent() {
  return (
    <Input
      className='w-full border-neutral-800 bg-neutral-900 transition-all duration-300 placeholder:text-neutral-600 sm:w-[280px] sm:hover:w-[360px] sm:focus:w-[360px]'
      placeholder='Buscar evento...'
      rightIcon={
        <MagnifyingGlass weight='bold' className='size-4 cursor-pointer' />
      }
    />
  );
}

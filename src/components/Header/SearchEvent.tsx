import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr';
import { Input } from '../ui/Inputs/input';

export function SearchEvent() {
  return (
    <Input
      className='w-[280px] border-neutral-800 bg-neutral-900 transition-all duration-300 placeholder:text-neutral-600 hover:w-[360px] focus:w-[360px]'
      placeholder='Buscar evento...'
      rightIcon={
        <MagnifyingGlass weight='bold' className='size-4 cursor-pointer' />
      }
    />
  );
}

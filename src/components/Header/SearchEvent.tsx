import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr';
import { Input } from '../ui/Inputs/input';

export function SearchEvent() {
  return (
    <Input
      className='w-[280px] border-gray-200 bg-gray-100 transition-all duration-300 placeholder:text-gray-400 hover:w-[340px] focus:w-[340px]'
      placeholder='Buscar evento...'
      rightIcon={
        <MagnifyingGlass weight='bold' className='size-4 cursor-pointer' />
      }
    />
  );
}

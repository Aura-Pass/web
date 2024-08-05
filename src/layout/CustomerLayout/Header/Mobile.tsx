import Image from 'next/image';
import Link from 'next/link';
import { SelectState } from './SelectState';
import { SearchEvent } from './SearchEvent';

export function MobileHeader() {
  return (
    <header className='block px-5 pb-6 pt-4 sm:hidden'>
      <div className='flex items-center justify-between'>
        <Link href={'/'}>
          <Image
            src={'/logos/aura_pass.svg'}
            alt='Aura'
            width={75}
            height={20}
          />
        </Link>
        <div>
          <SelectState />
        </div>
      </div>
      <div className='mt-6'>
        <SearchEvent />
      </div>
    </header>
  );
}

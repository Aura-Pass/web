import Link from 'next/link';
import { helpLinks, menuLinks } from './constants';
import { Options } from './Options';
import { Envelope, MapPin, Phone } from '@phosphor-icons/react/dist/ssr';

export function DesktopFooter() {
  return (
    <div className='block justify-between sm:flex'>
      <div className='hidden sm:block'>
        <Options links={menuLinks} title='Menu' />
      </div>
      <div className='hidden sm:block'>
        <Options links={helpLinks} title='Ajuda' />
      </div>
      <div className='hidden sm:block'>
        <h3 className='mb-8 text-xl font-bold leading-7'>Contatos</h3>
        <div className='flex flex-col gap-5 text-base font-normal leading-5 text-base-white'>
          <Link
            href={'mailto:aurapass@gmail.com'}
            className='flex items-center gap-[6px]'
          >
            <Envelope /> aurapass@gmail.com
          </Link>
          <Link
            href={'tel:11992382934'}
            className='flex items-center gap-[6px]'
          >
            <Phone /> (11) 99238-2934
          </Link>
          <div className='flex items-center gap-[6px]'>
            <MapPin />{' '}
            <p className='max-w-[148px]'>
              Rua dos Imigrantes, 214, Osasco - SP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

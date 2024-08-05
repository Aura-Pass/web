import { Envelope, Phone, MapPin } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import { helpLinks, social } from './constants';
import { Options } from './Options';
import Image from 'next/image';

export function MobileFooter() {
  return (
    <>
      <div className='block sm:hidden'>
        <Image
          src='/logos/aura_pass.svg'
          alt='AURA'
          width={126}
          height={34}
          className='mx-auto sm:m-0'
        />
        <div className='mt-6 flex items-center justify-center gap-5 sm:justify-start'>
          {social.map((social) => (
            <Link href={social.url} key={social.url} target='_blank'>
              {social.icon}
            </Link>
          ))}
        </div>
      </div>

      <div className='mt-8 flex justify-between sm:hidden'>
        <Options links={helpLinks} title='Ajuda' />
        <div>
          <h3 className='mb-8 text-xl font-bold leading-7'>Contatos</h3>
          <div className='flex flex-col gap-5 text-base font-normal leading-5 text-base-white'>
            <Link
              href={'mailto:aurapass@gmail.com'}
              className='flex items-center gap-[6px]'>
              <Envelope /> aurapass@gmail.com
            </Link>
            <Link
              href={'tel:11992382934'}
              className='flex items-center gap-[6px]'>
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
    </>
  );
}

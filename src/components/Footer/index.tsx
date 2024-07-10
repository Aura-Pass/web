import Image from 'next/image';
import { social } from './constants';
import Link from 'next/link';
import { Envelope, MapPin, Phone } from '@phosphor-icons/react/dist/ssr';

export function Footer() {
  return (
    <footer className='mt-36 w-full bg-gray-50 px-[72px] py-12 pb-8'>
      <div className='flex justify-between'>
        <div>
          <Image
            src='/logos/aura_pass.svg'
            alt='AURA'
            width={126}
            height={34}
          />
          <div className='mt-6 flex items-center gap-5'>
            {social.map((social) => (
              <Link href={social.url} key={social.url} target='_blank'>
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className='mb-8 text-xl font-bold leading-7'>Menu</h3>
          <div className='flex flex-col gap-5 text-base font-normal leading-5 text-base-white'>
            <Link href={'/explore'}>Explorar</Link>
            <Link href={'/explore'}>Sobre Nós</Link>
            <Link href={'/explore'}>Seja Parceiro</Link>
            <Link href={'/explore'}>Entrar</Link>
          </div>
        </div>
        <div>
          <h3 className='mb-8 text-xl font-bold leading-7'>Ajuda</h3>
          <div className='flex flex-col gap-5 text-base font-normal leading-5 text-base-white'>
            <Link href={'/explore'}>Fale conosco</Link>
            <Link href={'/explore'}>Seja um produtor</Link>
            <Link href={'/explore'}>Afiliados</Link>
            <Link href={'/explore'}>Suporte</Link>
          </div>
        </div>
        <div>
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
            <div className='flex  items-center gap-[6px]'>
              <MapPin />{' '}
              <p className='max-w-[148px]'>
                Rua dos Imigrantes, 214, Osasco - SP
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='my-8 h-px w-full bg-base-white' />
      <p className='text-center'>
        © 2024 AuraPass. Todos os direitos reservados.
      </p>
    </footer>
  );
}

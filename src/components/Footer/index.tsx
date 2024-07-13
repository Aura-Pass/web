import Image from 'next/image';
import { social } from './constants';
import { DesktopFooter } from './Desktop';
import { MobileFooter } from './Mobile';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className='w-full bg-neutral-1000 px-5 py-12 pb-8 sm:px-[72px]'>
      <div className='mx-auto w-full max-w-[1222px]'>
        <div>
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
        <DesktopFooter />
        <MobileFooter />
        <div className='my-6 h-px w-full bg-base-white sm:my-8' />
        <p className='text-center text-sm sm:text-base'>
          © 2024 AuraPass. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

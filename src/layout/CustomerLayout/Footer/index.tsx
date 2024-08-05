import { DesktopFooter } from './Desktop';
import { MobileFooter } from './Mobile';

export function Footer() {
  return (
    <footer className='w-full bg-neutral-1000 px-5 py-12 pb-8 sm:px-[72px]'>
      <div className='mx-auto w-full max-w-[1222px]'>
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

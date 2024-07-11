'use client';
import Image from 'next/image';
import { SelectState } from './SelectState';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { SearchEvent } from './SearchEvent';

export function Header() {
  return (
    <div className='sticky left-0 top-0 z-40 w-full border-b border-gray-200 bg-gray-50 py-4 shadow-2xl'>
      <header className='mx-auto flex w-full max-w-[1222px] items-center justify-between'>
        <div className='flex items-center gap-6'>
          <Link href={'/'}>
            <Image
              src={'/logos/aura_pass.svg'}
              alt='Aura'
              width={100}
              height={27}
            />
          </Link>
          <SearchEvent />
        </div>
        <div className='flex items-center'>
          <SelectState />
          <nav className='ml-8 flex items-center gap-8 whitespace-nowrap'>
            <Button asChild size='md' variant='text' className='px-0'>
              <Link href={'/about'}>Sobre nós</Link>
            </Button>
            <Button asChild size='md' variant='text' className='px-0'>
              <Link href={'/partner'}>Seja parceiro</Link>
            </Button>
          </nav>
          <div className='mx-6 h-6 w-px bg-base-white' />
          <div className='flex items-center gap-6'>
            <Button size='md' colorScheme='brand' variant='text' asChild>
              <Link href={'/login'}>Entrar</Link>
            </Button>
            <Button size='md' colorScheme='brand' variant='outline' asChild>
              <Link href={'/register'}>Cadastre-se</Link>
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}

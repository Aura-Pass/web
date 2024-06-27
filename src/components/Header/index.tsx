'use client';
import Image from 'next/image';
import { Input } from '../ui/Inputs/input';
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr';
import { SelectState } from './SelectState';
import Link from 'next/link';
import { Button } from '../ui/Button';

export function Header() {
  return (
    <div className='w-full bg-gray-50 py-4'>
      <header className='mx-auto flex w-full max-w-[1222px] items-center justify-between'>
        <div className='flex items-center gap-6'>
          <Link href={'/'}>
            <Image
              src={'/logos/aura_pass.svg'}
              alt='Aura'
              width={126}
              height={34}
            />
          </Link>
          <Input
            className='border-gray-200 bg-gray-100 placeholder:text-gray-400'
            placeholder='Buscar evento...'
            rightIcon={<MagnifyingGlass className='size-4 cursor-pointer' />}
          />
        </div>
        <div className='flex items-center'>
          <SelectState />
          <nav className='ml-8 flex items-center gap-8 whitespace-nowrap'>
            <Link href={'/explore'}>Explorar</Link>
            <Link href={'/about'}>Sobre nós</Link>
            <Link href={'/partner'}>Seja parceiro</Link>
          </nav>
          <div className='mx-4 h-6 w-px bg-[#FEFDFF]' />
          <div className='flex items-center gap-4'>
            <Button colorScheme='brand' variant='text' asChild>
              <Link href={'/login'}>Entrar</Link>
            </Button>
            <Button colorScheme='brand' variant='outline' asChild>
              <Link href={'/register'}>Cadastre-se</Link>
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}

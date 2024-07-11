'use client';
import { Input } from '@/components/ui/Inputs/input';
import { Card } from '../components/Card';
import { PasswordInput } from '@/components/PasswordInput';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function Register() {
  return (
    <main>
      <Card
        description='Informe os dados abaixo para criar a sua conta na Aura Pass.'
        title='Crie a sua conta'
      >
        <form className='block w-full'>
          <div className='flex flex-col gap-4'>
            <Input label='E-mail' />
            <PasswordInput label='Senha' />
            <div className='h-px bg-gray-400' />
            <div className='grid w-full grid-cols-2 gap-4'>
              <Input label='Nome' className='w-full' />
              <Input label='Sobrenome' className='w-full' />
            </div>
            <div className='grid w-full grid-cols-2 gap-4'>
              <Input label='CPF' />
              <Input label='Data de nascimento' />
            </div>
            <div className='grid w-full grid-cols-2 gap-4'>
              <Input label='Número (Whatsapp)' />
              <Input label='Gênero' />
            </div>
          </div>
          <Button className='mt-6 w-full' type='submit'>
            Criar conta
          </Button>
          <p className='mt-6 text-center font-semibold'>
            Já possui uma conta?{' '}
            <Link
              className='bg-gradient-light bg-clip-text text-transparent'
              href='/login'
            >
              Entrar com conta Aura
            </Link>
          </p>
          <div className='my-6 h-px bg-gray-400' />
          <p className='text-center text-sm font-medium'>
            Ao me cadastrar, concordo com os Termos de Uso e Política de
            Privacidade Aura Pass
          </p>
        </form>
      </Card>
    </main>
  );
}

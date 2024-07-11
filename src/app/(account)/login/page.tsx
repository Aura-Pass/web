'use client';
import { Input } from '@/components/ui/Inputs/input';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react/dist/ssr';
import { Divider } from '@/components/ui/Divider';
import { LoginWithGoogle } from './components/LoginWithGoogle';
import { LoginWithFacebook } from './components/LoginWithFacebook';
import { PasswordInput } from '@/components/PasswordInput';
import { useLogin } from './useLogin';
import { Controller } from 'react-hook-form';
import { Card } from '../components/Card';

export default function Login() {
  const {
    handleMakeLogin,
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useLogin();
  return (
    <main className='text-base-white'>
      <Card
        description='Se você já possui uma conta, preencha seus dados de acesso à plataforma.'
        title='Acesse sua conta'
      >
        <div>
          <form onSubmit={handleSubmit(handleMakeLogin)}>
            <div className='mb-4'>
              <Input
                type='email'
                placeholder='Seu e-mail'
                label='Email'
                errorMessage={errors.email?.message}
                {...register('email')}
              />
            </div>
            <Controller
              control={control}
              name='password'
              render={({ field }) => (
                <PasswordInput
                  errorMessage={errors.password?.message}
                  placeholder='Sua senha'
                  onChange={(e) => field.onChange(e.target.value)}
                />
              )}
            />

            <Button className='mt-6 w-full'>Acessar conta</Button>
          </form>
          <div className='flex items-center justify-between'>
            <Button
              className='justify-start pl-0 text-left'
              variant='text'
              asChild
            >
              <Link href={'/forgot-password'}>
                <ArrowLeft />
                Esqueceu a senha?
              </Link>
            </Button>
            <Button
              className='justify-end pr-0 text-right'
              variant='text'
              asChild
            >
              <Link href={'/sign-up'}>
                Criar nova conta
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <Divider className='mb-6' />
          <div className='flex flex-col gap-4 text-sm'>
            <LoginWithGoogle />
            <LoginWithFacebook />
          </div>
        </div>
      </Card>
    </main>
  );
}

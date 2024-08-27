'use client';
import { Input } from '@/components/ui/Inputs/input';
import { PasswordInput } from '@/components/PasswordInput';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Select } from '@/components/ui/Select';
import { genders } from './constants';
import { Label } from '@/components/ui/Label';
import { useRegisterForm } from './useRegisterForm';
import { Controller } from 'react-hook-form';
import { InputDate } from '@/components/ui/Inputs/InputDate';
import { onChangeDateInput } from '@/utils/onChangeDateInput';
import { useHookFormMask } from 'use-mask-input';
import Image from 'next/image';
export default function Register() {
  const { form, onSubmitRegisterForm } = useRegisterForm();
  const registerWithMask = useHookFormMask(form.register);
  const {
    register,
    control,
    formState: { errors },
  } = form;
  return (
    <main className='sm:py-5'>
      <div className='min-h-screen bg-neutral-900 px-5 pb-11 pt-5 sm:mx-auto sm:min-h-0 sm:max-w-[720px] sm:rounded-2xl sm:p-10'>
        <Image
          className=''
          alt='AURA'
          src={'/logos/aura_pass.svg'}
          width={154}
          height={42}
        />
        <div className='mb-6 text-left md:text-left'>
          <h1 className='mt-6 text-xl font-bold md:text-2xl'>
            Crie a sua conta
          </h1>
          <p className='text-sm font-normal md:text-base'>
            Informe os dados abaixo para criar a sua conta na Aura Pass.
          </p>
        </div>
        <form onSubmit={onSubmitRegisterForm} className='block w-full'>
          <div className='flex flex-col gap-4'>
            <Input
              label='E-mail'
              errorMessage={errors.email?.message}
              {...register('email')}
            />
            <Controller
              control={control}
              name='password'
              render={({ field }) => (
                <PasswordInput
                  label='Senha'
                  onChange={field.onChange}
                  errorMessage={errors.password?.message}
                />
              )}
            />
            <div className='h-px bg-neutral-600' />
            <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
              <Input
                label='Nome'
                errorMessage={errors.name?.message}
                className='w-full'
                {...register('name')}
              />
              <Input
                label='Sobrenome'
                className='w-full'
                errorMessage={errors.surname?.message}
                {...register('surname')}
              />
            </div>
            <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
              <Input
                label='CPF'
                errorMessage={errors.document?.message}
                {...registerWithMask('document', '999.999.999-99')}
              />
              <Controller
                control={control}
                name='birthDate'
                render={({ field }) => (
                  <InputDate
                    placeholder='Selecione uma data'
                    label='Data de nascimento'
                    errorMessage={errors.birthDate?.message}
                    onChange={(e) => onChangeDateInput(e, field.onChange)}
                  />
                )}
              />
            </div>
            <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
              <Input
                label='Número (Whatsapp)'
                errorMessage={errors.phone?.message}
                {...registerWithMask('phone', [
                  '(99) 99999-9999',
                  '+99 (99) 99999-9999',
                ])}
              />
              <div>
                <Label>Gênero</Label>
                <Controller
                  control={control}
                  name='gender'
                  render={({ field }) => (
                    <Select.Root onValueChange={field.onChange}>
                      <Select.Trigger errorMessage={errors.gender?.message}>
                        <Select.Value placeholder='Gênero' />
                      </Select.Trigger>
                      <Select.Content>
                        <Select.Group>
                          {genders.map((gender) => (
                            <Select.Item
                              key={gender.value}
                              value={gender.value}>
                              {gender.label}
                            </Select.Item>
                          ))}
                        </Select.Group>
                      </Select.Content>
                    </Select.Root>
                  )}
                />
                {errors.gender?.message && (
                  <Label variant='error'>{errors.gender?.message}</Label>
                )}
              </div>
            </div>
          </div>
          <Button className='mt-6 w-full' type='submit'>
            Criar conta
          </Button>
          <p className='mt-6 text-center font-semibold'>
            Já possui uma conta?{' '}
            <Link
              className='bg-gradient-light bg-clip-text text-transparent'
              href='/login'>
              Entrar com conta Aura
            </Link>
          </p>
          <div className='my-6 h-px bg-neutral-600' />
          <p className='text-center text-sm font-medium'>
            Ao me cadastrar, concordo com os Termos de Uso e Política de
            Privacidade Aura Pass
          </p>
        </form>
      </div>
    </main>
  );
}

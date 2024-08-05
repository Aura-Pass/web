'use client';
import { Input } from '@/components/ui/Inputs/input';
import { Card } from '../components/Card';
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

export default function Register() {
  const { form, onSubmitRegisterForm } = useRegisterForm();
  const {
    register,
    control,
    formState: { errors },
  } = form;
  return (
    <main>
      <Card
        description='Informe os dados abaixo para criar a sua conta na Aura Pass.'
        title='Crie a sua conta'
        className='lg:max-w-[720px]'>
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
            <div className='grid w-full grid-cols-2 gap-4'>
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
            <div className='grid w-full grid-cols-2 gap-4'>
              <Input
                label='CPF'
                errorMessage={errors.document?.message}
                {...register('document')}
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
            <div className='grid w-full grid-cols-2 gap-4'>
              <Input
                label='Número (Whatsapp)'
                errorMessage={errors.phone?.message}
                {...register('phone')}
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
      </Card>
    </main>
  );
}

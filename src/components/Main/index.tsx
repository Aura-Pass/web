import Image from 'next/image';

export function Main() {
  return (
    <section className='flex flex-col items-center justify-center gap-5 text-4xl text-white'>
      <Image src={'/logos/aura_pass.svg'} width={500} height={30} alt='' />
      <h2>Aura Pass</h2>
    </section>
  );
}

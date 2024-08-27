import { Button } from '@/components/ui/Button';

export function BuyButton() {
  return (
    <div className='sticky bottom-0 left-0 w-full bg-neutral-950 p-5'>
      <Button variant='fill' colorScheme='brand' className='w-full'>
        Comprar ingresso
      </Button>
    </div>
  );
}

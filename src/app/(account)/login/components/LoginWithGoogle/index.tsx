import { Button } from '@/components/ui/Button';
import { GoogleLogo } from './GoogleLogo';

export function LoginWithGoogle() {
  return (
    <Button variant='outline'>
      <GoogleLogo /> Continuar com o Google
    </Button>
  );
}

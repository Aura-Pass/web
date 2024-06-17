import { Button } from '@/components/ui/Button';
import { GoogleLogo } from './GoogleLogo';

export function LoginWithGoogle() {
  return (
    <Button variants='outline'>
      <GoogleLogo /> Continuar com o Google
    </Button>
  );
}

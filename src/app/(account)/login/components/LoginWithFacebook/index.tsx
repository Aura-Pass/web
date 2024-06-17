import { Button } from '@/components/ui/Button';
import { FacebookLogo } from './GoogleLogo';

export function LoginWithFacebook() {
  return (
    <Button variants='outline'>
      <FacebookLogo /> Continuar com o Facebook
    </Button>
  );
}

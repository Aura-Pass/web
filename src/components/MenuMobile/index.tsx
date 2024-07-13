import { MenuItem } from './MenuItem';
import { Heart, House, Ticket, User } from '@phosphor-icons/react/dist/ssr';
export function MenuMobile() {
  return (
    <div className='h-16'>
      <nav className='fixed bottom-0 left-0 grid h-16 w-full grid-cols-4 border-t border-neutral-700 bg-neutral-950 sm:hidden'>
        <MenuItem icon={<House weight='fill' />} label='Início' url='/' />
        <MenuItem icon={<Ticket />} label='Ingressos' url='/tickets' />
        <MenuItem icon={<Heart />} label='Favoritos' url='/favoritos' />
        <MenuItem icon={<User weight='fill' />} label='Perfil' url='/profile' />
      </nav>
    </div>
  );
}

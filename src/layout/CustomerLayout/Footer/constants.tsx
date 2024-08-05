import { Envelope, MapPin, Phone } from '@phosphor-icons/react/dist/ssr';
import { Facebook } from './icons/Facebook';
import { Instagram } from './icons/Instagram';
import { LinkedIn } from './icons/LinkedIn';
import { Twitter } from './icons/Twitter';
import { Youtube } from './icons/Youtube';
import { LinkItem } from './types';

export const social = [
  {
    icon: <Facebook />,
    url: '',
  },
  {
    icon: <Twitter />,
    url: '',
  },
  {
    icon: <Instagram />,
    url: '',
  },
  {
    icon: <LinkedIn />,
    url: '',
  },
  {
    icon: <Youtube />,
    url: '',
  },
];

export const helpLinks: LinkItem[] = [
  {
    label: 'Fale conosco',
    url: '/fale-conosco',
  },
  {
    label: 'Seja um produtor',
    url: '/seja-produtor',
  },
  {
    label: 'Afiliados',
    url: '/afiliados',
  },
  {
    label: 'Suporte',
    url: '/suporte',
  },
];
export const menuLinks: LinkItem[] = [
  {
    label: 'Explorar',
    url: '/explorar',
  },
  {
    label: 'Sobre nós',
    url: '/sobre-nos',
  },
  {
    label: 'Seja parceiro',
    url: '/seja-parceiro',
  },
  {
    label: 'Entrar',
    url: '/login',
  },
];

export const contactLinks: LinkItem[] = [
  {
    url: 'mailto:aurapass@gmail.com',
    icon: <Envelope />,
    label: 'aurapass@gmail.com',
  },
  {
    url: 'tel:11992382934',
    icon: <Phone />,
    label: '(11) 99238-2934',
  },
  {
    url: 'tel:11992382934',
    icon: <MapPin />,
    label: 'Rua dos Imigrantes, 214, Osasco - SP',
  },
];

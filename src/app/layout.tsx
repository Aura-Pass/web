import type { Metadata } from 'next';
import { Red_Hat_Display } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';

const redHat = Red_Hat_Display({
  subsets: ['latin'],
  variable: '--red-hat',
});

export const metadata: Metadata = {
  title: 'Aura Pass',
  description:
    'O Aura Pass é a plataforma online de eventos mais modernizada do Brasil. Shows, festas, teatros, stand up, cursos e muito mais. Encontre e organize eventos com o Aura Pass!',
  icons: '/favicon.svg',
  keywords: [
    'eventos',
    'ingressos',
    'shows',
    'concertos',
    'teatro',
    'palestras',
    'workshops',
    'conferências',
    'seminários',
    'cursos',
    'feiras',
    'festas',
    'eventos corporativos',
    'eventos online',
    'eventos presenciais',
    'bilhetes',
    'venda de ingressos',
    'plataforma de eventos',
    'gestão de eventos',
    'organização de eventos',
    'inscrições',
    'eventos culturais',
    'eventos esportivos',
    'eventos musicais',
    'ingressos online',
    'tickets',
    'compra de ingressos',
    'reserva de ingressos',
    'agenda de eventos',
    'promoção de eventos',
    'Aura Pass',
    'Aura',
  ],
  openGraph: {
    locale: 'pt_BR',
    type: 'website',
    url: 'https://aurapass.com.br',
    title: 'Aura Pass',
    description:
      'Os melhores eventos e conteúdos online estão no Aura Pass. Teatros, festas, shows, eventos corporativos, gastronômicos e muito mais. Garanta seu ingresso!',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br' suppressHydrationWarning>
      <body className={`${redHat.variable} font-sans`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

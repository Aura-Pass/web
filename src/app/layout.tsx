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
  description: 'Aura Pass Aplication',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br' suppressHydrationWarning>
      <body className={redHat.variable}>
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

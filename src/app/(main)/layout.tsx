import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { MenuMobile } from '@/components/MenuMobile';

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <MenuMobile />
    </>
  );
}

import { Footer } from './Footer';
import { Header } from './Header';
import { MenuMobile } from './MenuMobile';

export function CustomerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <>
        <Header />
        <main>{children}</main>
        <Footer />
        <MenuMobile />
      </>
    </>
  );
}

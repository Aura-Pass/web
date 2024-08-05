import { CustomerLayout } from '@/layout/CustomerLayout';

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <CustomerLayout>{children}</CustomerLayout>;
}

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='grid min-h-screen w-full items-center bg-login bg-cover bg-center bg-no-repeat'>
      {children}
    </div>
  );
}

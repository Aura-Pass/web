'use client';
import Link from 'next/link';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

type MenuItemProps = {
  icon: ReactNode;
  label: string;
  url: string;
};

export function MenuItem({ icon, label, url }: MenuItemProps) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Link
      href={url}
      data-active={pathname === url}
      className='flex flex-col items-center justify-center text-xs font-medium data-[active="true"]:text-[#62E7DE]'
    >
      <span className='text-3xl'>{icon}</span>
      {label}
    </Link>
  );
}

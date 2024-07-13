'use client';
import { DesktopHeader } from './Desktop';
import { MobileHeader } from './Mobile';

export function Header() {
  return (
    <div className='static left-0 top-0 z-40 w-full border-b border-neutral-800 bg-neutral-1000 shadow-2xl sm:sticky'>
      <DesktopHeader />
      <MobileHeader />
    </div>
  );
}

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { LinkItem } from './types';

type OptionsProps = {
  title: string;
  links: LinkItem[];
  className?: string;
};

export function Options({ links, className, title }: OptionsProps) {
  return (
    <div className={cn(className)}>
      <h3 className='mb-8 text-xl font-bold leading-7'>{title}</h3>
      <div className='flex flex-col gap-5 text-base font-normal leading-5 text-base-white'>
        {links.map((link) => (
          <>
            {link.url && (
              <Link href={link.url} key={link.url}>
                {link.label}
              </Link>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

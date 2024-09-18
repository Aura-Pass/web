import { ReactNode } from 'react';

type ListItemProps = {
  icon: ReactNode;
  description: string;
};

export function ListItem(props: ListItemProps) {
  return (
    <div className='flex items-center gap-4 text-base-white'>
      <div className='grid size-9 place-items-center rounded-lg border border-base-white text-xl sm:size-12 sm:text-2xl'>
        {props.icon}
      </div>
      <p className='max-w-[275px] text-left text-sm font-medium leading-5 sm:text-base'>
        {props.description}
      </p>
    </div>
  );
}

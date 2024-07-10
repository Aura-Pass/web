import { ReactNode } from 'react';

type ListItemProps = {
  icon: ReactNode;
  description: string;
};

export function ListItem(props: ListItemProps) {
  return (
    <div className='flex items-center gap-4 text-base-white'>
      <div className='grid size-12 place-items-center rounded-lg border border-base-white text-2xl'>
        {props.icon}
      </div>
      <p className='max-w-[275px] text-left font-medium leading-5'>
        {props.description}
      </p>
    </div>
  );
}

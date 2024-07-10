import { ColorType } from '@/styles/colors/ColorType';

interface ColorItemProps {
  color: ColorType | string;
  colorName: string;
}

export function ColorItem({ color, colorName }: ColorItemProps) {
  if (typeof color === 'string') {
    return null;
  }
  const variants = Object.keys(color);
  return (
    <div className='text-gray-100 dark:text-white'>
      <p className='mb-2 font-bold uppercase'>{colorName}</p>
      <div className='flex gap-4'>
        {variants.map((key) => (
          <div key={key}>
            <div
              style={{ backgroundColor: String(color[key]) }}
              className={'size-10 rounded'}
            />
            <p className='text-xs'>{key}</p>
            <p className='font-mono text-xs lowercase'>{String(color[key])}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

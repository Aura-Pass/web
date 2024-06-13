import { colors } from '@/styles/colors';
import { ColorItem } from './ColorItem';

export type ColorsCategory = keyof typeof colors;

export function Colors() {
  const colorsKeys = Object.keys(colors);

  return (
    <div className='flex flex-col gap-8'>
      {colorsKeys.map((key: string) => (
        <ColorItem
          key={key}
          color={colors[key as ColorsCategory]}
          colorName={key}
        />
      ))}
    </div>
  );
}

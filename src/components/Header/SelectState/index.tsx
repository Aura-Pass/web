import { Select } from '@/components/ui/Select';
import { MapPin } from '@phosphor-icons/react/dist/ssr';
import { states } from './states';

export function SelectState() {
  return (
    <Select.Root>
      <Select.Trigger>
        <MapPin weight='bold' className='mr-1 size-4' />
        <Select.Value className='bg-none' placeholder='Estado' />
      </Select.Trigger>
      <Select.Content className='bg-none'>
        {Object.values(states).map((state) => (
          <Select.Item key={state} value={state}>
            {state}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}

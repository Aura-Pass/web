import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  args: {
    children: 'Button',
  },
  argTypes: {
    colorScheme: {
      options: ['white', 'brand'],
      control: 'radio',
    },
    size: {
      options: ['md', 'lg'],
      control: 'radio',
    },
    variant: {
      options: ['fill', 'outline', 'text'],
      control: 'radio',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => {
    return (
      <div>
        <div className='flex gap-4'>
          <Button>Button</Button>
          <Button variant='outline'>Button</Button>
          <Button variant='text'>Button</Button>
        </div>
        <div className='mt-4 flex gap-4'>
          <Button colorScheme='brand'>Button</Button>
          <Button colorScheme='brand' variant='outline'>
            Button
          </Button>
          <Button colorScheme='brand' variant='text'>
            Button
          </Button>
        </div>
      </div>
    );
  },
};

export const White: Story = {
  args: {
    size: 'lg',
    colorScheme: 'white',
  },
};

export const Brand: Story = {
  args: {
    size: 'lg',
    colorScheme: 'brand',
  },
};

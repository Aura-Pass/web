import type { Meta, StoryObj } from '@storybook/react';

import { EventCard } from '.';

const meta: Meta<typeof EventCard> = {
  component: EventCard,
  title: 'Components/EventCard',
};

export default meta;
type Story = StoryObj<typeof EventCard>;

export const Default: Story = {
  args: {
    imageUrl:
      'https://image.freepik.com/free-vector/modern-event-banner-template-with-degrade-background_1361-2219.jpg',
    category: '',
    date: 'SAB, 17 AGO • 16:00',
    title: 'Quintaneja: A queridinha está de volta',
    location: 'Audio Eventos E - São Paulo, SP',
  },
};

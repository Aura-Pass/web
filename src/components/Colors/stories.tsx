import type { Meta, StoryObj } from '@storybook/react';

import { Colors } from '.';

const meta: Meta<typeof Colors> = {
  component: Colors,
  title: 'DesignSystem/Colors',
};

export default meta;
type Story = StoryObj<typeof Colors>;

export const Default: Story = {};

import { fn } from '@storybook/test';
import Tab from './Tab';
import { TabProps } from './Tab.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<TabProps> = {
  title: 'atoms/Tab',
  component: Tab,
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Tab',
    selected: false,
    disabled: false,
  },
};

import { fn } from '@storybook/test';
import Tab from './Tab';
import { TabProps } from './Tab.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<TabProps> = {
  title: 'atoms/Tab',
  component: Tab,
  tags: ['autodocs'],
  args: {
    label: 'Tab',
    selected: true,
    disabled: false,
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Disabled: Story = {
  args: {
    label: 'Disabled Tab',
    selected: false,
    disabled: true,
  },
};

export const DisabledWithSelected: Story = {
  args: {
    label: 'Disabled Tab',
    disabled: true,
  },
};

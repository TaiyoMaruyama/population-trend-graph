import { fn } from '@storybook/test';
import Checkbox from './Checkbox';
import { CheckboxProps } from './Checkbox.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<CheckboxProps> = {
  title: 'atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: { onChange: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: 'checkbox',
    label: 'Checkbox',
    checked: false,
  },
};

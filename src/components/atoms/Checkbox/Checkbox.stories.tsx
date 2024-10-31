import { fn } from '@storybook/test';
import Checkbox from './Checkbox';
import { CheckboxProps } from './Checkbox.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<CheckboxProps> = {
  title: 'atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    id: 'checkbox',
    label: '東京都',
    checked: false,
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const LabelWithLineBreak: Story = {
  args: {
    label: '大阪府大阪市',
  },
};

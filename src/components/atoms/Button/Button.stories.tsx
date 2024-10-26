import { fn } from '@storybook/test';
import Button from './Button';
import { ButtonProps } from './Button.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<ButtonProps> = {
  title: 'atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
    disabled: false,
  },
};

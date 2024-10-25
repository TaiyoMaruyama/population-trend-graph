import { actions } from '@storybook/addon-actions';
import Button from './Button';
import { ButtonProps } from './Button.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<ButtonProps> = {
  title: 'atoms/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
    disabled: false,
    onClick: actions('onClick').onClick,
  },
};

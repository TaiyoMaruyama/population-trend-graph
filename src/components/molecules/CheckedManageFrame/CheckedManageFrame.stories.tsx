import { fn } from '@storybook/test';
import CheckedManageFrame from './CheckedManageFrame';
import { CheckedManageFrameProps } from './CheckedManageFrame.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<CheckedManageFrameProps> = {
  title: 'molecules/CheckedManageFrame',
  component: CheckedManageFrame,
  tags: ['autodocs'],
  args: { onReset: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    checkedSum: 0,
  },
};

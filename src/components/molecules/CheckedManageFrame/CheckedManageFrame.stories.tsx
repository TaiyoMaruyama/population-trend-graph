import { fn } from '@storybook/test';
import CheckedManageFrame from './CheckedManageFrame';
import { CheckedManageFrameProps } from './CheckedManageFrame.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<CheckedManageFrameProps> = {
  title: 'molecules/CheckedManageFrame',
  component: CheckedManageFrame,
  tags: ['autodocs'],
  args: {
    checkedSum: 0,
    onReset: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Disabled: Story = {
  args: {
    checkedSum: 0,
  },
};

export const CheckedSumFive: Story = {
  args: {
    // 1桁の時
    checkedSum: 5,
  },
};

export const CheckedSumTen: Story = {
  args: {
    // 2桁の時
    checkedSum: 10,
  },
};

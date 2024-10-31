import { fn } from '@storybook/test';
import PrefCheckboxGroup from './PrefCheckboxGroup';
import { PrefCheckboxGroupProps } from './PrefCheckboxGroup.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<PrefCheckboxGroupProps> = {
  title: 'molecules/PrefCheckboxGroup',
  component: PrefCheckboxGroup,
  tags: ['autodocs'],
  args: { handleCheck: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <div style={{ maxWidth: '1080px' }}>
      <PrefCheckboxGroup {...args} />
    </div>
  ),
  args: {
    checkedList: [
      { prefCode: 3, prefName: '岩手県' },
      { prefCode: 4, prefName: '宮城県' },
    ],
  },
};

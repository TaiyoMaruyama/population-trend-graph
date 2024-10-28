import { fn } from '@storybook/test';
import { PopulationTabDefs } from '@/consts/PopulationTabDefs';
import PopulationTabGroup from './PopulationTabGroup';
import { PopulationTabGroupProps, PopulationTabId } from './PopulationTabGroup.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<PopulationTabGroupProps> = {
  title: 'molecules/PopulationTabGroup',
  component: PopulationTabGroup,
  tags: ['autodocs'],
  args: { onClick: fn() },
  argTypes: {
    selected: {
      options: Object.values(PopulationTabId),
      control: 'select',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    tabs: PopulationTabDefs,
    selected: PopulationTabId.TotalPopulation,
  },
};
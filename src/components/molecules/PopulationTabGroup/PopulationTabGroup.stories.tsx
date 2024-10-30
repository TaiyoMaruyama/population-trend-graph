import { fn } from '@storybook/test';
import { populationTabDefs } from '@/consts/PopulationTabDefs';
import { PopulationTabId } from '@/types/resas';
import PopulationTabGroup from './PopulationTabGroup';
import { PopulationTabGroupProps } from './PopulationTabGroup.types';
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
    tabs: populationTabDefs,
    selected: PopulationTabId.TotalPopulation,
  },
};

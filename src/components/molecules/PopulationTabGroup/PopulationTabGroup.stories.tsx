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
  args: { tabs: populationTabDefs, onClick: fn() },
  argTypes: {
    selected: {
      options: Object.values(PopulationTabId),
      control: 'select',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Disabled: Story = {
  args: {
    selected: PopulationTabId.TotalPopulation,
    disabled: true,
  },
};

export const WithElderlyPopulation: Story = {
  args: {
    selected: PopulationTabId.ElderlyPopulation,
    disabled: false,
  },
};

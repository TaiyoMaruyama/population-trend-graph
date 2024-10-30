import { Meta, StoryObj } from '@storybook/react';
import PopulationTrendGraph from './PopulationTrendGraph';

const meta: Meta = {
  title: 'templates/PopulationTrendGraph',
  component: PopulationTrendGraph,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <PopulationTrendGraph />
    </div>
  ),
};

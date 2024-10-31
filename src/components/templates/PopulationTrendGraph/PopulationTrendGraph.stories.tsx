import { Meta, StoryObj } from '@storybook/react';
import PopulationTrendGraph from './PopulationTrendGraph'; // 追加

const meta: Meta = {
  title: 'organisms/PopulationTrendGraph',
  component: PopulationTrendGraph,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PopulationTrendGraphPage: Story = {
  render: () => {
    return (
      <div style={{ maxWidth: '1080px' }}>
        <PopulationTrendGraph />
      </div>
    );
  },
};

import { Meta, StoryObj } from '@storybook/react';
import { Prefecture } from '@/types/resas';
import { demoPrefectures } from '@/utils/demoData';
import PopulationGraphFrame from './PopulationGraphFrame';

const meta: Meta = {
  title: 'templates/PopulationGraphFrame',
  component: PopulationGraphFrame,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockPrefectures: Prefecture[] = [...demoPrefectures];

export const Primary: Story = {
  render: () => {
    return (
      <div style={{ maxWidth: '1080px' }}>
        <PopulationGraphFrame prefectures={mockPrefectures} />
      </div>
    );
  },
};

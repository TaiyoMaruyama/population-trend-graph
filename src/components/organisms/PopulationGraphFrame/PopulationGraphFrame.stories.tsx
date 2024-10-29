import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Prefecture } from '@/types/resas';
import PopulationGraphFrame from './PopulationGraphFrame';

const meta: Meta = {
  title: 'organisms/PopulationGraphFrame',
  component: PopulationGraphFrame,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockPrefectures: Prefecture[] = [
  { prefCode: 1, prefName: '北海道' },
  { prefCode: 2, prefName: '青森県' },
  { prefCode: 3, prefName: '岩手県' },
];

export const Primary: Story = {
  render: () => {
    const [prefectures, _setPrefectures] = useState<Prefecture[]>(mockPrefectures);

    return (
      <div style={{ padding: '20px' }}>
        <PopulationGraphFrame prefectures={prefectures} />
      </div>
    );
  },
};

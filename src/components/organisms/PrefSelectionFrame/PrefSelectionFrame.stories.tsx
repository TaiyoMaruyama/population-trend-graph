import { useState } from 'react';
import { Prefecture } from '@/types/resas';
import PrefSelectionFrame from './PrefSelectionFrame';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'organisms/PrefSelectionFrame',
  component: PrefSelectionFrame,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    const [checkedPrefectures, setCheckedPrefectures] = useState<Prefecture[]>([]);

    return (
      <div style={{ padding: '20px' }}>
        <PrefSelectionFrame
          checkedPrefectures={checkedPrefectures}
          setCheckedPrefectures={setCheckedPrefectures}
        />
      </div>
    );
  },
};

export const WithCheckedPrefectures: Story = {
  render: () => {
    const initialCheckedPrefectures: Prefecture[] = [
      { prefCode: 1, prefName: '北海道' },
      { prefCode: 2, prefName: '青森県' },
    ];

    const [checkedPrefectures, setCheckedPrefectures] =
      useState<Prefecture[]>(initialCheckedPrefectures);

    return (
      <div style={{ padding: '20px' }}>
        <PrefSelectionFrame
          checkedPrefectures={checkedPrefectures}
          setCheckedPrefectures={setCheckedPrefectures}
        />
      </div>
    );
  },
};

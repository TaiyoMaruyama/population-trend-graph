import { userEvent, within } from '@storybook/test';
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
      <div style={{ maxWidth: '1080px' }}>
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
      <div style={{ maxWidth: '1080px' }}>
        <PrefSelectionFrame
          checkedPrefectures={checkedPrefectures}
          setCheckedPrefectures={setCheckedPrefectures}
        />
      </div>
    );
  },
};

export const InteractiveTest: Story = {
  render: () => {
    const [checkedPrefectures, setCheckedPrefectures] = useState<Prefecture[]>([]);

    return (
      <div style={{ maxWidth: '1080px' }}>
        <PrefSelectionFrame
          checkedPrefectures={checkedPrefectures}
          setCheckedPrefectures={setCheckedPrefectures}
        />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const checkboxes = canvas.getAllByRole('checkbox');
    const indicesToClick = [0, 2, 4, 6];
    for (const index of indicesToClick) {
      const checkbox = checkboxes[index];
      await userEvent.click(checkbox);
    }

    const clearButton = canvas.getByRole('button', { name: /選択解除/i });
    await userEvent.click(clearButton);

    for (const index of indicesToClick) {
      const checkbox = checkboxes[index + 1];
      await userEvent.click(checkbox);
    }
  },
};

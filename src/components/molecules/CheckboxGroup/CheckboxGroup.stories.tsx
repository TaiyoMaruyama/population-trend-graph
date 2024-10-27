import { fn } from '@storybook/test';
import CheckboxGroup from './CheckboxGroup';
import { CheckboxGroupProps } from './CheckboxGroup.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<CheckboxGroupProps> = {
  title: 'molecules/CheckboxGroup',
  component: CheckboxGroup,
  tags: ['autodocs'],
  args: { setCheckedList: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

const demoPrefectures = [
  { prefCode: 1, prefName: '北海道' },
  { prefCode: 2, prefName: '青森県' },
  { prefCode: 3, prefName: '岩手県' },
  { prefCode: 4, prefName: '宮城県' },
  { prefCode: 5, prefName: '秋田県' },
  { prefCode: 6, prefName: '山形県' },
  { prefCode: 7, prefName: '福島県' },
  { prefCode: 8, prefName: '茨城県' },
  { prefCode: 9, prefName: '栃木県' },
  { prefCode: 10, prefName: '群馬県' },
  { prefCode: 11, prefName: '埼玉県' },
  { prefCode: 12, prefName: '千葉県' },
  { prefCode: 13, prefName: '東京都' },
  { prefCode: 14, prefName: '神奈川県' },
];

export const Primary: Story = {
  args: {
    prefectures: demoPrefectures,
    checkedList: [
      { prefCode: 3, prefName: '岩手県' },
      { prefCode: 4, prefName: '宮城県' },
    ],
  },
};

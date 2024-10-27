import Header from './Header';
import { HeaderProps } from './Header.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<HeaderProps> = {
  title: 'molecules/Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Header Title',
  },
};

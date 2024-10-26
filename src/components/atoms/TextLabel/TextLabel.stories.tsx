import TextLabel from './TextLabel';
import { TextLabelProps } from './TextLabel.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<TextLabelProps> = {
  title: 'atoms/TextLabel',
  component: TextLabel,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'TextLabel',
  },
};

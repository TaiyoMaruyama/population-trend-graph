import Typography from './Typography';
import { TypographyProps } from './Typography.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<TypographyProps> = {
  title: 'atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    bold: false,
    text: 'Typography',
  },
};

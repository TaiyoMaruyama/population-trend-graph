import Typography from './Typography';
import { TypographyProps } from './Typography.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<TypographyProps> = {
  title: 'atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
  args: {
    bold: false,
    text: 'Typography',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    text: 'Heading 1',
    variant: 'h1',
  },
};

export const H2Bold: Story = {
  args: {
    text: 'Heading 2 Bold',
    variant: 'h2',
    bold: true,
  },
};

export const Paragraph: Story = {
  args: {
    text: 'This is a paragraph.',
    variant: 'p',
  },
};

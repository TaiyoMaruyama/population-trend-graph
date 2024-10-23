import styled, { CSSObject } from '@emotion/styled';
import theme from '@/themes/theme';

const { spacing, colors } = theme;
const { primary, background, text } = colors;

const tabStyles: CSSObject = {
  border: 'none',
  padding: `${spacing(1)}`,
  minWidth: spacing(12),
  borderTopRightRadius: spacing(1),
  borderTopLeftRadius: spacing(1),
};

// 状態に応じたスタイリングを返す
const getActiveTabStyle = (selected: boolean): CSSObject => ({
  cursor: selected ? 'default' : 'pointer',
  color: selected ? text.white : text.primary,
  backgroundColor: selected ? primary.main : background.grey,
  '&:hover': {
    backgroundColor: selected ? primary.main : background.lightgrey,
  },
});

export const StyledTab = styled.button<{ selected: boolean }>(({ selected }) => ({
  ...tabStyles,
  ...getActiveTabStyle(selected),
}));

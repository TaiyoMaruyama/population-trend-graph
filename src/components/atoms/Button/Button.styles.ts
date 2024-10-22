import styled, { CSSObject } from '@emotion/styled';
import theme from '@/themes/theme';

const { spacing, colors } = theme;
const { text, primary } = colors;

const buttonStyles: CSSObject = {
  color: text.white,
  padding: `${spacing(0.5)} ${spacing(2)}`,
  borderRadius: `${spacing(0.5)}`,
  border: 'none',
};

// 状態に応じたスタイリングを返す
const getActiveStyle = (disabled: boolean): CSSObject => ({
  cursor: disabled ? 'not-allowed' : 'pointer',
  backgroundColor: disabled ? primary.disabled : primary.main,
  '&:hover': {
    backgroundColor: disabled ? primary.disabled : primary.light,
  },
});

const StyledButton = styled.button<{ disabled: boolean }>(({ disabled }) => ({
  ...buttonStyles,
  ...getActiveStyle(disabled),
}));

export default StyledButton;

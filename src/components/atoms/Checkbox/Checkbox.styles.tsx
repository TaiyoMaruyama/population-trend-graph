import styled from '@emotion/styled';
import theme from '@/themes/theme';

const { spacing, colors } = theme;

export const CheckboxContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  margin: spacing(1),
});

export const CheckboxInput = styled.input({
  accentColor: colors.primary.main,
  cursor: 'pointer',
});

export const Label = styled.label({
  marginLeft: spacing(1),
  cursor: 'pointer',
});

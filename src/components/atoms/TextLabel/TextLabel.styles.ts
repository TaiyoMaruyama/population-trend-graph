import styled, { CSSObject } from '@emotion/styled';
import theme from '@/themes/theme';

const { spacing, colors } = theme;

const textLabelStyles: CSSObject = {
  borderLeft: `${spacing(1)} solid ${colors.primary.main}`,
  paddingLeft: `${spacing(1)}`,
  margin: `${spacing(1)} 0`,
};

const StyledTextLabel = styled.h6(textLabelStyles);

export default StyledTextLabel;

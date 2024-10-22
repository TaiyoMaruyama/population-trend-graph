import styled from '@emotion/styled';
import { TypographyStyleProps } from './Typography.types';

const StyledTypography = styled.div<TypographyStyleProps>(({ bold = false }) => ({
  fontWeight: bold ? 'bold' : 'normal',
}));

export default StyledTypography;

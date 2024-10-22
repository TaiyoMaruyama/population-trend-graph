'use client';

import StyledTypography from './Typography.styles';
import { TypographyProps } from './Typography.types';

const Typography: React.FC<TypographyProps> = ({ variant = 'h6', ...props }) => {
  return (
    <StyledTypography as={variant} {...props}>
      {props.children}
    </StyledTypography>
  );
};

export default Typography;

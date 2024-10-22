'use client';

import StyledTextLabel from './TextLabel.styles';
import { TextLabelProps } from './TextLabel.types';

const TextLabel: React.FC<TextLabelProps> = ({ label }) => {
  return <StyledTextLabel>{label}</StyledTextLabel>;
};

export default TextLabel;

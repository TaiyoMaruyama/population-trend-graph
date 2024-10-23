'use client';

import { StyledTab } from './Tab.styles';
import { TabProps } from './Tab.types';

const Tab: React.FC<TabProps> = ({ label, selected, onClick }) => {
  return (
    <StyledTab selected={selected} onClick={onClick}>
      {label}
    </StyledTab>
  );
};

export default Tab;

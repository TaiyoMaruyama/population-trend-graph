import { Prefecture } from '@/types';

export interface PrefCheckboxGroupProps {
  checkedList: Prefecture[];
  handleCheck: (prefecture: Prefecture) => void;
}

import { Prefecture } from '@/types/resas';

export interface PrefCheckboxGroupProps {
  checkedList: Prefecture[];
  handleCheck: (prefecture: Prefecture) => void;
}

import { Prefecture } from '@/types';

export interface CheckboxGroupProps {
  prefectures: Prefecture[];
  checkedList: Prefecture[];
  handleCheck: (prefecture: Prefecture) => void;
}

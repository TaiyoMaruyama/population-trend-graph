import { Prefecture } from '@/types';

export interface CheckboxGroupProps {
  prefectures: Prefecture[];
  checkedList: Prefecture[];
  setCheckedList: React.Dispatch<React.SetStateAction<Prefecture[]>>;
}

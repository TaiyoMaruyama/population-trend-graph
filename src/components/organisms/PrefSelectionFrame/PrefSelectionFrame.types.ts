import { Prefecture } from '@/types';

export interface PrefSelectionFrameProps {
  checkedPrefectures: Prefecture[];
  setCheckedPrefectures: React.Dispatch<React.SetStateAction<Prefecture[]>>;
}

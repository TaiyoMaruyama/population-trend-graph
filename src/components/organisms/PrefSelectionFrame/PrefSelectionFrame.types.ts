import { Prefecture } from '@/types/resas';

export interface PrefSelectionFrameProps {
  checkedPrefectures: Prefecture[];
  setCheckedPrefectures: React.Dispatch<React.SetStateAction<Prefecture[]>>;
}

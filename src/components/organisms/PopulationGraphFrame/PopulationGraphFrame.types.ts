import { Prefecture } from '@/types/resas';

export interface PrefectureGraphData {
  year: number;
  [prefecture: string]: number;
}

export interface PrefectureGraphProps {
  prefectures: Prefecture[];
}

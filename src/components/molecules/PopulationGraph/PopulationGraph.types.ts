import { PopulationDataWithPrefecture, PopulationTabId } from '@/types/resas';

export interface PopulationGraphProps {
  populationData: PopulationDataWithPrefecture[];
  tabValue: PopulationTabId;
}

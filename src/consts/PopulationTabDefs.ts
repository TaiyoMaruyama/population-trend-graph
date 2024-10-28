import {
  PopulationTab,
  PopulationTabId,
} from '@/components/molecules/PopulationTabGroup/PopulationTabGroup.types';

export const PopulationTabDefs: PopulationTab[] = [
  {
    id: PopulationTabId.TotalPopulation,
    label: '総人口',
  },
  {
    id: PopulationTabId.YouthPopulation,
    label: '年少人口',
  },
  {
    id: PopulationTabId.WorkingAgePopulation,
    label: '生産年齢人口',
  },
  {
    id: PopulationTabId.ElderlyPopulation,
    label: '老年人口',
  },
];
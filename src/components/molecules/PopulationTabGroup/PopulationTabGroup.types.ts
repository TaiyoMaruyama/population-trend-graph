export enum PopulationTabId {
  TotalPopulation = 'totalPopulation',
  YouthPopulation = 'youthPopulation',
  WorkingAgePopulation = 'workingAgePopulation',
  ElderlyPopulation = 'elderlyPopulation',
}

export interface PopulationTab {
  id: PopulationTabId;
  label: string;
}

export interface PopulationTabGroupProps {
  tabs: PopulationTab[];
  selected: PopulationTabId;
  onClick: (id: PopulationTabId) => void;
}

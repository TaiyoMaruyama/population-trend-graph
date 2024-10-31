export interface ApiError {
  message: string;
}

export interface Prefecture {
  prefCode: number;
  prefName: string;
}

export interface PrefectureResponse {
  message: null;
  result: Prefecture[];
}

export enum PopulationTabId {
  TotalPopulation = 'totalPopulation',
  YouthPopulation = 'youthPopulation',
  WorkingAgePopulation = 'workingAgePopulation',
  ElderlyPopulation = 'elderlyPopulation',
}

export const PopulationStructureLabel = {
  [PopulationTabId.TotalPopulation]: '総人口',
  [PopulationTabId.YouthPopulation]: '年少人口',
  [PopulationTabId.WorkingAgePopulation]: '生産年齢人口',
  [PopulationTabId.ElderlyPopulation]: '老年人口',
} as const;

export type PopulationStructureLabelType = (typeof PopulationStructureLabel)[PopulationTabId];

export interface PopulationStructureData {
  label: PopulationStructureLabelType;
  data: { year: number; value: number }[];
}

export interface PopulationDataWithPrefecture extends Prefecture {
  populationStructures: PopulationStructureData[];
}

export interface PopulationStructureResponse {
  message: null;
  result: {
    boundaryYear: number;
    data: PopulationStructureData[];
  };
}

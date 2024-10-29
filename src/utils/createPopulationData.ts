import { PopulationDataWithPrefecture, PopulationStructureLabel, Prefecture } from '@/types/resas';

export const years = [1990, 1995, 2000, 2005, 2010, 2015, 2020];
const prefectures: Prefecture[] = [
  { prefCode: 1, prefName: '北海道' },
  { prefCode: 2, prefName: '青森県' },
  { prefCode: 3, prefName: '岩手県' },
  { prefCode: 4, prefName: '宮城県' },
];

export const generateStructure = (index: number) => {
  return Object.values(PopulationStructureLabel).map((label) => {
    const data = years.map((year) => {
      return { year, value: Math.floor((Math.random() + index) * 10000000) };
    });
    return { label, data };
  });
};

export const populationData: PopulationDataWithPrefecture[] = prefectures.map(
  (prefecture, index) => {
    return { populationStructures: generateStructure(index), ...prefecture };
  }
);

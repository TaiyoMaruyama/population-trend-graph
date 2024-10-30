import { PrefectureGraphData } from '@/components/organisms/PopulationGraphFrame/PopulationGraphFrame.types';
import {
  PopulationDataWithPrefecture,
  PopulationStructureLabel,
  PopulationTabId,
} from '@/types/resas';

const onFormatGraphData = (
  populationData: PopulationDataWithPrefecture[],
  tabValue: PopulationTabId
) => {
  if (populationData.length === 0) return [];

  const years = populationData[0].populationStructures[0].data.map((item) => item.year);
  const formattedData = years.map((year) => {
    const entry: PrefectureGraphData = { year };
    populationData.forEach((prefectureData) => {
      const value = prefectureData.populationStructures
        .find((structure) => structure.label === PopulationStructureLabel[tabValue])
        ?.data.find((point) => point.year === year)?.value;
      entry[prefectureData.prefName] = value || 0;
    });
    return entry;
  });

  return formattedData;
};

export default onFormatGraphData;

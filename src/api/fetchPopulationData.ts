import { BASE_URL } from '@/api/fetcher';
import {
  PopulationDataWithPrefecture,
  PopulationStructureResponse,
  Prefecture,
} from '@/types/resas';
import { fetchOptions } from './fetchOption';

const fetchPopulationData: (
  prefectures: Prefecture[]
) => Promise<PopulationDataWithPrefecture[]> = async (prefectures: Prefecture[]) => {
  // 各都道府県の人口データを非同期に取得する
  const fetchPrefectureData = async (prefecture: Prefecture) => {
    const response = await fetch(
      `${BASE_URL}/population/composition/perYear?prefCode=${prefecture.prefCode}`,
      fetchOptions
    );

    if (!response.ok) {
      throw new Error(`Error fetching data for ${prefecture.prefName}: ${response.statusText}`);
    }
    const populationStructureResponse: PopulationStructureResponse = await response.json();
    return {
      prefCode: prefecture.prefCode,
      prefName: prefecture.prefName,
      populationStructures: populationStructureResponse.result.data,
    };
  };

  // 各都道府県のデータを取得
  const populationDataPromises = prefectures.map(fetchPrefectureData);
  const results = await Promise.all(populationDataPromises);
  return results;
};

export default fetchPopulationData;

// src/app/api/populationData/route.ts
import { NextResponse } from 'next/server';
import { BASE_URL } from '@/app/api/fetcher';
import { PopulationStructureResponse, Prefecture } from '@/types/resas';
import { fetchOptions } from '../fetchOption';

const fetchPopulationData = async (prefectures: Prefecture[]) => {
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
  return Promise.all(populationDataPromises);
};

export async function POST(request: Request) {
  const { prefectures }: { prefectures: Prefecture[] } = await request.json();

  try {
    const results = await fetchPopulationData(prefectures);
    return NextResponse.json(results);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}

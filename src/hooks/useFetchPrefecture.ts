import useSWR from 'swr';
import { PrefectureResponse } from '@/types/resas';

const fetcher = async (url: string) => {
  const API_KEY = process.env.NEXT_PUBLIC_RESAS_API_KEY || '';
  const response = await fetch(url, {
    method: 'GET',
    headers: { 'X-API-KEY': API_KEY },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Error: ${error.message || 'Unknown error'}`);
  }
  return response.json();
};

const useFetchPrefecture = () => {
  const { data, error, isLoading } = useSWR<PrefectureResponse>(
    'https://opendata.resas-portal.go.jp/api/v1/prefectures',
    fetcher
  );

  return {
    prefectures: data?.result,
    isError: error,
    isLoading,
  };
};

export default useFetchPrefecture;

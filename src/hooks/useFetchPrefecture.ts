import useSWR from 'swr';
import { BASE_URL, fetcher } from '@/api/fetcher';
import { PrefectureResponse } from '@/types/resas';

const useFetchPrefecture = () => {
  const { data, error, isLoading } = useSWR<PrefectureResponse>(`${BASE_URL}/prefectures`, fetcher);

  return {
    prefectures: data?.result,
    isError: error,
    isLoading,
  };
};

export default useFetchPrefecture;

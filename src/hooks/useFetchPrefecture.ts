import useSWR from 'swr';
import { fetcher } from '@/app/api/fetcher';
import { PrefectureResponse } from '@/types/resas';

const useFetchPrefecture = () => {
  const { data, error, isLoading } = useSWR<PrefectureResponse>('/api/prefectures', fetcher);

  return {
    prefectures: data?.result,
    isError: error,
    isLoading,
  };
};

export default useFetchPrefecture;

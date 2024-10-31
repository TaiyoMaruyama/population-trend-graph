import { useState, useEffect } from 'react';
import { PopulationDataWithPrefecture, Prefecture } from '@/types/resas';

const usePopulationData = (prefectures: Prefecture[]) => {
  const [populationData, setPopulationData] = useState<PopulationDataWithPrefecture[]>([]);

  useEffect(() => {
    const getData = async () => {
      if (prefectures.length === 0) {
        setPopulationData([]);
        return;
      }

      try {
        const response = await fetch('/api/populationData', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prefectures }),
        });

        if (!response.ok) {
          throw new Error('Could not get data');
        }

        const data: PopulationDataWithPrefecture[] = await response.json();
        setPopulationData(data);
      } catch (error: unknown) {
        setPopulationData([]);
      }
    };

    getData();
  }, [prefectures]);

  return populationData;
};

export default usePopulationData;

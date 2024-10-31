'use client';

import { useState, useEffect } from 'react';
import fetchPopulationData from '@/app/api/fetchPopulationData';
import Typography from '@/components/atoms/Typography/Typography';
import PopulationGraph from '@/components/molecules/PopulationGraph/PopulationGraph';
import PopulationTabGroup from '@/components/molecules/PopulationTabGroup/PopulationTabGroup';
import { populationTabDefs } from '@/consts/PopulationTabDefs';
import { PopulationDataWithPrefecture, PopulationTabId } from '@/types/resas';
import styles from './PopulationGraphFrame.module.scss';
import { PrefectureGraphProps } from './PopulationGraphFrame.types';

const PopulationGraphFrame: React.FC<PrefectureGraphProps> = ({ prefectures }) => {
  const [populationData, setPopulationData] = useState<PopulationDataWithPrefecture[]>([]);
  const [selectedTab, setSelectedTab] = useState<PopulationTabId>(PopulationTabId.TotalPopulation);

  useEffect(() => {
    const getData = async () => {
      try {
        setPopulationData(await fetchPopulationData(prefectures));
      } catch {
        alert('Could not get data');
      }
    };
    getData();
  }, [prefectures]);

  return (
    <div className={styles.container}>
      <div className={styles.graphFrame}>
        <PopulationTabGroup
          tabs={populationTabDefs}
          selected={selectedTab}
          disabled={prefectures.length === 0}
          onClick={setSelectedTab}
        />
        {populationData.length === 0 ? (
          <div className={styles.noData}>
            <Typography variant='h5' text='表示するグラフがありません' />
            <Typography variant='p' text='都道府県を選択してください' />
          </div>
        ) : (
          <PopulationGraph populationData={populationData} tabValue={selectedTab} />
        )}
      </div>
    </div>
  );
};

export default PopulationGraphFrame;

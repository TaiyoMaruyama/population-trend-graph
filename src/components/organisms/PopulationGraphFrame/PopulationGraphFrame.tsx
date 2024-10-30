'use client';

import { useState, useEffect } from 'react';
import fetchPopulationData from '@/api/fetchPopulationData';
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
    <div className={styles.graphFrame}>
      <PopulationTabGroup
        tabs={populationTabDefs}
        selected={selectedTab}
        onClick={setSelectedTab}
      />
      <PopulationGraph populationData={populationData} tabValue={selectedTab} />
    </div>
  );
};

export default PopulationGraphFrame;

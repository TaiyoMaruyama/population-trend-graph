'use client';

import { useState } from 'react';
import PopulationGraphFrame from '@/components/organisms/PopulationGraphFrame/PopulationGraphFrame';
import PrefSelectionFrame from '@/components/organisms/PrefSelectionFrame/PrefSelectionFrame';
import { Prefecture } from '@/types/resas';
import styles from './PopulationTrendGraph.module.scss';

const PopulationTrendGraph = () => {
  const [checkedPrefectures, setCheckedPrefectures] = useState<Prefecture[]>([]);

  return (
    <div className={styles.container}>
      <PrefSelectionFrame
        checkedPrefectures={checkedPrefectures}
        setCheckedPrefectures={setCheckedPrefectures}
      />
      <PopulationGraphFrame prefectures={checkedPrefectures} />
    </div>
  );
};

export default PopulationTrendGraph;

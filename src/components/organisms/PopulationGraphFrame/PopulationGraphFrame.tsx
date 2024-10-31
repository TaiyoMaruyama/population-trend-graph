import { useState } from 'react';
import Typography from '@/components/atoms/Typography/Typography';
import PopulationGraph from '@/components/molecules/PopulationGraph/PopulationGraph';
import PopulationTabGroup from '@/components/molecules/PopulationTabGroup/PopulationTabGroup';
import { populationTabDefs } from '@/consts/PopulationTabDefs';
import usePopulationData from '@/hooks/usePopulationData';
import { PopulationTabId } from '@/types/resas';
import styles from './PopulationGraphFrame.module.scss';
import { PrefectureGraphProps } from './PopulationGraphFrame.types';

const PopulationGraphFrame: React.FC<PrefectureGraphProps> = ({ prefectures }) => {
  const populationData = usePopulationData(prefectures);
  const [selectedTab, setSelectedTab] = useState<PopulationTabId>(PopulationTabId.TotalPopulation);

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

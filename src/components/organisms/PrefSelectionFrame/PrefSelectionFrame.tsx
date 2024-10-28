'use client';

import TextLabel from '@/components/atoms/TextLabel/TextLabel';
import CheckedManageFrame from '@/components/molecules/CheckedManageFrame/CheckedManageFrame';
import PrefCheckboxGroup from '@/components/molecules/PrefCheckboxGroup/PrefCheckboxGroup';
import { Prefecture } from '@/types';
import styles from './PrefSelectionFrame.module.scss';
import { PrefSelectionFrameProps } from './PrefSelectionFrame.types';

const PrefSelectionFrame: React.FC<PrefSelectionFrameProps> = ({
  checkedPrefectures,
  setCheckedPrefectures,
}) => {
  const handleReset = () => {
    setCheckedPrefectures([]);
  };

  const handleCheck = (pref: Prefecture) => {
    const isExist = checkedPrefectures.some((prefecture) => prefecture.prefCode === pref.prefCode);
    if (isExist) {
      setCheckedPrefectures(checkedPrefectures.filter((prefecture) => prefecture !== pref));
    } else {
      setCheckedPrefectures([...checkedPrefectures, pref]);
    }
  };

  return (
    <>
      <div className={styles.frameHeader}>
        <TextLabel label='都道府県を選択' />
        <CheckedManageFrame checkedSum={checkedPrefectures.length} onReset={handleReset} />
      </div>
      <PrefCheckboxGroup checkedList={checkedPrefectures} handleCheck={handleCheck} />
    </>
  );
};

export default PrefSelectionFrame;

'use client';

import Checkbox from '@/components/atoms/Checkbox/Checkbox';
import useFetchPrefecture from '@/hooks/useFetchPrefecture';
import styles from './PrefCheckboxGroup.module.scss';
import { PrefCheckboxGroupProps } from './PrefCheckboxGroup.types';

const PrefCheckboxGroup: React.FC<PrefCheckboxGroupProps> = ({ checkedList, handleCheck }) => {
  const { prefectures, isError, isLoading } = useFetchPrefecture();

  if (isError) return <div>Error loading prefectures</div>;
  if (isLoading) return <div>Loading...</div>;

  const isChecked = (id: number) => checkedList.some((element) => element.prefCode === id);

  return (
    <div className={styles.checkboxGroup}>
      {prefectures?.map((prefecture) => (
        <Checkbox
          key={prefecture.prefCode}
          id={String(prefecture.prefCode)}
          label={prefecture.prefName}
          checked={isChecked(prefecture.prefCode)}
          onChange={() => handleCheck(prefecture)}
        />
      ))}
    </div>
  );
};

export default PrefCheckboxGroup;

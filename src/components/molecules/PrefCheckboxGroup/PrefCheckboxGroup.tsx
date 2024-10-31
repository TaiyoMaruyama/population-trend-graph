'use client';

import Checkbox from '@/components/atoms/Checkbox/Checkbox';
import useFetchPrefecture from '@/hooks/useFetchPrefecture';
import styles from './PrefCheckboxGroup.module.scss';
import { PrefCheckboxGroupProps } from './PrefCheckboxGroup.types';

const PrefCheckboxGroup: React.FC<PrefCheckboxGroupProps> = ({ checkedList, handleCheck }) => {
  const { prefectures, isError, isLoading } = useFetchPrefecture();

  const isChecked = (id: number) => checkedList.some((element) => element.prefCode === id);
  const checkboxGroupStyle = `${styles.background} ${styles.checkboxGroup}`;

  if (isError) return <div className={styles.background}>Error loading prefectures</div>;
  if (isLoading) return <div className={styles.background}>Loading...</div>;

  return (
    <div className={checkboxGroupStyle}>
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

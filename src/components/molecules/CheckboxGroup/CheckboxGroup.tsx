import Checkbox from '@/components/atoms/Checkbox/Checkbox';
import styles from './CheckboxGroup.module.scss';
import { CheckboxGroupProps } from './CheckboxGroup.types';

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ prefectures, checkedList, handleCheck }) => {
  const isChecked = (id: number) => {
    return checkedList.some((element) => element.prefCode === id);
  };

  return (
    <div className={styles.checkboxGroup}>
      {prefectures.map((prefecture) => (
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

export default CheckboxGroup;

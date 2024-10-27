import Checkbox from '@/components/atoms/Checkbox/Checkbox';
import { Prefecture } from '@/types';
import styles from './CheckboxGroup.module.scss';
import { CheckboxGroupProps } from './CheckboxGroup.types';

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  prefectures,
  checkedList,
  setCheckedList,
}) => {
  const isChecked = (id: number) => {
    return checkedList.some((element) => element.prefCode === id);
  };

  const handleCheck = (prefecture: Prefecture) => {
    const code = prefecture.prefCode;
    if (isChecked(prefecture.prefCode)) {
      setCheckedList(checkedList.filter((element) => element.prefCode !== code));
    } else {
      setCheckedList([...checkedList, ...[prefecture]]);
    }
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

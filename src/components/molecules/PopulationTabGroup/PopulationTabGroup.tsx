import Tab from '@/components/atoms/Tab/Tab';
import { PopulationTabId } from '@/types/resas';
import styles from './PopulationTabGroup.module.scss';
import { PopulationTabGroupProps } from './PopulationTabGroup.types';

const PopulationTabGroup: React.FC<PopulationTabGroupProps> = ({
  tabs,
  selected,
  disabled,
  onClick,
}) => {
  const tabGroupStyle = `${styles.tabGroup} ${disabled ? styles.disabled : ''}`;

  const handleClick = (id: PopulationTabId) => {
    if (!disabled) {
      onClick(id);
    }
  };

  return (
    <div className={tabGroupStyle}>
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          label={tab.label}
          selected={selected === tab.id}
          disabled={disabled}
          onClick={() => handleClick(tab.id)}
        />
      ))}
    </div>
  );
};

export default PopulationTabGroup;

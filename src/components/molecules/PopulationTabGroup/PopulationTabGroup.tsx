import Tab from '@/components/atoms/Tab/Tab';
import styles from './PopulationTabGroup.module.scss';
import { PopulationTabGroupProps } from './PopulationTabGroup.types';

const PopulationTabGroup: React.FC<PopulationTabGroupProps> = ({ tabs, selected, onClick }) => {
  return (
    <div className={styles.tabGroup}>
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          label={tab.label}
          selected={selected === tab.id}
          onClick={() => onClick(tab.id)}
        />
      ))}
    </div>
  );
};

export default PopulationTabGroup;

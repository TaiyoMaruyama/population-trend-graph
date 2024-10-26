import styles from './Tab.module.scss';
import { TabProps } from './Tab.types';

const Tab: React.FC<TabProps> = ({ label, selected, onClick }) => {
  const tabStyle = `${styles.tab} ${selected ? styles.selected : ''}`;

  return (
    <button className={tabStyle} onClick={selected ? undefined : onClick}>
      {label}
    </button>
  );
};

export default Tab;

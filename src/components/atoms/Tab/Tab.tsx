import styles from './Tab.module.scss';
import { TabProps } from './Tab.types';

const Tab: React.FC<TabProps> = ({ label, selected, onClick }) => {
  const tabStyle = `${styles.tab} ${selected ? styles.selected : ''}`;

  return (
    <button
      className={tabStyle}
      onClick={selected ? undefined : onClick}
      aria-disabled={selected}
      aria-label={label}
      tabIndex={selected ? -1 : 0}
    >
      {label}
    </button>
  );
};

export default Tab;

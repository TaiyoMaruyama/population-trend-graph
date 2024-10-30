import styles from './Tab.module.scss';
import { TabProps } from './Tab.types';

const Tab: React.FC<TabProps> = ({ label, selected, disabled, onClick }) => {
  const tabStyle = `${styles.tab} ${selected ? styles.selected : ''} ${disabled ? styles.disabled : ''}`;

  return (
    <button
      className={tabStyle}
      disabled={disabled}
      onClick={!selected && !disabled ? onClick : undefined}
      aria-disabled={disabled}
      aria-label={label}
      tabIndex={disabled ? -1 : 0}
    >
      {label}
    </button>
  );
};

export default Tab;

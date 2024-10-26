import styles from './TextLabel.module.scss';
import { TextLabelProps } from './TextLabel.types';

const TextLabel: React.FC<TextLabelProps> = ({ label }) => {
  const textLabelStyle = `${styles.textLabel}`;

  return <h6 className={textLabelStyle}>{label}</h6>;
};

export default TextLabel;

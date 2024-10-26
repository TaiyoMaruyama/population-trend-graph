import styles from './Typography.module.scss';
import { TypographyProps } from './Typography.types';

const Typography: React.FC<TypographyProps> = ({ variant = 'p', bold = false, text }) => {
  const Tag = variant;
  const typographyStyle = `${bold ? styles.textBold : ''}`;

  return <Tag className={typographyStyle}>{text}</Tag>;
};

export default Typography;

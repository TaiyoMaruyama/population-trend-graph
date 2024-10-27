import Typography from '../../atoms/Typography/Typography';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.types';

const Header: React.FC<HeaderProps> = ({ title }) => {
  const headerStyle = `${styles.header}`;

  return (
    <header className={headerStyle}>
      <Typography variant='h5' text={title} />
    </header>
  );
};

export default Header;

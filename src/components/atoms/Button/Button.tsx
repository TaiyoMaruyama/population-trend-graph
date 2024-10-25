import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  const buttonStyle = `
    ${styles.button}
    ${disabled ? styles.disabled : ''}
  `;

  return (
    <button className={buttonStyle} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;

import styles from './Checkbox.module.scss';
import { CheckboxProps } from './Checkbox.types';

const Checkbox: React.FC<CheckboxProps> = ({ id, label, checked, onChange }) => {
  const checkboxContainerStyle = `
     ${styles.checkboxContainer}
  `;

  const inputStyle = `
    ${styles.input}
    ${checked ? styles.checked : ''}
  `;

  const labelStyle = `
    ${styles.label}
  `;

  return (
    <div className={checkboxContainerStyle}>
      <input
        type='checkbox'
        className={inputStyle}
        id={id}
        checked={checked}
        aria-checked={checked}
        onChange={onChange}
      />
      <label className={labelStyle} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;

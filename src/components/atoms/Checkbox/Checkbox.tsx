import { CheckboxContainer, CheckboxInput, Label } from './Checkbox.styles';
import { CheckboxProps } from './Checkbox.types';

const Checkbox: React.FC<CheckboxProps> = ({ id, label, checked, onChange }) => {
  return (
    <CheckboxContainer>
      <CheckboxInput type='checkbox' id={id} checked={checked} onChange={onChange} />
      <Label htmlFor={id}>{label}</Label>
    </CheckboxContainer>
  );
};

export default Checkbox;

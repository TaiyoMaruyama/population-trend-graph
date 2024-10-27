import Button from '@/components/atoms/Button/Button';
import Typography from '@/components/atoms/Typography/Typography';
import styles from './CheckedManageFrame.module.scss';
import { CheckedManageFrameProps } from './CheckedManageFrame.types';

const CheckedManageFrame: React.FC<CheckedManageFrameProps> = ({ checkedSum, onReset }) => {
  const frameStyle = `${styles.frame}`;
  const isButtonDisabled = checkedSum <= 0;

  return (
    <div className={frameStyle}>
      <Typography text={`選択件数：${checkedSum}件`} />
      <Button label='選択解除' onClick={onReset} disabled={isButtonDisabled} />
    </div>
  );
};

export default CheckedManageFrame;

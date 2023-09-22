import { Input as InputAntd, InputProps as InputPropsAntd } from 'antd';

import styles from './styles.module.scss';

interface IInputProps extends InputPropsAntd {
  type: 'text' | 'email' | 'password';
  title: string;
  placeholder?: string;
}

export const Input = ({ title, ...props }: IInputProps) => {
  return (
    <>
      <div className={styles.userform}>
        <p className={styles.titleuser}>{title}</p>
        <InputAntd className={styles.input} {...props} />
      </div>
    </>
  );
};

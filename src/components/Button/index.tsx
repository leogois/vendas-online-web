import { ButtonProps } from 'antd';
import { Button as ButtonAntd } from 'antd';

import styles from './styles.module.scss';

export const Button = ({ ...props }: ButtonProps) => {
  return (
    <>
      <ButtonAntd className={styles.btn} {...props}>
        ENTRAR
      </ButtonAntd>
    </>
  );
};

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import styles from './styles.module.scss';

const LoginScreen = () => {
  return (
    <div className={styles.containerloginscreen}>
      <img className={styles.backgroundimage} src="./background.png" />
      <div className={styles.containerlogin}>
        <div className={styles.limitedcontainer}>
          <img className={styles.logo} src="./logo.png" />

          <p className={styles.titlelogin}>LOGIN</p>

          <Input type="email" title="USUÁRIO" placeholder="Digite seu email" />

          <Input type="password" title="SENHA" placeholder="Digite sua senha" />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;

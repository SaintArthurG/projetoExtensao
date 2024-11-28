import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.imageContainer}>
        <img src="src/img/foto-header.jpg" alt="Imagem de fundo do cabeçalho" className={styles.headerImage} />
        <div className={styles.circleImageContainer}>
          <img src="src/img/foto-logo.jpg" alt="Imagem circular" className={styles.circleImage} />
        </div>
      </div>
      <div className={styles.headerContent}>
        <h1 className={styles.logo}>Espaço Oliveira</h1>
        <nav>
          <ul className={styles.navLinks}>
            <li><Link to="/"><span>Pedido</span></Link></li>
            <li><Link to="/colab"><span>Colaborador</span></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

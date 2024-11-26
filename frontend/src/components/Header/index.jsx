import styles from './Header.module.css'


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
            <li><a href="#monte-marmita"><span>Monte sua marmita</span></a></li>
            <li><a href="#marmitas-especiais"><span>Marmitas especiais</span></a></li>
            <li><a href="#bebidas"><span>Bebidas</span></a></li>
            <li><a href="#sobremesas"><span>Sobremesas</span></a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

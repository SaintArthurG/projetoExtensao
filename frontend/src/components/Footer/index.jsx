import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <p className={styles.text}>
                    "Pedi, e dar-se-vos-á; buscai, e encontrareis; batei, e abrir-se-vos-á" • 2024
                </p>
                <div className={styles.socialMedia}>
                    <a
                        href="https://www.instagram.com/oliveespaco/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                    >
                        <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                        Instagram
                    </a>
                    <a
                        href="https://wa.me/61981271374"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                    >
                        <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
                        WhatsApp
                    </a>
                </div>
                <p className={styles.copy}>
                    © 2024 Espaço Oliveira. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}

export default Footer;

import styles from './Header.module.css'

function Header(){
    return (
        <header className={styles.header}>
            <span>Arthur Godoy</span>
                <nav>
                    <a href="">HOME</a>    
                    <a href="">sobre</a>    
                    <a href="">projects</a>    
                    <a href="">contacts</a>    
                </nav>
        </header>
    )
}

export default Header

import styles from '../pages/styles/header.module.css';
import logoVale from '../assets/logo_vale.png';


const Header = ({titlePre = ''}) => {

    return (
        <header className={styles.header}>
            <img
                draggable={false}
                src={logoVale} alt="Vale Logo"
                className={styles.logo}/>
                <title>{titlePre ? `${titlePre} |` : ''} Vale</title>
        </header>
    )
}

export default Header

import AppsStyles from '../pages/styles/Apps.module.css';
import valeLogo from '../assets/vale_logo_apps.png'
import googleLogo from '../assets/google_play.png'
import appleStore from '../assets/apple_store.png'

export default function Apps() {
    return (
        <>
            <div className={AppsStyles.appsDiv}>
                <img src={valeLogo} className={AppsStyles.valeLogo} alt="Aplicativos disponíveis no IOs e App Store" />
                <div className={AppsStyles.contentDiv}>
                    <h2 className={`${AppsStyles.descricao}`} >Baixe agora nosso app e tenha o controle em suas mãos</h2>
                    <div className={AppsStyles.appsStoresDiv}>
                        <a href="https://play.google.com/store/apps/details?id=com.valecerradocliente" target='_blank'>
                            <img src={googleLogo} alt="Google Play" />
                        </a>
                        <a href="https://apps.apple.com/br/app/vale-do-cerrado-cliente/id1636469819" target='_blank'>
                            <img src={appleStore} alt="App Store" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

import Header from '../components/header'
import sharedStyles from './styles/shared.module.css'
import SearchAddressVale from "../components/SearchAddress";
import Apps from '../components/Apps';
import logo_busque from '../assets/logo_busque.png'
import Footer from '../components/footer';

export default function Index() {
    return (
        <>
            <Header titlePre="Complexo Vale do Cerrado"/>
            <div className={sharedStyles.layout}>
                <img src={logo_busque} className={sharedStyles.logo_busque} alt='Busque seu endereço e uma lupa'/>
                <h2 style={
                    {
                        color: '#ffffff',
                    }
                }>
                    Para encontrar a localização de seu ente querido, preencha um dos três campos abaixo.
                    Em caso de dúvidas ou qualquer dificuldade com a localização, fale com nossa equipe
                    de apoio
                </h2>
                <SearchAddressVale/>
                <Apps/>
            </div>
            <Footer/>
        </>
    )
}

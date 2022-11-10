import { Footer } from "./styles"

const FooterComponent: React.FC = () => {

    return (
        <Footer>
        <div className="footer-logo-area">
            <picture>
                <img src={'./assets/images/logo.svg'} className="logo-footer" alt="logo rodapé"/>
            </picture>
        </div>
        <div className="footer-info">
          <p>Endereço: Avenida do Estado, n 100, Ed XXXXXXX - Sala 500 - Telefone : (47) 99999-99999 - E-mail: contato@abancadeadvogados.com.br</p>
        </div>
    </Footer>
    )
}

export default FooterComponent;
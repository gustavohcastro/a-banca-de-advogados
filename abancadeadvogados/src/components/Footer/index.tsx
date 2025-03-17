import { Footer } from "./styles"

const FooterComponent: React.FC = () => {

    return (
        <Footer>
            <div className="footer-logo-area">
                <picture>
                    <img src={'../assets/images/logo.svg'} className="logo-footer" alt="logo rodapé" />
                </picture>
            </div>
            <div className="footer-info">
                <p>Endereço: Rua 1.301, nº 471, Sala 1802 - Ed. Topclass Corporate - Centro, Balneário Camboriú - SC - Telefone : (47) 3311-2483 - E-mail: contato@abancadeadvogados.com.br</p>
            </div>
        </Footer>
    )
}

export default FooterComponent;
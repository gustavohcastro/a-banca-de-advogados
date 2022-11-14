import Link from "next/link";
import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi";
import { Header, StyledBurger, Nav, Ul } from './styles';

const HeaderComponent: React.FC = () => {
    const [open, setOpen] = useState(false);
    return (
        <Header>
            <div className="main-menu">
                <Link href="/">
                    <picture>
                        <img src={'../assets/images/logo.svg'} className='logo' alt="Logo"/>
                    </picture>
                </Link>
                <StyledBurger open={open} onClick={() => setOpen(!open)}>
                    {open ? <FiX color="#fff"/> : <FiMenu color="#fff"/>}
                </StyledBurger>
                <Nav>
                    <Ul open={open}>
                        <li><Link href={'/'}><a>Início</a></Link></li>
                        <li><Link href="/escritorio">Escritório</Link></li>
                        <li><Link href="/areas-de-atuacao">Áreas de atuação</Link></li>
                        <li><Link href="/equipe">Equipe</Link></li>
                        <li><Link href="/publicacoes">Publicações</Link></li>
                        <li><Link href="/contato">Contato</Link></li>
                        <li><Link href="/areadoassociado">Área do associado</Link></li>
                    </Ul>
                </Nav>
            </div>
        </Header>
    )
}

export default HeaderComponent;
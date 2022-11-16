import Head from 'next/head';
import React from 'react';
import { FiArrowDownCircle } from 'react-icons/fi';
import FooterComponent from '../../components/Footer';
import { Footer } from '../../components/Footer/styles';
import Header from '../../components/Header';
import { BackgroundImage, BannerArea } from "../../styles/pages/AreaDoAssociado"


const AreaDoAssociado: React.FC = () => {
    return (
        <>
            <Head>
                <title>A Banca de Advogados</title>
                <link rel="icon" type="image/x-icon" href={"./assets/images/favicon.png"}/>
            </Head>
            <main>
                <BackgroundImage>
                <Header/>
                <BannerArea>
                    <div>
                        <picture>
                            <img src={'../assets/images/logo.svg'}  alt="Logo"/>
                        </picture>
                        <br/>
                        <br/>
                        <form>
                            <label>Usuário</label>
                            <br/>
                            <input id="fullName" name="fullName" placeholder='exemplo: jdasilva' />
                            <br/>
                            <br/>
                            <label>Senha</label>
                            <br/>
                            <input id="fullName" name="fullName" placeholder='*******' />
                            <br/>
                            <br/>
                            <button>Entrar</button>          
                        </form>
                    </div>
                </BannerArea>
                </BackgroundImage>
                <FooterComponent/>
            </main>
          </>
    )
}
export default AreaDoAssociado;
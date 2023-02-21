
import Head from 'next/head';
import Router from 'next/router'
import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FiArrowDownCircle } from 'react-icons/fi';
import FooterComponent from '../../components/Footer';
import { Footer } from '../../components/Footer/styles';
import Header from '../../components/Header';
import { AuthContext } from '../../contexts/AuthContext';
import { BackgroundImage, BannerArea } from "../../styles/pages/AreaDoAssociado"
import Notiflix from 'notiflix';


const AreaDoAssociado: React.FC = () => {
    const { register, handleSubmit } = useForm();
    const {signIn, user, isAuthenticated} = useContext(AuthContext);

    async function handleSignIn(data) {
            await signIn(data)
    }

    // useEffect(() => {
    //     !isAuthenticated && Router.push('/dashboard')
    // }, [])

    return (
        <>
            <Head>
                <title>A Banca de Advogados</title>
                <link rel="icon" type="image/x-icon" href={"./assets/images/favicon.png"}/>
                <meta name="description" content="A união de forças distintas, mas ao mesmo tempo complementares, é o que determina o sucesso de um projeto de longo prazo. Nasce, assim, A Banca de Advogados."/>
                <meta property="og:locale" content="pt_BR"/>
                <meta property="og:type" content="website"></meta>
                <meta property="og:title" content="A Banca de advogados"></meta>
                <meta property="og:description" content="A união de forças distintas, mas ao mesmo tempo complementares, é o que determina o sucesso de um projeto de longo prazo. Nasce, assim, A Banca de Advogados."></meta>
                <meta property="og:url" content="https://www.bancadeadvogados.adv.br/"></meta>
                <meta property="og:site_name" content="A Banca de advogados"></meta>
                <meta property="article:modified_time" content="2023-02-03T16:49:47+00:00"></meta>
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
                        <form className='login-form' onSubmit={handleSubmit(handleSignIn)}>
                            <label>Usuário</label>
                            <br/>
                            <input 
                                id="fullName" 
                                name="fullName" 
                                placeholder='exemplo: jdasilva' 
                                {...register('email')}
                            />
                            <br/>
                            <br/>
                            <label>Senha</label>
                            <br/>
                            <input type="password" id="fullName" name="fullName" placeholder='*******' {...register('password')}/>
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
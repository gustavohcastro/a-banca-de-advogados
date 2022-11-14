import Head from "next/head";
import Link from "next/link";
import FooterComponent from "../../components/Footer";
import HeaderComponent from "../../components/Header";
import { BackgroundImage, BannerArea, ServicesCards, ServicesHeader } from "../../styles/pages/AreasDeAtuacao";
import React from 'react';

const AreasDeAtuacao: React.FC = () => {
    return (
        <>
            <Head>
                <title>Áreas de atuação</title>
                <link rel="icon" type="image/x-icon" href={"./assets/images/favicon.png"}/>
            </Head>
            <main>
                <BackgroundImage style={{height: '70vh'}}>
                    <HeaderComponent/>
                    <BannerArea>
                        <h2>Áreas de atuação</h2>
                        <br/>
                        <p>Localizada no centro de Balneário Camboriú, nossa nova sede foi inaugurada em 2022, com viés totalmente corporativo e voltada aos negócios, trazendo conforto e praticidade aos clientes e parceiros.</p>
                        <br/>
                    </BannerArea>
                </BackgroundImage>
                <ServicesHeader>
                    <h4>Àreas de atuação,<br/>consultoria e<br/>especialidades.</h4>
                    <div>
                        <p>Lorem Ipsum</p>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                    </div>
                    <div>
                        <p>Lorem Ipsum</p>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                    </div>
                </ServicesHeader>
                <ServicesCards>
                    <div>
                        <p>Direto Empresarial</p>
                        <span>Atuação voltada a prestar assessoria jurídica na área empresarial, societária, estruturação e planejamento de negócios e revisão contratual.</span>
                    </div>
                    <div>
                        <p>Direito Civil</p>
                        <span>O enfoque de atuação da esfera cível é voltado à ações de indenização por dano material e moral, responsabilidade civil, cobranças, execuções, obrigações de fazer e direito imobiliário.</span>
                    </div>
                    <div>
                        <p>Direito do Consumidor</p>
                        <span>Especialidade de atuação em ações de indenização por negativação indevida, ações revisionais por juros abusivos, reparação de danos ao consumidor, golpes sofridos de forma física ou virtual pelo consumidor.</span>
                        
                    </div>
                    <div>
                        <p>Direito Penal</p>
                        <span>Atuação especializada em direito penal econômico, crimes financeiros, tráfico de entorpecentes, tribunal do Júri, acompanhamento da execução penal e revisão criminal.</span>
                        
                    </div>
                    <div>
                        <p>Direito Bancário</p>
                        <span>Enfoque de atuação na revisão de financiamentos, defesas em busca e apreensão de bens, defesas em execuções de título extrajudicial e cobranças.</span>
                        
                    </div>
                    <div>
                        <p>Direito Contratual</p>s
                        <span>Especialidade de atuação na elaboração de contratos de prestação de serviços, contratos sociais empresariais, contratos imobiliários, contratos de parceria com influenciadores digitais.</span>
                        
                    </div>
                </ServicesCards>
                <FooterComponent/>
            </main>
        </>
    )
}

export default AreasDeAtuacao;

import Head from "next/head";
import FooterComponent from "../../components/Footer";
import HeaderComponent from "../../components/Header";
import { BackgroundImage, BannerArea, OurTeam } from "../../styles/pages/Equipe";
import React from 'react';

const Equipe: React.FC = () => {

    return (
        <>
            <Head>
                <title>Equipe</title>
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
                <HeaderComponent/>
                {/* <BackgroundImage style={{height: '70vh'}}>
                    
                    <BannerArea>
                        <h2>Equipe</h2>
                        <br/>
                        <p>Localizada no centro de Balneário Camboriú, nossa nova sede foi inaugurada em 2022, com viés totalmente corporativo e voltada aos negócios, trazendo conforto e praticidade aos clientes e parceiros.</p>
                        <br/>
                    </BannerArea>
                </BackgroundImage> */}
                <OurTeam>
                    <h4>Nosso time</h4>
                    <p>Equipe formada pelos sócios fundadores e demais colaboradores.</p>
                    <div className="partner-row">
                        <div>
                            <picture>
                                <img src={'./assets/images/melkis.jpg'} alt="Sócio Fundador"/>
                            </picture>
                            <div className="partner-text">
                                <h6>Melkis Cardoso</h6>
                                <p>Sócio Fundador</p>
                                <span>Advogado inscrito na OAB/SC sob o nº 43.981 e na OAB/PR sob o nº 89.002. Sócio-Proprietário do escritório Cardoso, Dani e Felisberto Banca de Advogados. Graduado em Direito pela Universidade do Vale do Itajaí – UNIVALI. Advoga nas áreas de Direito empresarial, contratos e intermediação de negociações. Conselheiro da OAB de Balneário Camboriú e Membro da Comissão de Direito Empresarial da OAB de Balneário Camboriú. Ex-presidente da Comissão de Direito do Consumidor da OAB – Subseção Balneário Camboriú. Conselheiro Diretivo do Adv social. Possui cursos de extensão em direito empresarial, contratos e negociações.</span>
                            </div>
                        </div>
                        <div>
                            <picture>
                                <img src={'./assets/images/dani.jpg'} alt="Sócio Fundador"/>
                            </picture>
                            <h6>Felipe André Dani</h6>
                            <p>Sócio Fundador</p>
                            <span>Advogado inscrito na OAB/SC sob nº 25.075. Possui graduação em Direito pela Universidade de Passo Fundo 2006, Pós-Graduado em Direito pela Universidade de Passo Fundo 2008, Mestrado em Direito pela Universidade do Vale do Itajaí 2011. Atualmente é professor na Universidade do Vale do Itajaí UNIVALI e Faculdade de Direito AVANTIS. Tem experiência docente nas disciplinas DIREITO PENAL, DIREITO PROCESSUAL PENAL e PRÁTICA JURÍDICA. É fundador do Legal Design Lab LDL.</span>
                        </div>
                        <div>
                            <picture>
                                <img src={'./assets/images/felisberto.jpg'} alt="Sócio Fundador"/>
                            </picture>
                            <h6>João Pedro Felisberto</h6>
                            <p>Sócio Fundador</p>
                            <span>Advogado inscrito na OAB/SC sob nº 61.001. Graduado em Direito pela Universidade do Vale do Itajaí - UNIVALI e Pós-Graduando em Direito Digital e Compliance pela Damásio Educacional. Técnico em Informática pelo Instituto Federal Catarinense. Possui atuação nas áreas de Direito Digital e segurança na Internet, vazamento de dados, Crimes Virtuais, Compliance Digital Empresarial, Direito do Consumidor, Responsabilidade Civil, Contratos e Cobranças Judiciais/Execuções; Membro da Comissão de Direito Digital da OAB - Subseção Balneário Camboriú/SC.</span>
                        </div>
                    </div>

                    <div className="partner-row">
                        <div>
                            <picture>
                                <img src={'./assets/images/TOMAZI.png'} alt="Colaboradora"/>
                            </picture>
                            <div className="partner-text">
                                <h6>Jamilli Amabilli Tomazi</h6>
                                
                                <span>Advogada inscrita na OAB/SC sob nº 67.362 com atuação na área de Direito Penal. Graduada em Direito pela Universidade Avantis – UNIAVAN. Cursou Perícia Criminal – Investigação em cenas de crime pelo Instituto Biomédico de Aprimoramento Profissional (IBAP). Ex-presidente da Comissão de Acadêmicos de Direito da OAB – Subseção Vale do Rio Tijucas/SC. Membro da Comissão da Jovem Advocacia da OAB – Subseção Vale do Rio Tijucas/SC. Possui cursos de extensão na Lei Geral de Proteção de Dados (LGPD) e Marketing Jurídico.</span>
                            </div>
                        </div>
                        <div>
                            <picture>
                                <img src={'./assets/images/PAIANO.png'} alt="Colaboradora"/>
                            </picture>
                            <h6>Manuela Paiano</h6>
                            
                            <span>Graduada em Direito pela Universidade Avantis – UNIAVAN. Vice-presidente da Comissão de Acadêmicos de Direito da OAB – Subseção Vale do Rio Tijucas/SC. Experiência de atuação junto à Vara Estadual de Direito Bancário do Tribunal de Justiça de Santa Catarina e 3ª Promotoria de Justiça do Ministério Público de Santa Catarina. Atuação voltada para o direito do consumidor e direito civil, em especial os processos de execução e ações de responsabilidade civil.</span>
                        </div>
                        <div>
                            <picture>
                                <img src={'./assets/images/COMPANHONI.png'} alt="Colaborador"/>
                            </picture>
                            <h6>Vinicius Becker Companhoni</h6>

                            <span>Advogado inscrito na OAB/SC sob nº 66.151 com atuação na área  de Direito Cível e Contratos. Graduado em direito pela Universidade do Vale do Itajaí - UNIVALI. Pós graduando em direito imobiliário e notarial.</span>
                        </div>
                    </div>
                </OurTeam>
                <FooterComponent/>
            </main>
        </>
    )
}

export default Equipe;
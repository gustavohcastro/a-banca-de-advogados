import React from 'react'
import Head from 'next/head'
import {BackgroundImage, Header, BannerArea, AboutCompany, OurOffice, ServicesHeader, ServicesCards, OurTeam, Posts, ProductsHome, ContactArea, Footer} from '../styles/pages/Home'
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import theme from "../styles/theme";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>A Banca de Advogados</title>
        <link rel="icon" type="image/x-icon" href="./assets/images/favicon.png"/>
      </Head>
      <main>
          <BackgroundImage>
          <Header>
              <picture>
                  <img src='./assets/images/logo.svg' className='logo'/>
              </picture>
              <div>
                  <a href=""><p>Home</p></a>
                  <a href=""><p>Escritório</p></a>
                  <a href=""><p>Áreas de atuação</p></a>
                  <a href=""><p>Equipe</p></a>
                  <a href=""><p>Publicações</p></a>
                  <a href=""><p>Contato</p></a>
              </div>
              <a href=""><p>Área do associado</p></a>
          </Header>
          <BannerArea>
            <h2>A banca de <br/>advogados</h2>
              <br/>
              <br/>
            <h3>Cardoso, Dani e Felisberto</h3>
              <br/>
             <p>A UNIÃO DE FORÇAS DISTINTAS, MAS AO MESMO TEMPO COMPLEMENTARES, É O QUE DETERMINA O SUCESSO DE UM PROJETO DE LONGO PRAZO. NASCE, ASSIM, A BANCA DE ADVOGADOS.</p>
          </BannerArea>
          </BackgroundImage>
          <AboutCompany>
              <picture>
                  <img src='./assets/images/logo.svg' className='logo' alt="Quem somos"/>
              </picture>
              <div>
                <p>Quem somos?</p>
                  <br/>
                <span>A banca de advogados surgiu da união de três advogados especializados em suas áreas, com o intuito de atender, com excelência, empresas e empresários que buscam se diferenciar no mercado, trazendo soluções eficientes, seguras, inteligentes e inovadoras, com apoio jurídico integral e permanente, atuando de forma judicial, extrajudicial e em negociações, buscando sempre a satisfação do cliente.</span>
              </div>
          </AboutCompany>
          <OurOffice>
              <picture>
                  <img src='./assets/images/ouroffice.png' className='logo' alt="Nosso escritório"/>
              </picture>
              <div>
                  <p>Nosso escritório</p>
                  <br/>
                  <span>Localizada no centro de Balneário Camboriú, nossa nova sede foi inaugurada em 2022, com viés totalmente corporativo e voltada aos negócios, trazendo conforto e praticidade aos clientes e parceiros.</span>
                  <br/>
                  <br/>
                  <br/>
                  <a href="">
                      <p>Ver mais {'>>'}</p>
                  </a>
              </div>
          </OurOffice>
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
                  <a href={""}><span>{'Ver mais >>'}</span></a>
              </div>
              <div>
                  <p>Direito Civil</p>
                  <span>O enfoque de atuação da esfera cível é voltado à ações de indenização por dano material e moral, responsabilidade civil, cobranças, execuções, obrigações de fazer e direito imobiliário.</span>
                  <a href={""}><span>{'Ver mais >>'}</span></a>
              </div>
              <div>
                  <p>Direito do Consumidor</p>
                  <span>Especialidade de atuação em ações de indenização por negativação indevida, ações revisionais por juros abusivos, reparação de danos ao consumidor, golpes sofridos de forma física ou virtual pelo consumidor.</span>
                  <a href={""}><span>{'Ver mais >>'}</span></a>
              </div>
              <div>
                  <p>Direito Penal</p>
                  <span>Atuação especializada em direito penal econômico, crimes financeiros, tráfico de entorpecentes, tribunal do Júri, acompanhamento da execução penal e revisão criminal.</span>
                  <a href={""}><span>{'Ver mais >>'}</span></a>
              </div>
              <div>
                  <p>Direito Bancário</p>
                  <span>Enfoque de atuação na revisão de financiamentos, defesas em busca e apreensão de bens, defesas em execuções de título extrajudicial e cobranças.</span>
                  <a href={""}><span>{'Ver mais >>'}</span></a>
              </div>
              <div>
                  <p>Direito Contratual</p>
                  <span>Especialidade de atuação na elaboração de contratos de prestação de serviços, contratos sociais empresariais, contratos imobiliários, contratos de parceria com influenciadores digitais, contratos de investimento, revisão contratual e análise de contratos abusivos.</span>
                  <a href={""}><span>{'Ver mais >>'}</span></a>
              </div>
          </ServicesCards>
          <OurTeam>
            <h4>Equipe</h4>
            <p>Equipe formada pelos sócios fundadores e demais contribuintes.</p>
            <div className="partner-row">
                <div>
                    <picture>
                        <img src='./assets/images/melkis.jpg' alt="Sócio Fundador"/>
                    </picture>
                    <h6>Melkis Cardoso</h6>
                    <p>Sócio Fundador</p>
                    <span>Advogado inscrito na OAB/SC sob o nº 43.981 e na OAB/PR sob o nº 89.002. Sócio-Proprietário do escritório Cardoso, Dani e Felisberto Banca de Advogados. Graduado em Direito pela Universidade do Vale do Itajaí – UNIVALI. Advoga nas áreas de Direito empresarial, contratos e intermediação de negociações. Conselheiro da OAB de Balneário Camboriú e Membro da Comissão de Direito Empresarial da OAB de Balneário Camboriú. Ex-presidente da Comissão de Direito do Consumidor da OAB – Subseção Balneário Camboriú. Conselheiro Diretivo do Adv social. Possui cursos de extensão em direito empresarial, contratos e negociações.</span>
                </div>
                <div>
                    <picture>
                        <img src='./assets/images/dani.jpg' alt="Sócio Fundador"/>
                    </picture>
                    <h6>Felipe André Dani</h6>
                    <p>Sócio Fundador</p>
                    <span>Advogado inscrito na OAB/SC sob nº 25.075. Possui graduação em Direito pela Universidade de Passo Fundo 2006, Pós-Graduado em Direito pela Universidade de Passo Fundo 2008, Mestrado em Direito pela Universidade do Vale do Itajaí 2011. Atualmente é professor na Universidade do Vale do Itajaí UNIVALI e Faculdade de Direito AVANTIS. Tem experiência docente nas disciplinas DIREITO PENAL, DIREITO PROCESSUAL PENAL e PRÁTICA JURÍDICA. É fundador do Legal Design Lab LDL.</span>
                </div>
                <div>
                    <picture>
                        <img src='./assets/images/felisberto.jpg' alt="Sócio Fundador"/>
                    </picture>
                    <h6>João Pedro Felisberto</h6>
                    <p>Sócio Fundador</p>
                    <span>Advogado inscrito na OAB/SC sob nº 61.001. Graduado em Direito pela Universidade do Vale do Itajaí - UNIVALI e Pós-Graduando em Direito Digital e Compliance pela Damásio Educacional. Técnico em Informática pelo Instituto Federal Catarinense. Possui atuação nas áreas de Direito Digital e segurança na Internet, vazamento de dados, Crimes Virtuais, Compliance Digital Empresarial, Direito do Consumidor, Responsabilidade Civil, Contratos e Cobranças Judiciais/Execuções; Membro da Comissão de Direito Digital da OAB - Subseção Balneário Camboriú/SC;</span>
                </div>
            </div>
          </OurTeam>
          <Posts>
              <div className="header-area">
                  <h3>Publicações</h3>
                  <a href="">
                    <p>{`Ver mais ->`}</p>
                  </a>
              </div>
              <div className="post-row">
                  <a href="">
                    <div>
                      <picture>
                          <img src='./assets/images/post_photo.png' alt="Sócio Fundador"/>
                      </picture>
                      <h6>Lorem Ipsum</h6>
                      <p>Baln. Camboriú, 03 de outubro de 2022.</p>
                    </div>
                  </a>
                  <a href="">
                      <div>
                          <picture>
                              <img src='./assets/images/post_photo.png' alt="Sócio Fundador"/>
                          </picture>
                          <h6>Lorem Ipsum</h6>
                          <p>Baln. Camboriú, 03 de outubro de 2022.</p>
                      </div>
                  </a>
                  <a href="">
                      <div>
                          <picture>
                              <img src='./assets/images/post_photo.png' alt="Sócio Fundador"/>
                          </picture>
                          <h6>Lorem Ipsum</h6>
                          <p>Baln. Camboriú, 03 de outubro de 2022.</p>
                      </div>
                  </a>
              </div>
          </Posts>
          <ProductsHome>
            <img className="background-image-product-area" src={"./assets/images/products-background.png"} alt="Products section background image"/>
              <div>
                <button>
                    <FiChevronLeft style={{width: 48, height:48}} color={theme.colors.dark}/>
                </button>
                <div className="product-area">
                    <img className="product-photo" src='./assets/images/post_photo.png' alt="Product"/>
                    <div className="product-text">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                        <h6>Produtos e Serviços</h6>
                        <p>Autor: Lorem Ipsum</p>
                    </div>
                </div>
                <button>
                    <FiChevronRight style={{width: 48, height:48}} color={theme.colors.dark}/>
                </button>
              </div>
          </ProductsHome>
          <ContactArea>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.6331428726303!2d-48.641913984960105!3d-26.978514502449656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8ca026da50edf%3A0x59a8fe191106b64e!2sR.%201301%2C%20471%20-%20Centro%2C%20Balne%C3%A1rio%20Cambori%C3%BA%20-%20SC%2C%2088330-795!5e0!3m2!1sen!2sbr!4v1667580921825!5m2!1sen!2sbr"
                style={{border: 0}} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
              <div className="contact-form">
                  <h2>Entre em contato ou<br/> nos encontre!</h2>
                  <form method="POST" action="#">
                      <label>Nome Completo</label>
                      <br/>
                      <input id="fullName" name="fullName" />
                      <br/>
                      <br/>
                      <label>Telefone/Whatsapp</label>
                      <br/>
                      <input id="fullName" name="fullName" />
                      <br/>
                      <br/>
                      <label>Mensagem</label>
                      <br/>
                      <textarea id="fullName" name="fullName" />
                      <br/>
                      <button>Enviar</button>
                      <button>Whatsapp</button>
                  </form>
              </div>
          </ContactArea>
          <Footer>
              <div className="footer-logo-area">
                  <picture>
                      <img src='./assets/images/logo.svg' className="logo-footer"/>
                  </picture>
              </div>
              <div className="footer-info">
                <p>Endereço: Avenida do Estado, n 100, Ed XXXXXXX - Sala 500 - Telefone : (47) 99999-99999 - E-mail: contato@abancadeadvogados.com.br</p>
              </div>
          </Footer>
          </main>
    </div>
  )
}

export default Home

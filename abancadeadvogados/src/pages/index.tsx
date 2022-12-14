import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import {BackgroundImage, BannerArea, AboutCompany, OurOffice, ServicesHeader, ServicesCards, OurTeam, Posts, ProductsHome, ContactArea} from '../styles/pages/Home'
import {FiArrowDownCircle, FiBox, FiChevronLeft, FiChevronRight, FiMenu, FiX} from "react-icons/fi";
import { GrFingerPrint } from "react-icons/gr"
import theme from "../styles/theme";
import Link from "next/link";
import Header from '../components/Header';
import FooterComponent from '../components/Footer';
import Router from 'next/router';
import { GetServerSideProps } from 'next';
import moment from 'moment';
import { useForm } from 'react-hook-form';
import prisma from "../lib/prismadb"

async function getAllPosts(){
    try {
        const posts = await prisma.post.findMany({
            include : {
                userId: {
                    select: {
                        name: true
                    }
                },
            },
            take: 4
        });
        // console.log(posts)
        const data = posts.map(post => {
            return {
                id: post.id,
                title: post.title,
                body: post.body,
                cropped: post.cropped,
                image: post.image,
                timeToRead: post.timeToRead,
                user: post.userId,
                date: post.createdAt.toISOString()
            }
        })

        return data
    }
    catch(e) {
        console.log(e)
        return []
    }
}

export const getServerSideProps: GetServerSideProps = async () => {
    
    try {
        console.log('ciomecou')
        const allPosts = await getAllPosts();
        console.log(allPosts)
        return {
            props: {
                allPosts
            }
        }
    }
    catch(e) {
        console.error(e)
    }
}

interface PostProps {
    id: string;
    title: string;
    body: string;
    cropped: string;
    image: string;
    timeToRead: string;
    user: string;
    date: string;
}

const Home: React.FC = (props: any) => {

    moment.locale('pt-br');

    const [posts, setPosts]= useState<PostProps[]>([]);
    const [services, setServices] = useState([])
    
    const {handleSubmit, register, getValues} = useForm();

    const handleForm = (data) => {
        console.log(data);
    }

    const handleWhatsApp = (data) => {
        const {fullName, body} = getValues();
        window.open(`https://wa.me/5547999841175?text=Ol??, meu nome ?? ${fullName}%0A%0A${body}`)
    }

    useEffect(() => {
        const response: PostProps[] = props.allPosts ? props.allPosts : [];
        setPosts(response)
    }, [])

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
            <h2>A banca de <br/>advogados</h2>
            <br/>
            <h3>Cardoso, Dani e Felisberto.</h3>
            <br/>
            <p>A uni??o de for??as distintas, mas ao mesmo tempo complementares, ?? o que determina o sucesso de um projeto de longo prazo. Nasce, assim, a banca de advogados.</p>
            <br/>
            <button onClick={() => document.getElementById('home-about-company').scrollIntoView()}>
                <p>Toque e descubra mais sobre n??s.</p>
                <FiArrowDownCircle className='bounce'/>
            </button>
          </BannerArea>
          </BackgroundImage>
          <AboutCompany id='home-about-company'>
              <picture>
                  <img src={'./assets/images/logo.svg'} className='logo' alt="Quem somos"/>
              </picture>
              <div>
                <p>Quem somos?</p>
                <br/>
                <span>A banca de advogados surgiu da uni??o de tr??s advogados especializados em suas ??reas, com o intuito de atender, com excel??ncia, empresas e empres??rios que buscam se diferenciar no mercado, trazendo solu????es eficientes, seguras, inteligentes e inovadoras, com apoio jur??dico integral e permanente, atuando de forma judicial, extrajudicial e em negocia????es, buscando sempre a satisfa????o do cliente.</span>
              </div>
          </AboutCompany>
          <OurOffice>
              <picture>
                  <img src={'./assets/images/4.png'} className='logo' alt="Nosso escrit??rio"/>
              </picture>
              <div>
                  <p>Nosso escrit??rio</p>
                  <br/>
                  <span>Localizada no centro de Balne??rio Cambori??, nossa nova sede foi inaugurada em 2022, com vi??s totalmente corporativo e voltada aos neg??cios, trazendo conforto e praticidade aos clientes e parceiros.</span>
                  <br/>
                  <br/>
                  <br/>
                  <Link href="/escritorio">Ver mais &gt;&gt;</Link>
              </div>
          </OurOffice>
          <ServicesHeader>
              <h4>??reas de atua????o,<br/>consultoria e<br/>especialidades.</h4>
              <div>
                  <p>Compromisso</p>
                  <span>Assumir um compromisso ?? ser fiel a uma promessa e entregar-se aquilo que se comprometeu a fazer, seja por si ou pelo outro.</span>
              </div>
              <div>
                  <p>Seriedade</p>
                  <span>A ??nica coisa que importa ?? colocar em pr??tica, com sinceridade e seriedade, aquilo em que se acredita.</span>
              </div>
          </ServicesHeader>
          <ServicesCards>
              <div>
                  <p>Direito Empresarial</p>
                  <span>Atua????o voltada a prestar assessoria jur??dica na ??rea empresarial, societ??ria, estrutura????o e planejamento de neg??cios e revis??o contratual.</span>
                  <Link href={"/areas-de-atuacao"}>Ver mais &gt;&gt;</Link>
              </div>
              <div>
                  <p>Direito Civil</p>
                  <span>O enfoque de atua????o da esfera c??vel ?? voltado ?? a????es de indeniza????o por dano material e moral, responsabilidade civil, cobran??as, execu????es, obriga????es de fazer e direito imobili??rio.</span>
                  <Link href={"/areas-de-atuacao"}>Ver mais &gt;&gt;</Link>
              </div>
              <div>
                  <p>Direito do Consumidor</p>
                  <span>Especialidade de atua????o em a????es de indeniza????o por negativa????o indevida, a????es revisionais por juros abusivos, repara????o de danos ao consumidor, golpes sofridos de forma f??sica ou virtual pelo consumidor.</span>
                  <Link href={"/areas-de-atuacao"}>Ver mais &gt;&gt;</Link>
              </div>
              <div>
                  <p>Direito Penal</p>
                  <span>Atua????o especializada em direito penal econ??mico, crimes financeiros, tr??fico de entorpecentes, tribunal do J??ri, acompanhamento da execu????o penal e revis??o criminal.</span>
                  <Link href={"/areas-de-atuacao"}>Ver mais &gt;&gt;</Link>
              </div>
              <div>
                  <p>Direito Banc??rio</p>
                  <span>Enfoque de atua????o na revis??o de financiamentos, defesas em busca e apreens??o de bens, defesas em execu????es de t??tulo extrajudicial e cobran??as.</span>
                  <Link href={"/areas-de-atuacao"}>Ver mais &gt;&gt;</Link>
              </div>
              <div>
                  <p>Direito Contratual</p>
                  <span>Especialidade de atua????o na elabora????o de contratos de presta????o de servi??os, contratos sociais empresariais, contratos imobili??rios, contratos de parceria com influenciadores digitais.</span>
                  <Link href={"/areas-de-atuacao"}>Ver mais &gt;&gt;</Link>
              </div>
          </ServicesCards>
          <OurTeam>
            <h4>Equipe</h4>
            <p>Equipe formada pelos s??cios fundadores e demais contribuintes.</p>
            <div className="partner-row">
                <div>
                    <picture>
                        <img src={'./assets/images/melkis.jpg'} alt="S??cio Fundador"/>
                    </picture>
                    <h6>Melkis Cardoso</h6>
                    <p>S??cio Fundador</p>
                    <span>Advogado inscrito na OAB/SC sob o n?? 43.981 e na OAB/PR sob o n?? 89.002. S??cio-Propriet??rio do escrit??rio Cardoso, Dani e Felisberto Banca de Advogados. Graduado em Direito pela Universidade do Vale do Itaja?? ??? UNIVALI. Advoga nas ??reas de Direito empresarial, contratos e intermedia????o de negocia????es. Conselheiro da OAB de Balne??rio Cambori?? e Membro da Comiss??o de Direito Empresarial da OAB de Balne??rio Cambori??. Ex-presidente da Comiss??o de Direito do Consumidor da OAB ??? Subse????o Balne??rio Cambori??. Conselheiro Diretivo do Adv social. Possui cursos de extens??o em direito empresarial, contratos e negocia????es.</span>
                </div>
                <div>
                    <picture>
                        <img src={'./assets/images/dani.jpg'} alt="S??cio Fundador"/>
                    </picture>
                    <h6>Felipe Andr?? Dani</h6>
                    <p>S??cio Fundador</p>
                    <span>Advogado inscrito na OAB/SC sob n?? 25.075. Possui gradua????o em Direito pela Universidade de Passo Fundo 2006, P??s-Graduado em Direito pela Universidade de Passo Fundo 2008, Mestrado em Direito pela Universidade do Vale do Itaja?? 2011. Atualmente ?? professor na Universidade do Vale do Itaja?? UNIVALI e Faculdade de Direito AVANTIS. Tem experi??ncia docente nas disciplinas DIREITO PENAL, DIREITO PROCESSUAL PENAL e PR??TICA JUR??DICA. ?? fundador do Legal Design Lab LDL.</span>
                </div>
                <div>
                    <picture>
                        <img src={'./assets/images/felisberto.jpg'} alt="S??cio Fundador"/>
                    </picture>
                    <h6>Jo??o Pedro Felisberto</h6>
                    <p>S??cio Fundador</p>
                    <span>Advogado inscrito na OAB/SC sob n?? 61.001. Graduado em Direito pela Universidade do Vale do Itaja?? - UNIVALI e P??s-Graduando em Direito Digital e Compliance pela Dam??sio Educacional. T??cnico em Inform??tica pelo Instituto Federal Catarinense. Possui atua????o nas ??reas de Direito Digital e seguran??a na Internet, vazamento de dados, Crimes Virtuais, Compliance Digital Empresarial, Direito do Consumidor, Responsabilidade Civil, Contratos e Cobran??as Judiciais/Execu????es; Membro da Comiss??o de Direito Digital da OAB - Subse????o Balne??rio Cambori??/SC.</span>
                </div>
            </div>
          </OurTeam>
          {posts.length > 0 ? (
          <Posts>
              <div className="header-area">
                  <h3>Publica????es</h3>
                  <a href="/publicacoes">
                    <p>{`Ver mais ->`}</p>
                  </a>
              </div>
              <div className="post-row">
                {posts.map(post => (
                  <a href={`/publicacoes/${post.id}`} key={post.id}>
                    <div>
                      <picture>
                          <img src={post.image} alt="S??cio Fundador"/>
                      </picture>
                      <h6>{post.title}</h6>
                      <p>{moment(post.date).format('LL')}</p>
                    </div>
                  </a>
                 ))}
              </div>
          </Posts>
          ): null}
          {services.length > 0 && services.map(service => (
            <ProductsHome>
                <div>
                    <button>
                        <FiChevronLeft style={{width: 48, height:48}} color={theme.colors.dark}/>
                    </button>
                    <div className="product-area">
                        <picture>
                            <img className="product-photo" src={'./assets/images/post_photo.png'} alt="Product"/>
                        </picture>
                        <div className="product-text">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                            <h6>Produtos e Servi??os</h6>
                            <p>Autor: Lorem Ipsum</p>
                            <button onClick={() => Router.push('/publicacoes')}>
                                Ver detalhes
                            </button>
                        </div>
                    </div>
                    <button>
                        <FiChevronRight style={{width: 48, height:48}} color={theme.colors.dark}/>
                    </button>
                </div>
            </ProductsHome>
          ))}
          <ContactArea>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.6331428726303!2d-48.641913984960105!3d-26.978514502449656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8ca026da50edf%3A0x59a8fe191106b64e!2sR.%201301%2C%20471%20-%20Centro%2C%20Balne%C3%A1rio%20Cambori%C3%BA%20-%20SC%2C%2088330-795!5e0!3m2!1sen!2sbr!4v1667580921825!5m2!1sen!2sbr"
                style={{border: 0}} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
              <div className="contact-form">
                  <h2>Entre em contato ou<br/> nos encontre!</h2>
                  <form onSubmit={() => handleSubmit(handleForm)}>
                      <label>Nome Completo</label>
                      <br/>
                      <input {...register('fullName')} id="fullName" name="fullName" />
                      <br/>
                      <br/>
                      <label>Telefone/Whatsapp</label>
                      <br/>
                      <input {...register('telephone')} id="telephone" name="telephone" />
                      <br/>
                      <br/>
                      <label>Mensagem</label>
                      <br/>
                      <textarea {...register('body')} id="body" name="body" />
                      <br/>
                      <button type='submit'>Enviar</button>
                      <button type='button' onClick={handleWhatsApp}>Whatsapp</button>
                  </form>
              </div>
          </ContactArea>
          <FooterComponent/> 
          </main>
    </>
  )
}

export default Home

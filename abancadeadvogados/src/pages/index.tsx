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

export const getServerSideProps: GetServerSideProps = async () => {
    
    
    const allPosts = await getAllPosts();

    return {
        props: {
            allPosts
        }
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
        window.open(`https://wa.me/5547999841175?text=Olá, meu nome é ${fullName}%0A%0A${body}`)
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
            <p>A união de forças distintas, mas ao mesmo tempo complementares, é o que determina o sucesso de um projeto de longo prazo. Nasce, assim, a banca de advogados.</p>
            <br/>
            <button onClick={() => document.getElementById('home-about-company').scrollIntoView()}>
                <p>Toque e descubra mais sobre nós.</p>
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
                <span>A banca de advogados surgiu da união de três advogados especializados em suas áreas, com o intuito de atender, com excelência, empresas e empresários que buscam se diferenciar no mercado, trazendo soluções eficientes, seguras, inteligentes e inovadoras, com apoio jurídico integral e permanente, atuando de forma judicial, extrajudicial e em negociações, buscando sempre a satisfação do cliente.</span>
              </div>
          </AboutCompany>
          <OurOffice>
              <picture>
                  <img src={'./assets/images/ouroffice.png'} className='logo' alt="Nosso escritório"/>
              </picture>
              <div>
                  <p>Nosso escritório</p>
                  <br/>
                  <span>Localizada no centro de Balneário Camboriú, nossa nova sede foi inaugurada em 2022, com viés totalmente corporativo e voltada aos negócios, trazendo conforto e praticidade aos clientes e parceiros.</span>
                  <br/>
                  <br/>
                  <br/>
                  <Link href="/escritorio">Ver mais &gt;&gt;</Link>
              </div>
          </OurOffice>
          <ServicesHeader>
              <h4>Àreas de atuação,<br/>consultoria e<br/>especialidades.</h4>
              <div>
                  <p>Compromisso</p>
                  <span>Assumir um compromisso é ser fiel a uma promessa e entregar-se aquilo que se comprometeu a fazer, seja por si ou pelo outro.</span>
              </div>
              <div>
                  <p>Seriedade</p>
                  <span>A única coisa que importa é colocar em prática, com sinceridade e seriedade, aquilo em que se acredita.</span>
              </div>
          </ServicesHeader>
          <ServicesCards>
              <div>
                  <p>Direito Empresarial</p>
                  <span>Atuação voltada a prestar assessoria jurídica na área empresarial, societária, estruturação e planejamento de negócios e revisão contratual.</span>
                  <Link href={"/areas-de-atuacao"}>Ver mais &gt;&gt;</Link>
              </div>
              <div>
                  <p>Direito Civil</p>
                  <span>O enfoque de atuação da esfera cível é voltado à ações de indenização por dano material e moral, responsabilidade civil, cobranças, execuções, obrigações de fazer e direito imobiliário.</span>
                  <Link href={"/areas-de-atuacao"}>Ver mais &gt;&gt;</Link>
              </div>
              <div>
                  <p>Direito do Consumidor</p>
                  <span>Especialidade de atuação em ações de indenização por negativação indevida, ações revisionais por juros abusivos, reparação de danos ao consumidor, golpes sofridos de forma física ou virtual pelo consumidor.</span>
                  <Link href={"/areas-de-atuacao"}>Ver mais &gt;&gt;</Link>
              </div>
              <div>
                  <p>Direito Penal</p>
                  <span>Atuação especializada em direito penal econômico, crimes financeiros, tráfico de entorpecentes, tribunal do Júri, acompanhamento da execução penal e revisão criminal.</span>
                  <Link href={"/areas-de-atuacao"}>Ver mais &gt;&gt;</Link>
              </div>
              <div>
                  <p>Direito Bancário</p>
                  <span>Enfoque de atuação na revisão de financiamentos, defesas em busca e apreensão de bens, defesas em execuções de título extrajudicial e cobranças.</span>
                  <Link href={"/areas-de-atuacao"}>Ver mais &gt;&gt;</Link>
              </div>
              <div>
                  <p>Direito Contratual</p>
                  <span>Especialidade de atuação na elaboração de contratos de prestação de serviços, contratos sociais empresariais, contratos imobiliários, contratos de parceria com influenciadores digitais.</span>
                  <Link href={"/areas-de-atuacao"}>Ver mais &gt;&gt;</Link>
              </div>
          </ServicesCards>
          <OurTeam>
            <h4>Equipe</h4>
            <p>Equipe formada pelos sócios fundadores e demais contribuintes.</p>
            <div className="partner-row">
                <div>
                    <picture>
                        <img src={'./assets/images/melkis.jpg'} alt="Sócio Fundador"/>
                    </picture>
                    <h6>Melkis Cardoso</h6>
                    <p>Sócio Fundador</p>
                    <span>Advogado inscrito na OAB/SC sob o nº 43.981 e na OAB/PR sob o nº 89.002. Sócio-Proprietário do escritório Cardoso, Dani e Felisberto Banca de Advogados. Graduado em Direito pela Universidade do Vale do Itajaí – UNIVALI. Advoga nas áreas de Direito empresarial, contratos e intermediação de negociações. Conselheiro da OAB de Balneário Camboriú e Membro da Comissão de Direito Empresarial da OAB de Balneário Camboriú. Ex-presidente da Comissão de Direito do Consumidor da OAB – Subseção Balneário Camboriú. Conselheiro Diretivo do Adv social. Possui cursos de extensão em direito empresarial, contratos e negociações.</span>
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
          </OurTeam>
          <Posts>
              <div className="header-area">
                  <h3>Publicações</h3>
                  <a href="/publicacoes">
                    <p>{`Ver mais ->`}</p>
                  </a>
              </div>
              <div className="post-row">
                {posts.map(post => (
                  <a href={`/publicacoes/${post.id}`} key={post.id}>
                    <div>
                      <picture>
                          <img src={post.image} alt="Sócio Fundador"/>
                      </picture>
                      <h6>{post.title}</h6>
                      <p>{moment(post.date).format('LL')}</p>
                    </div>
                  </a>
                 ))}
              </div>
          </Posts>
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
                            <h6>Produtos e Serviços</h6>
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

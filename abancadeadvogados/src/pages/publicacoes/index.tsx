import Head from "next/head";
import Link from "next/link";
import React from "react";
import { FormEvent, useState } from "react";
import { FiArrowLeftCircle, FiArrowRight, FiArrowRightCircle } from "react-icons/fi";
import { FilterForm } from "../../components/FilterForm";
import FooterComponent from "../../components/Footer";
import HeaderComponent from "../../components/Header";
import api from "../../services/api";
import { Post } from "../api/posts/interface";
import { BackgroundImage, BannerArea, Container, ContainerForm, LastPosts, PostGrid, PostsResult, SearchArea } from "../../styles/pages/Publicacoes";
import { GetServerSideProps } from "next";
import moment from "moment";
import prisma from "../../lib/prismadb"
import { useRouter } from "next/router";

enum FILTER_FORM_ENUM {
    SUBJECT = 'assunto',
    AUTHOR = 'autor',

}

enum AUTHOR_OPTIONS {
    MELKIS = 1,
    FELIPE = 2,
    JOAO = 3
}

interface FILTER_FORM_TYPE {
    [FILTER_FORM_ENUM.SUBJECT]: string;
    [FILTER_FORM_ENUM.AUTHOR]: string;
}

async function getPosts() {
    try {
        const posts = await prisma.post.findMany({
            include: {
                userId: {
                    select: {
                        name: true
                    }
                },
            },
            orderBy: [
                {
                    createdAt: 'desc',
                },
            ],
            take: 3
        });

        const data = posts.map(post => {
            return {
                id: post.id,
                title: post.title,
                body: post.body,
                cropped: post.cropped,
                image: post.image,
                timeToRead: post.timeToRead,
                slug: post.slug,
                user: post.userId,
                date: post.createdAt.toISOString()
            }
        })

        return data
    }
    catch (e) {
        return []
    }
}

async function getUsers() {
    try {
        return await prisma.user.findMany({
            select: {
                name: true,
                id: true
            }
        })
    }
    catch (e) {
        return []
    }

}

export interface PostFilterProps {
    assunto?: string;
    autor?: string;
}
async function getAllPosts(filter: PostFilterProps) {
    try {

        const { assunto, autor } = filter;
        const posts = await prisma.post.findMany({
            where: {
                title: {
                    contains: assunto,
                },
                userId: {
                    name: {
                        equals: autor,
                    }
                }
            },
            include: {
                userId: {
                    select: {
                        name: true
                    }
                }

            },
            orderBy: [
                {
                    createdAt: 'desc',
                },
            ],
            take: 9
        });

        const data = posts.map(post => {
            return {
                id: post.id,
                title: post.title,
                body: post.body,
                cropped: post.cropped,
                image: post.image,
                timeToRead: post.timeToRead,
                slug: post.slug,
                user: post.userId,
                date: post.createdAt.toISOString()
            }
        })

        return data
    }
    catch (e) {
        return []
    }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const urlParams = (context.query)

    const posts = await getPosts();
    const users = await getUsers();
    const allPosts = await getAllPosts(urlParams);

    return {
        props: {
            posts,
            users,
            allPosts
        }
    }
}

const Publicacoes = ({ posts, users, allPosts }) => {


    const router = useRouter();

    const initialValues = {
        [FILTER_FORM_ENUM.SUBJECT]: '',
        [FILTER_FORM_ENUM.AUTHOR]: '',

    }
    const [formData, setFormData] = useState<FILTER_FORM_TYPE>(initialValues as FILTER_FORM_TYPE);
    // const modal = useRef<ModalHandles | null>(null);

    const onWrite = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        let filtro: string[] | string = [];
        if (formData.autor) filtro.push(`autor=${formData.autor}`)
        if (formData.assunto) filtro.push(`assunto=${formData.assunto}`)

        filtro = filtro.join('&');
        router.push(`/publicacoes?${filtro}`)
        // setFormData(initialValues);
        // modal.current?.openModal();
    }

    return (
        <>
            <Head>
                <title>Publicações</title>
                <link rel="icon" type="image/x-icon" href={"./assets/images/favicon.png"} />
                <meta name="description" content="A união de forças distintas, mas ao mesmo tempo complementares, é o que determina o sucesso de um projeto de longo prazo. Nasce, assim, A Banca de Advogados." />
                <meta property="og:locale" content="pt_BR" />
                <meta property="og:type" content="website"></meta>
                <meta property="og:title" content="A Banca de advogados"></meta>
                <meta property="og:description" content="A união de forças distintas, mas ao mesmo tempo complementares, é o que determina o sucesso de um projeto de longo prazo. Nasce, assim, A Banca de Advogados."></meta>
                <meta property="og:url" content="https://www.bancadeadvogados.adv.br/"></meta>
                <meta property="og:site_name" content="A Banca de advogados"></meta>
                <meta property="article:modified_time" content="2023-02-03T16:49:47+00:00"></meta>
            </Head>
            <main>
                <BackgroundImage style={{ height: '50vh' }}>
                    <HeaderComponent />
                    <BannerArea>
                        <h2>Publicações</h2>
                        {/* <br/> */}
                        {/* <p>Localizada no centro de Balneário Camboriú, nossa nova sede foi inaugurada em 2022, com viés totalmente corporativo e voltada aos negócios, trazendo conforto e praticidade aos clientes e parceiros.</p> */}
                        {/* <br/> */}
                    </BannerArea>
                </BackgroundImage>
                <LastPosts>
                    <h2>Últimas publicações</h2>
                    <br />
                    <PostsResult>
                        <div className="cards">
                            {posts.map(post => (
                                <div className="card" key={post.id}>
                                    <img src={post.image} />
                                    <span>Dr. {post.user.name} · {moment(post.date).format('DD/MM/YYYY')}</span>
                                    <h3>{post.title}</h3>
                                    <div dangerouslySetInnerHTML={{
                                        __html: post.cropped,
                                    }}></div>
                                    <div className="card-row">
                                        <span>{post.timeToRead} minutos de leitura.</span>
                                        <Link href={`/publicacoes/${post.slug}`}>
                                            <h6>Publicação completa<FiArrowRight /></h6>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </PostsResult>
                </LastPosts>
                <SearchArea>
                    <h4>Todas as publicações</h4>
                    <div>
                        <ContainerForm>
                            <Container>
                                <div className="form-filter-div">
                                    <form
                                        name="filter-form"
                                        onSubmit={onSubmit}
                                    >
                                        <div className='field-wrapper'>
                                            <label htmlFor='assunto'>Assunto</label>
                                            <input
                                                id="assunto"
                                                name={FILTER_FORM_ENUM.SUBJECT}
                                                value={formData[FILTER_FORM_ENUM.SUBJECT]}
                                                onChange={onWrite}
                                                type="text"
                                            // required
                                            />
                                        </div>
                                        <div className='field-wrapper'>
                                            <label htmlFor='autor'>Autor</label>
                                            <select
                                                id="autor"
                                                name={FILTER_FORM_ENUM.AUTHOR}
                                                placeholder='Autor'
                                                value={formData[FILTER_FORM_ENUM.AUTHOR]}
                                                onChange={onWrite}
                                            >
                                                <option value={null}></option>
                                                {users.map(user => (
                                                    <option value={user.name}>Dr. {user.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <button type="submit" className='btn-enviar'>Buscar</button>
                                    </form>
                                </div>
                            </Container>
                            {/* <Modal ref={modal}>
                                <S.ContainerModal className={"nx-flex-center-center"}>
                                    <h2 className={"titleFormModal"}>Obrigado!</h2>
                                    <p>Em breve entraremos em contato!</p>
                                    <button onClick={() => modal.current?.closeModal() }>
                                        OK
                                    </button>
                                </S.ContainerModal>
                            </Modal> */}
                        </ContainerForm>
                    </div>
                </SearchArea>
                <PostsResult>
                    <div className="page-control">
                        <FiArrowLeftCircle />
                        <FiArrowRightCircle />
                    </div>
                    <div className="cards">
                        {allPosts.map(post => (
                            <div className="card" key={post.id}>
                                <img src={post.image} />
                                <span>Dr. {post.user.name} · {moment(post.date).format('DD/MM/YYYY')}</span>
                                <h3>{post.title}</h3>
                                <div dangerouslySetInnerHTML={{
                                    __html: post.cropped,
                                }}></div>
                                <div className="card-row">
                                    <span>{post.timeToRead} minutos de leitura.</span>
                                    <Link href={`/publicacoes/${post.slug}`}>
                                        <h6>Publicação completa<FiArrowRight /></h6>
                                    </Link>
                                </div>
                            </div>
                        ))}

                    </div>
                </PostsResult>
                <FooterComponent />
            </main>
        </>
    )
}

export default Publicacoes;

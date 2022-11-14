import Head from "next/head";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { FiArrowLeftCircle, FiArrowRight, FiArrowRightCircle } from "react-icons/fi";
import { FilterForm } from "../../components/FilterForm";
import FooterComponent from "../../components/Footer";
import HeaderComponent from "../../components/Header";
import { BackgroundImage, BannerArea, Container, ContainerForm, LastPosts, PostGrid, PostsResult, SearchArea } from "./styles";

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


const Publicacoes = () => {

    const initialValues = {
        [FILTER_FORM_ENUM.SUBJECT]: '',
        [FILTER_FORM_ENUM.AUTHOR]: '',
        
    }
    const [formData, setFormData] = useState<FILTER_FORM_TYPE>(initialValues as FILTER_FORM_TYPE);
    // const modal = useRef<ModalHandles | null>(null);

    const onWrite = (e: any) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormData(initialValues);
        // modal.current?.openModal();
    }


    return (
        <>
            <Head>
                <title>Publicações</title>
                <link rel="icon" type="image/x-icon" href={"./assets/images/favicon.png"}/>
            </Head>
            <main>
                <BackgroundImage style={{height: '70vh'}}>
                    <HeaderComponent/>
                    <BannerArea>
                        <h2>Publicações</h2>
                        <br/>
                        <p>Localizada no centro de Balneário Camboriú, nossa nova sede foi inaugurada em 2022, com viés totalmente corporativo e voltada aos negócios, trazendo conforto e praticidade aos clientes e parceiros.</p>
                        <br/>
                    </BannerArea>
                </BackgroundImage>
                <LastPosts>
                    <h2>Últimas publicações</h2>
                    <br/>
                    <PostGrid>
                        <div className="post-line">
                            <picture>
                                <img src={'./assets/images/post01.png'} />
                            </picture>
                            <div className="text-area">
                                <div className="text-row">
                                    <span>Dr. Felipe André Dani · <span className="text-grey">1 semana atrás </span></span>
                                </div>
                                <br/>
                                <div className="text-row">
                                    <p>Contratos em 2022</p>
                                </div>
                                <div>
                                    <span className="text-grey">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tortor ligula, dapibus vitae vulputate nec. 
                                    </span>
                                </div>
                                <br/>
                                <div className="text-row">
                                    <span className="text-grey">
                                        12 minutos de leitura.
                                    </span>
                                    <Link href="/publicacoes/contratos-em-2022">
                                        <h6>Publicação completa -&gt;</h6>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="post-line">
                            <div className="text-area">
                                <div className="text-row">
                                    <span>Dr. Melkis Cardoso · <span className="text-grey">1 semana atrás </span></span>
                                </div>
                                <br/>
                                <div className="text-row">
                                    <p>Assessoria Jurídica</p>
                                </div>
                                <div>
                                    <span className="text-grey">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tortor ligula, dapibus vitae vulputate nec. 
                                    </span>
                                </div>
                                <br/>
                                <div className="text-row">
                                    <span className="text-grey">
                                        20 minutos de leitura.
                                    </span>
                                    <Link href="/publicacoes/assessoria-juridica">
                                        <h6>Publicação completa -&gt;</h6>
                                    </Link>
                                </div>
                            </div>
                            <picture>
                                <img src={'./assets/images/post02.png'} />
                            </picture>
                        </div>
                    </PostGrid>
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
                                                <option value={AUTHOR_OPTIONS.MELKIS}>Dr. Melkis Cardoso</option>
                                                <option value={AUTHOR_OPTIONS.FELIPE}>Dr. Felipe André Dani</option>
                                                <option value={AUTHOR_OPTIONS.JOAO}>Dr. João Pedro Felisberto</option>
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
                        <FiArrowLeftCircle/>
                        <FiArrowRightCircle/>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <img src={'./assets/images/post02.png'} />
                            <span>Dr. Felipe André Dani · 1 semana atrás</span>
                            <h3>Contratos em 2022</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tortor ligula, dapibus vitae vulputate nec. </p>
                            <div className="card-row">
                                <span>12 minutos de leitura.</span>
                                <Link href='/'>
                                    <h6>Publicação completa<FiArrowRight/></h6>
                                </Link>
                            </div>
                        </div>
                          <div className="card">
                            <img src={'./assets/images/post02.png'} />
                            <span>Dr. Felipe André Dani · 1 semana atrás</span>
                            <h3>Contratos em 2022</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tortor ligula, dapibus vitae vulputate nec. </p>
                            <div className="card-row">
                                <span>12 minutos de leitura.</span>
                                <Link href='/'>
                                    <h6>Publicação completa<FiArrowRight/></h6>
                                </Link>
                            </div>
                        </div>
                          <div className="card">
                            <img src={'./assets/images/post02.png'} />
                            <span>Dr. Felipe André Dani · 1 semana atrás</span>
                            <h3>Contratos em 2022</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tortor ligula, dapibus vitae vulputate nec. </p>
                            <div className="card-row">
                                <span>12 minutos de leitura.</span>
                                <Link href='/'>
                                    <h6>Publicação completa<FiArrowRight/></h6>
                                </Link>
                            </div>
                        </div>
                          <div className="card">
                            <img src={'./assets/images/post02.png'} />
                            <span>Dr. Felipe André Dani · 1 semana atrás</span>
                            <h3>Contratos em 2022</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tortor ligula, dapibus vitae vulputate nec. </p>
                            <div className="card-row">
                                <span>12 minutos de leitura.</span>
                                <Link href='/'>
                                    <h6>Publicação completa<FiArrowRight/></h6>
                                </Link>
                            </div>
                        </div>
                          <div className="card">
                            <img src={'./assets/images/post02.png'} />
                            <span>Dr. Felipe André Dani · 1 semana atrás</span>
                            <h3>Contratos em 2022</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tortor ligula, dapibus vitae vulputate nec. </p>
                            <div className="card-row">
                                <span>12 minutos de leitura.</span>
                                <Link href='/'>
                                    <h6>Publicação completa<FiArrowRight/></h6>
                                </Link>
                            </div>
                        </div>
                          <div className="card">
                            <img src={'./assets/images/post02.png'} />
                            <span>Dr. Felipe André Dani · 1 semana atrás</span>
                            <h3>Contratos em 2022</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tortor ligula, dapibus vitae vulputate nec. </p>
                            <div className="card-row">
                                <span>12 minutos de leitura.</span>
                                <Link href='/'>
                                    <h6>Publicação completa<FiArrowRight/></h6>
                                </Link>
                            </div>
                        </div>
                    </div>
                </PostsResult>
                <FooterComponent/>
                </main>
            </>
    )
}

export default Publicacoes;

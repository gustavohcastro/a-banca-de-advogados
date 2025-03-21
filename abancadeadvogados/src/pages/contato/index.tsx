import Head from "next/head";
import FooterComponent from "../../components/Footer";
import HeaderComponent from "../../components/Header";
import { BackgroundImage, BannerArea, ContactArea } from "../../styles/pages/Contato";
import React from 'react';
import { useForm } from "react-hook-form";

const Contato: React.FC = () => {
    const { handleSubmit, register, getValues } = useForm();

    const handleForm = (data) => {
        console.log(data);
    }

    // Função para abrir o WhatsApp com os dados do formulário
    const handleWhatsApp = () => {
        const { fullName, telephone, email, body } = getValues();

        let message = `Olá, meu nome é ${fullName || 'Nome não informado'}.%0A`;
        message += `Vim através do seu site e gostaria de mais informações.%0A%0A`;

        message += `*Meus dados:*%0A`;
        if (telephone) message += `Telefone: ${telephone}%0A`;
        if (email) message += `E-mail: ${email}%0A`;

        message += `%0A*Mensagem:*%0A${body || 'Nenhuma mensagem informada.'}`;

        // Abre o WhatsApp com a mensagem formatada
        window.open(`https://wa.me/554733112483?text=${message}`);
    };


    return (
        <>
            <Head>
                <title>Contato</title>
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
                <HeaderComponent />
                {/* <BackgroundImage style={{height: '70vh'}}>
                    
                    <BannerArea>
                        <h2>Contato</h2>
                        <br/>
                        <p>Localizada no centro de Balneário Camboriú, nossa nova sede foi inaugurada em 2022, com viés totalmente corporativo e voltada aos negócios, trazendo conforto e praticidade aos clientes e parceiros.</p>
                        <br/>
                    </BannerArea>
                </BackgroundImage> */}
                <ContactArea>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.6331428726303!2d-48.641913984960105!3d-26.978514502449656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8ca026da50edf%3A0x59a8fe191106b64e!2sR.%201301%2C%20471%20-%20Centro%2C%20Balne%C3%A1rio%20Cambori%C3%BA%20-%20SC%2C%2088330-795!5e0!3m2!1sen!2sbr!4v1667580921825!5m2!1sen!2sbr"
                        style={{ border: 0 }} allowFullScreen loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                    <div className="contact-form">
                        <h2>Entre em contato ou<br /> nos encontre!</h2>
                        <form onSubmit={() => handleSubmit(handleForm)}>
                            <label>Nome Completo</label>
                            <br />
                            <input {...register('fullName')} id="fullName" name="fullName" />
                            <br />
                            <br />
                            <label>Telefone/Whatsapp</label>
                            <br />
                            <input {...register('telephone')} id="telephone" name="telephone" />
                            <br />
                            <br />
                            <label>E-mail</label>
                            <br />
                            <input {...register('email')} id="email" name="email" type="email" />
                            <br />
                            <br />
                            <label>Mensagem</label>
                            <br />
                            <textarea {...register('body')} id="body" name="body" />
                            <br />
                            {/* <button type='submit'>Enviar</button> */}
                            <button type='button' onClick={handleWhatsApp}>Fale conosco pelo WhatsApp</button>
                        </form>
                    </div>
                </ContactArea>
                <FooterComponent />
            </main>
        </>
    )
}

export default Contato;

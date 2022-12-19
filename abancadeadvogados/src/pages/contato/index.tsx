import Head from "next/head";
import FooterComponent from "../../components/Footer";
import HeaderComponent from "../../components/Header";
import { BackgroundImage, BannerArea, ContactArea } from "../../styles/pages/Contato";
import React from 'react';
import { useForm } from "react-hook-form";

const Contato: React.FC = () => {
    const {handleSubmit, register, getValues} = useForm();

    const handleForm = (data) => {
        console.log(data);
    }

    const handleWhatsApp = (data) => {
        const {fullName, body} = getValues();
        window.open(`https://wa.me/5547999841175?text=Olá, meu nome é ${fullName}%0A%0A${body}`)
    }
    
    return (
        <>
            <Head>
                <title>Contato</title>
                <link rel="icon" type="image/x-icon" href={"./assets/images/favicon.png"}/>
            </Head>
            <main>
                <BackgroundImage style={{height: '70vh'}}>
                    <HeaderComponent/>
                    <BannerArea>
                        <h2>Contato</h2>
                        <br/>
                        <p>Localizada no centro de Balneário Camboriú, nossa nova sede foi inaugurada em 2022, com viés totalmente corporativo e voltada aos negócios, trazendo conforto e praticidade aos clientes e parceiros.</p>
                        <br/>
                    </BannerArea>
                </BackgroundImage>
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

export default Contato;

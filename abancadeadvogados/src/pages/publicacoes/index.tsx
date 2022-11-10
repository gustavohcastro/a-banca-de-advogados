import Head from "next/head";
import HeaderComponent from "../../components/Header";
import { BackgroundImage, BannerArea, LastPosts } from "./styles";

const Publicacoes = () => {
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
                </LastPosts>
                </main>
            </>
    )
}

export default Publicacoes;

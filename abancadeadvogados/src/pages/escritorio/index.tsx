import Head from "next/head"
import React from "react"
import { FiArrowDownCircle, FiArrowLeft, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import HeaderComponent from "../../components/Header";
import { BackgroundImage } from "../../styles/pages/Home";
import { BannerArea, CarouselArea, OfficeDescription, Picture } from "./styles";
import dynamic from 'next/dynamic'
import FooterComponent from "../../components/Footer";

const DynamicComponentWithNoSSR = dynamic(
  () => import('./carousel') as any,
  { ssr: false}
)



const Escritorio: React.FC = () => {
    
    return (
        <>
            <DynamicComponentWithNoSSR />
            <Head>
                <title>Escritório</title>
                <link rel="icon" type="image/x-icon" href={"./assets/images/favicon.png"}/>
            </Head>
            <main>
                <BackgroundImage style={{height: '70vh'}}>
                    <HeaderComponent/>
                    <BannerArea>
                        <h2>Escritório</h2>
                        <br/>
                        <p>Localizada no centro de Balneário Camboriú, nossa nova sede foi inaugurada em 2022, com viés totalmente corporativo e voltada aos negócios, trazendo conforto e praticidade aos clientes e parceiros.</p>
                        <br/>
                    </BannerArea>
                </BackgroundImage>
                <CarouselArea>
                    <div className="carousel" data-carousel>
                        <button className="carousel-button prev" data-carousel-button="prev"><FiChevronLeft/> </button>
                        <button className="carousel-button next" data-carousel-button="next"><FiChevronRight/></button>
                        <ul data-slides>
                            <li className="slide" data-active>
                                <Picture>
                                    <img src={'./assets/images/escritorio1.png'} alt="Foto do escritório #1"/>
                                </Picture>
                            </li>
                            <li className="slide">
                                <Picture>
                                    <img src={'./assets/images/escritorio2.png'} alt="Foto do escritório #2"/>
                                </Picture>
                            </li>
                            <li className="slide">
                                <Picture>
                                    <img src={'./assets/images/escritorio3.png'} alt="Foto do escritório #3"/>
                                </Picture>
                            </li>
                        </ul>
                    </div>
                </CarouselArea>
                <OfficeDescription>
                    <h2>Nosso escritório</h2>
                    <p>Localizada no centro de Balneário Camboriú, nossa nova sede foi inaugurada em 2022, com viés totalmente corporativo e voltada aos negócios, trazendo conforto e praticidade aos clientes e parceiros.</p>
                </OfficeDescription>
                <FooterComponent/>
            </main>
        </>    
    )
}

export default Escritorio;
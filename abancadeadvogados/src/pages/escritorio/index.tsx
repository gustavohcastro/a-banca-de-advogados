import Head from "next/head"
import React from "react"
import { FiArrowDownCircle, FiArrowLeft, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import HeaderComponent from "../../components/Header";
import { BackgroundImage } from "../../styles/pages/Home";
import { BannerArea, CarouselArea, OfficeDescription, Picture } from "../../styles/pages/Escritorio";
// import dynamic from 'next/dynamic'
import FooterComponent from "../../components/Footer";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';

// const DynamicComponentWithNoSSR = dynamic(
//   () => import('./Carousel') as any,
//   { ssr: false}
// )



const Escritorio: React.FC = () => {

    // React.useEffect(() => {
    //     const buttons: any = document.querySelectorAll("[data-carousel-button]")
    //     buttons.forEach(button => {
    //         button.addEventListener("click", () => {
    //         const offset = button.dataset.carouselButton === "next" ? 1 : -1
    //         const slides = button
    //             .closest("[data-carousel]")
    //             .querySelector("[data-slides]")

    //         const activeSlide = slides.querySelector("[data-active]")
    //         let newIndex = [...slides.children].indexOf(activeSlide) + offset
    //         if (newIndex < 0) newIndex = slides.children.length - 1
    //         if (newIndex >= slides.children.length) newIndex = 0

    //         slides.children[newIndex].dataset.active = true
    //         delete activeSlide.dataset.active
    //         })
    //     })
    // },[])
    
    return (
        <>
            {/* <DynamicComponentWithNoSSR /> */}
            <Head>
                <title>Escritório</title>
                <link rel="icon" type="image/x-icon" href={"./assets/images/favicon.png"}/>
            </Head>
            <main>
                <HeaderComponent/>
                {/* <BackgroundImage style={{height: '70vh'}}>
                    
                    <BannerArea>
                        <h2>Escritório</h2>
                        <br/>
                        <p>Localizada no centro de Balneário Camboriú, nossa nova sede foi inaugurada em 2022, com viés totalmente corporativo e voltada aos negócios, trazendo conforto e praticidade aos clientes e parceiros.</p>
                        <br/>
                    </BannerArea>
                </BackgroundImage> */}
                 <OfficeDescription>
                    <h2>Nosso escritório</h2>
                    <p>Localizada no centro de Balneário Camboriú, nossa nova sede foi inaugurada em 2022, com viés totalmente corporativo e voltada aos negócios, trazendo conforto e praticidade aos clientes e parceiros.</p>
                </OfficeDescription>
                <CarouselArea>
                    <PhotoProvider>
                        <div className="row">
                            <PhotoView src={'./assets/images/4.png'}>
                                <img className="image" src={'./assets/images/4.png'} alt="Foto do escritório #1"/>
                            </PhotoView>
                             <PhotoView src={'./assets/images/6.png'}>
                                <img className="image" src={'./assets/images/6.png'} alt="Foto do escritório #2"/>
                            </PhotoView>
                             <PhotoView src={'./assets/images/5.png'}>
                                <img className="image" src={'./assets/images/5.png'} alt="Foto do escritório #3"/>
                            </PhotoView>
                             <PhotoView src={'./assets/images/1.jpg'}>
                                <img className="image" src={'./assets/images/1.jpg'} alt="Foto do escritório #4"/>
                            </PhotoView>
                        </div>
                        <br/>
                        <div className="row">
                            <PhotoView src={'./assets/images/3.jpg'} >
                                <img className="image" src={'./assets/images/3.jpg'} alt="Foto do escritório #5"/>
                            </PhotoView>
                             <PhotoView src={'./assets/images/_N4A4970.jpg'}>
                                <img className="image" src={'./assets/images/_N4A4970.jpg'} alt="Foto do escritório #6"/>
                            </PhotoView>
                             <PhotoView src={'./assets/images/_N4A4979.jpg'}>
                                <img className="image" src={'./assets/images/_N4A4979.jpg'} alt="Foto do escritório #7"/>
                            </PhotoView>
                             <PhotoView src={'./assets/images/_N4A4989.jpg'}>
                                <img className="image" src={'./assets/images/_N4A4989.jpg'} alt="Foto do escritório #8"/>
                            </PhotoView>
                        </div>
                    </PhotoProvider>
                    {/* <div className="carousel" data-carousel>
                        <button className="carousel-button prev" data-carousel-button="prev"><FiChevronLeft/> </button>
                        <button className="carousel-button next" data-carousel-button="next"><FiChevronRight/></button>
                        <ul data-slides>
                            <li className="slide" data-active>
                                <Picture>
                                    <img src={'./assets/images/4.png'} alt="Foto do escritório #1"/>
                                </Picture>
                            </li>
                            <li className="slide">
                                <Picture>
                                    <img src={'./assets/images/6.png'} alt="Foto do escritório #2"/>
                                </Picture>
                            </li>
                            <li className="slide">
                                <Picture>
                                    <img src={'./assets/images/5.png'} alt="Foto do escritório #4"/>
                                </Picture>
                            </li>
                            <li className="slide">
                                <Picture>
                                    <img src={'./assets/images/7.png'} alt="Foto do escritório #4"/>
                                </Picture>
                            </li>
                        </ul>
                    </div> */}
                </CarouselArea>
               
                <FooterComponent/>
            </main>
        </>    
    )
}

export default Escritorio;
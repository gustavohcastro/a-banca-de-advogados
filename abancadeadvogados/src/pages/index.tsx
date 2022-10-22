import React from 'react'
import Head from 'next/head'
import {BackgroundImage, Header, BannerArea, AboutCompany, OurOffice, ServicesHeader, ServicesCards} from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
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
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus magna libero, molestie maximus nibh vehicula eu. Integer ut vulputate ex, sed dictum turpis. Phasellus id justo accumsan sem euismod laoreet. Vivamus non lobortis est. Etiam sollicitudin tellus justo, sit amet laoreet neque rutrum eget. Phasellus justo ante, tincidunt sed turpis ac.</p>
          </BannerArea>
          </BackgroundImage>
          <AboutCompany>
              <picture>
                  <img src='./assets/images/logo.svg' className='logo' alt="Quem somos"/>
              </picture>
              <div>
                <p>Quem somos?</p>
                  <br/>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
              </div>
          </AboutCompany>
          <OurOffice>
              <picture>
                  <img src='./assets/images/ouroffice.png' className='logo' alt="Nosso escritório"/>
              </picture>
              <div>
                  <p>Nosso escritório</p>
                  <br/>
                  <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
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
                  <p>Direito da família</p>
                  <span>Pendampingan hukum keluarga dalam sengketa harta bersama, hak asuh anak, perwalian, waris, hibah, dan perceraian.</span>
                  <a href={""}><span>{'Ver mais >>'}</span></a>
              </div>
              <div>
                  <p>Direito da família</p>
                  <span>Pendampingan hukum keluarga dalam sengketa harta bersama, hak asuh anak, perwalian, waris, hibah, dan perceraian.</span>
                  <a href={""}><span>{'Ver mais >>'}</span></a>
              </div>
              <div>
                  <p>Direito da família</p>
                  <span>Pendampingan hukum keluarga dalam sengketa harta bersama, hak asuh anak, perwalian, waris, hibah, dan perceraian.</span>
                  <a href={""}><span>{'Ver mais >>'}</span></a>
              </div>
              <div>
                  <p>Direito da família</p>
                  <span>Pendampingan hukum keluarga dalam sengketa harta bersama, hak asuh anak, perwalian, waris, hibah, dan perceraian.</span>
                  <a href={""}><span>{'Ver mais >>'}</span></a>
              </div>
              <div>
                  <p>Direito da família</p>
                  <span>Pendampingan hukum keluarga dalam sengketa harta bersama, hak asuh anak, perwalian, waris, hibah, dan perceraian.</span>
                  <a href={""}><span>{'Ver mais >>'}</span></a>
              </div>
              <div>
                  <p>Direito da família</p>
                  <span>Pendampingan hukum keluarga dalam sengketa harta bersama, hak asuh anak, perwalian, waris, hibah, dan perceraian.</span>
                  <a href={""}><span>{'Ver mais >>'}</span></a>
              </div>
              <div>
                  <p>Direito da família</p>
                  <span>Pendampingan hukum keluarga dalam sengketa harta bersama, hak asuh anak, perwalian, waris, hibah, dan perceraian.</span>
                  <a href={""}><span>{'Ver mais >>'}</span></a>
              </div>
              <div>
                  <p>Direito da família</p>
                  <span>Pendampingan hukum keluarga dalam sengketa harta bersama, hak asuh anak, perwalian, waris, hibah, dan perceraian.</span>
                  <a href={""}><span>{'Ver mais >>'}</span></a>
              </div>
              
          </ServicesCards>
          </main>
    </div>
  )
}

export default Home

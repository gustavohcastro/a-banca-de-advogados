import styled from 'styled-components';

interface PropsOpen {
	open: boolean;
}

export const BackgroundImage = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url("./assets/images/bg_home_grad.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 15% 55%;
  margin-top: -16px;
  padding-top: 16px;

   @media (max-width: 768px) {
      background-position: 100% 15%;

   }
`

export const BannerArea = styled.div`
  padding: 36px;
  width: 100vw;
  display: flex;
  flex-direction: column;

  picture .logo {
  width: 600px;
}

	
  h2 {
    color: ${props => props.theme.colors.text};
    font-family: 'Noto Serif', serif;
    font-size: 6rem;
	  text-shadow: 2px 2px ${props => props.theme.colors.grey};
  }

  h3 {
    font-size: 2.4rem;
  }
	
  p {
    width: 40vw;
    font-size: 1rem;
  }
  
  button {
    margin-top: 5vh;
    outline: 0;
    border: none;
    background-color: transparent;
    align-self: center;

    display: flex;
    flex-direction: column;
    align-items: center;  
    
    p {
      margin-bottom: 16px;
      color: ${props => props.theme.colors.secondary};
      font-family: Poppins, sans-serif;
      font-size: 1rem;
      font-weight: 400;
    }
  }

  svg {
    color: ${props => props.theme.colors.secondary};
    width: 48px;
    height: 48px;
    transition: 0.5s;
    transform: rotate(360deg);

  }
 
  @keyframes bounceIn {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
      opacity: 1;
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }

  .bounce {
    animation: bounceIn 2s infinite 2s;
  }

  @media (max-width: 768px) {
    width: 100vw;
	  
	  h2 {
		  font-size: 3rem;
      color: ${props => props.theme.colors.text};
	  }
	  h3 {
		  font-size: 1.4rem;
	  }
	  p {
		  width: 80vw;
      font-size: 0.8rem;
      text-align: justify;
	  }
    button {
      margin-top: 10vh;
    }
  }
`

export const AboutCompany = styled.section`
  display: flex;
  width: 100vw;
  padding: 12vh 8vw;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  picture{
    display: flex;
    flex: 1;
      
    img {
        width: 80%;
    }
  } 

  div {
    width: 50vw;
  }

  div p {
    color: ${props => props.theme.colors.secondary};
    font-family: 'Noto Serif', serif;
    font-size: 3rem;
    font-weight: 800;
  }

  div span {
    word-wrap: anywhere;
    font-size: 1rem;
  }

  div a {
    text-decoration: none;
  }

  div a p {
    font: 800 24px 'Noto Serif', serif;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    justify-content: center;
    align-items: center;

    picture{
      display: flex;
      flex: 1;
      
      img {
        width: 100%;
      }
    } 
    
    div {
      padding: 32px;
      width: 100vw;
    }
	  
    div p {
      font-size: 2rem;
      text-align: center;
    }

    div span {
      width: 100vw;
      color: ${props => props.theme.colors.text};
      font-family: Poppins, sans-serif;
      font-size: 0.8rem;
      font-weight: 400;
    }
  
  }
`

export const OurOffice = styled.section`
  display: flex;
  width: 100vw;
  background: rgba(255, 255, 255, 0.1);
  padding: 12vh 8vw;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

   picture{
    display: flex;
    flex: 1;
      
    img {
        width: 90%;
    }
  } 

  div {
    width: 50vw;
    padding-bottom: 20px;
    overflow-y: hidden;
  }

  div p {
    color: ${props => props.theme.colors.secondary};
    font: 800 48px 'Noto Serif', serif;
  }

  div span {
    word-wrap: anywhere;
    font-size: 18px;
  }

  div a {
    text-decoration: none;
    padding: 12px;
    font-family: 'Noto Serif', serif;
    font-weight: 800;
    font-size: 1.4rem;
    color: ${props => props.theme.colors.secondary};
  }

  div a:hover {
    background-color: rgba(0,0,0,0.1);
    border-radius: 99px;
  }

  div a p {
    font: 800 24px 'Noto Serif', serif;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    justify-content: center;
    align-items: center;

    picture{
      display: flex;
      flex: 1;
      
      img {
        width: 100%;
      }
    } 
    
    div {
      padding: 32px;
      width: 100vw;
    }
	  
    div p {
      font-size: 2rem;
      text-align: center;
    }

    div span {
      width: 100vw;
      color: ${props => props.theme.colors.text};
      font-family: Poppins, sans-serif;
      font-size: 0.8rem;
      font-weight: 400;
      text-align: justify;
    }
  
  }
`

export const ServicesHeader = styled.section`
	background: url("./assets/images/services_photo.png");
	background-size: cover;
	background-repeat: no-repeat;
	width: 100vw;
	height: 370px;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	
	div {
		width: 15vw;
	}
	
	h4 {
		width: 100vw;
    text-align: center;
		font: 800 40px 'Noto Serif', serif;
		color: ${props => props.theme.colors.secondary};
		border-right: 3px solid ${props => props.theme.colors.primary};
	}
	
	p {
		font: 400 24px 'Noto Serif', serif;
		color: ${props => props.theme.colors.secondary};
	}
	
	span {
		font: 400 14px Poppins, sans-serif;
		color: ${props => props.theme.colors.text};
	}

  @media (max-width: 768px) {

    height: 270px;
    display: flex;
    flex-direction: column;

    h4 {
      width: 100vw;
      text-align: center;
      font-family: 'Noto Serif', serif;
      font-size: 2rem;
      font-weight: 800;
      color: ${props => props.theme.colors.secondary};
      border-right: 3px solid ${props => props.theme.colors.primary};
    }
  }

`

export const ServicesCards = styled.section`
  margin-top: -60px;
  display: grid;
  width: 90%;
  margin-left: 5%;
      
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 2vw;
  row-gap: 1vh;
  margin-bottom: 90px;

  
  div {
    display: flex;
    flex-direction: column;
    height: 260px;
    padding: 8px 16px;
    justify-content: center;
  
    background: #D9D9D9;
  }
  
  div p {
    font: 400 20px Poppins, sans-serif;
    color: ${props => props.theme.colors.dark};
    text-align: left;  
  }
  
  div span{
    padding: 16px 0;
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    color: ${props => props.theme.colors.dark};
    text-align: justify-all;
  }

	div a {
		text-decoration: none;
    cursor: pointer;
    padding: 16px 0;
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    color: ${props => props.theme.colors.dark};
    text-align: left;
	}
  
  div a:hover {
    color: ${props => props.theme.colors.primary};
  }

  @media (max-width: 768px) {
    margin-top: 24px;
    grid-template-columns: 1fr;
		column-gap: 2vw;
		row-gap: 1vh;
  }
`

export const OurTeam = styled.section`
  background: url("./assets/images/our_team.png");
  background-size: cover;
  background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	padding: 24px;
	align-items: center;
  width: 100vw;
	
	h4 {
    font-family: 'Noto Serif', serif;
    font-size: 3rem;
    font-weight: 800;
    color: ${props => props.theme.colors.secondary};
  }
	
	p {
    text-align: center;
		padding: 16px 0;
    font-family: Poppins, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    
	}
	
	.partner-row{
    display: grid;
    width: 90%;
    padding: 5%;

    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 6vw;
    row-gap: 1vh;
		
		
		div {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
		}
		
		div img {
			height: 400px;
		}
		
		div h6 {
      font: 800 24px Poppins, sans-serif;
      color: ${props => props.theme.colors.secondary};
		}
		
		div p {
      padding: 4px 0;
      font: 400 16px Poppins, sans-serif;
		}
		
		div span {
      padding: 4px 0;
      font: 400 12px Poppins, sans-serif;
			text-align: justify;
		}
  }

  @media (max-width: 768px) {
    .partner-row{
      display: grid;
      width: 100%;
      padding: 5vw;

      grid-template-columns: 1fr;
      column-gap: 6vw;
      row-gap: 3vh;
    }
  }
`

export const Posts = styled.section`
	background: rgba(255,255,255,0.1);
  display: flex;
  flex-direction: column;
  padding: 2% 5%;
  align-items: center;
  width: 100vw;
  margin-top: 100px;
	
	.header-area {
		display: flex;
		width: 100%;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		
		h3 {
      font-family: Poppins, sans-serif;
      font-size: 3rem;
      font-weight: 800;
      color: ${props => props.theme.colors.secondary};
		}
		a {
			text-decoration: none;
      padding: 10px;
		}
    a:hover {
      background: rgba(0,0,0,0.1);
      border-radius: 99px;
    }
		p {
      font-family: Poppins, sans-serif;
      font-size: 1rem;
      font-weight: 800;
      color: ${props => props.theme.colors.secondary};
		}
	}
	
	.post-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 6vw;
    row-gap: 1vh;
		margin-top: 48px;
		
		a {
			text-decoration: none;
      padding: 16px;
		}
    a:hover {
      background: rgba(0,0,0,0.1);
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    div img {
      width: 15vw;
    }

    div h6 {
      font-family: Poppins, sans-serif;
      font-size: 1rem;
      font-weight: 800;
      color: ${props => props.theme.colors.secondary};
    }

    div p {
      padding: 4px 0;
      font-family: Poppins, sans-serif;
      font-size: 0.8rem;
      font-weight: 300;
      color: ${props => props.theme.colors.text};
    }
	}

  @media (max-width: 768px) {
    /* padding: 10%; */
    .header-area {    
      h3 {
        font-family: Poppins, sans-serif;
        font-size: 1.6rem;
        font-weight: 800;
        color: ${props => props.theme.colors.secondary};
      }
      
      p {
        font-family: Poppins, sans-serif;
        font-size: 0.8rem;
        font-weight: 800;
        color: ${props => props.theme.colors.text};
      }
   }
   .post-row {
    grid-template-columns: 1fr 1fr;
    column-gap: 2vw;
    margin-top: 2vh;
    
    div img {
      width: 38vw;
    }
    
    div h6 {
      font-family: Poppins, sans-serif;
      font-size: 0.7rem;
      font-weight: 800;
      color: ${props => props.theme.colors.secondary};
    }

    div p {
      padding: 4px 0;
      font-family: Poppins, sans-serif;
      font-size: 0.5rem;
      font-weight: 400;
      color: ${props => props.theme.colors.text};
    }
	}
  }
`

export const ProductsHome = styled.section`
  display: flex;
  flex: 1;
  min-height: 300px;
  
  background-image: url("./assets/images/products-background.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  margin-top: 100px;
	
	div {
    display: flex;
    background: ${props => props.theme.colors.secondary};
    width: 100vw;
    flex-direction: row;
    justify-content: center;
    align-items: center;
	}
	
	.background-image-product-area {
		opacity: 0.1;
		flex: 1;
		position: absolute;
		width: 100vw;
	}
	
	button {
		outline: 0;
		background: transparent;
		border: none;
		padding: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

  button:hover {    
    background: rgba(0,0,0,0.1);
    border-radius: 99px;
  }
	
	.product-area {
		display: flex;
    width: 80vw;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
		padding: 24px;
		
		.product-text {
			width: 40vw;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			
			p {
        font: 400 16px Poppins, sans-serif;
        color: ${props => props.theme.colors.primary};
			}
   
			h6 {
        font: 800 24px Poppins, sans-serif;
        color: ${props => props.theme.colors.primary};
        margin-top: 24px;
      }

      button {
        margin-top: 24px;
        background-color: ${props => props.theme.colors.primary};
        border-radius: 16px;
        padding: 8px 16px;
        color: ${props => props.theme.colors.secondary};
        font-family: Poppins, sans-serif;
        font-size: 1rem;
        font-weight: 400;
      }
			
		}
	}
	
	.product-photo-div {
	  z-index: 10;
		
	}
	
	.product-photo {
		width: 30vw;
    z-index: 10;
	}
  
  @media (max-width: 768px) {
    button {
		  padding: 8px;
	  }
    .product-area {
      display: flex;
      width: 100vw;
      padding: 32px 8px;
      flex-direction: column;

      .product-text {
        width: 100%;
        margin-top: 16px;
        p {
          font-family: Poppins, sans-serif;
          font-size: 0.6rem;
          font-weight: 400;
          color: ${props => props.theme.colors.primary};
        }
    
        h6 {
          font-family: Poppins, sans-serif;
          font-size: 1.6rem;
          font-weight: 800;
          color: ${props => props.theme.colors.primary};
          margin-top: 8px;
        }	
        button {
          align-self: center;
        }
		  }
    }
    
    .product-photo {
      width: 100%;
      z-index: 10;
	  }
  }
`

export const ContactArea = styled.section`
	width: 80vw;
	margin: 100px auto 0;
	display: flex;
	flex-direction: row;
	background: ${props => props.theme.colors.secondary};
	
	iframe {
		flex: 1;
	}
	
	.contact-form {
		display: flex;
		flex: 1;
		flex-direction: column;
		padding: 24px 60px;
	}
	
	h2 {
    font: 800 40px Poppins, sans-serif;
    color: ${props => props.theme.colors.primary};
	}
	
	form label {
    font: 400 14px Poppins, sans-serif;
    color: ${props => props.theme.colors.primary};
	}
	
	form input, textarea {
		background: #D9D9D95E;
		width: 60vw;
		height: 40px;
		color: ${props => props.theme.colors.primary};
		outline: 0;
		border: 0;
    padding: 8;
	}
	
	form textarea {
		height: 80px;
	}
	
	form button {
    width: 10vw;
    height: 40px;
		background: ${props => props.theme.colors.dark};
		
		outline: 0;
		border: 0;
		
    font: 800 16px Poppins, sans-serif;
		color: ${props => props.theme.colors.secondary};
		
    margin-top: 24px;
		margin-right: 16px;
	}

  @media (max-width: 768px) {
    flex-direction: column;
    
    iframe {
		  min-height: 300px;
	  }

    .contact-form {
      display: flex;
      flex: 1;
      flex-direction: column;
      padding: 16px;
    }
    
    h2 {
      font-family: Poppins, sans-serif;
      font-size: 1.4rem;
      font-weight: 800;
    }
    
    form label {
      font-family: Poppins, sans-serif;
      font-size: 0.8rem;
      font-weight: 400;
    }

    form input, textarea {
		background: #D9D9D95E;
		width: 100vw;
		height: 40px;
		color: ${props => props.theme.colors.primary};
		outline: 0;
		border: 0;
	}

    form button {
      width: 30vw;
      height: 40px;
      background: ${props => props.theme.colors.dark};
      
      outline: 0;
      border: 0;
      
      font-family: Poppins, sans-serif;
      font-size: 0.8rem;
      font-weight: 400;
      color: ${props => props.theme.colors.secondary};
      margin-top: 24px;
    }
  }
`

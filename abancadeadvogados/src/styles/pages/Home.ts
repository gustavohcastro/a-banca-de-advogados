import styled from 'styled-components';

interface PropsOpen {
	open: boolean;
}

export const BackgroundImage = styled.div`
  position: relative;
  width: 100vw;
  height: 90vh;
  background-image: url("./assets/images/background_image.png");
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: -16px;
  padding-top: 16px;
`

export const Header = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  padding: 24px 40px;
  
  .main-menu{
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  picture .logo {
    width: 200px;
  }
	
  a {
    text-decoration: none;
    cursor: pointer;
  }

  a p {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    cursor: pointer;
  }

  a p:hover {
    color: ${props => props.theme.colors.secondary};
    text-decoration: none;
    cursor: pointer;
    font: 400 14px Poppins, sans-serif;;
  }
`

export const StyledBurger = styled.button<PropsOpen>`
	outline: 0;
	padding: 24px;
	background: transparent;
	border: 0;
  position: fixed;
  right: 16px;
  display: none;
  z-index: 99999;
	
  svg {
	  width: 2rem;
    height: 2rem;
	  z-index: 10;
  }
	
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    position: absolute;
  }
`;


export const Nav = styled.nav`
    ul {
      display: flex;

      @media (min-width: 767px){
        align-items:flex-end;
      }

      li{
        list-style: none;
        margin-left: 0px;
        
        a {
          color: var(--secundary);
          font-family: Poppins, sans-serif;
          font-size: 0.875rem;
          letter-spacing: 2px;
          text-decoration: none;
          cursor: pointer;

        }
    }
  }
`

export const Ul = styled.ul<PropsOpen>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
	
  li {
    padding: 8px 10px;
		
    a{
      font: 400 14px Poppins, sans-serif;
    }
  }
  @media (min-width: 769px) {
    .hidden-desktop {
      display: none;
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${props => props.theme.colors.primary};
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(150%)'};
    top: 0;
    right: 0;
	  padding-right: 24px;
    height: 100vh;
    width: 70vw;
	  align-items: flex-end;
    padding-top: 5.5rem;
    transition: transform 0.5s ease-in-out;
    li {
      color: #fff;
      padding: 5px 10px;
    }
    .hidden-mobile {
      display: none;
    }
    li div a {
      font-size: 0.675rem;
      
    }
    .dropdown-content {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.0);
    }
   
  }

  div {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
`;

export const BannerArea = styled.div`
  padding: 36px;
  width: 50vw;
	
  h2 {
    color: ${props => props.theme.colors.secondary};
    font-family: Abhaya Libre, sans-serif;
    font-size: 7rem;
	  
  }

  h3 {
    font-size: 3rem;
  }
	
  p {
    width: 40vw;
  }

  @media (max-width: 768px) {
    width: 100vw;
	  
	  h2 {
		  font-size: 4rem;
      color: ${props => props.theme.colors.secondary};
	  }
	  h3 {
		  font-size: 2rem;
	  }
	  p {
		  width: 80vw;
	  }
  }
`

export const AboutCompany = styled.section`
  display: flex;
  width: 100vw;
  padding: 50px 8vw;
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
    font-family: Abhaya Libre, sans-serif;
    font-size: 3rem;
    font-weight: 800;
  }

  div span {
    word-wrap: anywhere;
    font-size: 18px;
  }

  div a {
    text-decoration: none;
  }

  div a p {
    font: 800 24px Abhaya Libre, sans-serif;
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

export const OurOffice = styled.section`
  display: flex;
  width: 100vw;
  background: rgba(255, 255, 255, 0.1);
  padding: 50px 8vw;
  flex-direction: row;
  justify-content: space-between;
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
    font: 800 48px Abhaya Libre, sans-serif;
  }

  div span {
    word-wrap: anywhere;
    font-size: 18px;
  }

  div a {
    text-decoration: none;
  }

  div a p {
    font: 800 24px Abhaya Libre, sans-serif;
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
		width: 10vw;
	}
	
	h4 {
		width: 20vw;
		font: 800 40px Abhaya Libre, sans-serif;
		color: ${props => props.theme.colors.secondary};
		border-right: 3px solid ${props => props.theme.colors.primary};
	}
	
	p {
		font: 400 24px Abhaya Libre, sans-serif;
		color: ${props => props.theme.colors.secondary};
	}
	
	span {
		font: 400 14px Poppins, sans-serif;
		color: ${props => props.theme.colors.text};
	}

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

      div {
        width: 100vw;
        padding: 0 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    
      h4 {
        width: 100vw;
        text-align: center;
        font-family: Abhaya Libre, sans-serif;
        font-size: 2rem;
        font-weight: 800;
        color: ${props => props.theme.colors.secondary};
        border-right: 3px solid ${props => props.theme.colors.primary};
      }

      p {
        font-family: Abhaya Libre, sans-serif;
        font-size: 1.5rem;
        font-weight: 400;
        color: ${props => props.theme.colors.secondary};
      }
      
      span {
        font-family: Poppins, sans-serif;
        font-size: 0.8rem;
        font-weight: 400;
        color: ${props => props.theme.colors.text};
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
      height: 250px;
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
			margin: 24px 0;
      font: 400 12px Poppins, sans-serif;
      color: ${props => props.theme.colors.dark};
			text-align: justify-all;
    }
	
	div a {
		text-decoration: none;
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
    font-family: Abhaya Libre, sans-serif;
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
      width: 90%;
      padding: 5%;

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
  padding: 2% 10%;
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
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 6vw;
    row-gap: 1vh;
		margin-top: 48px;
		
		a {
			text-decoration: none;
		}

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    div img {
      width: 28vw;
    }

    div h6 {
      font-family: Poppins, sans-serif;
      font-size: 1.6rem;
      font-weight: 800;
      color: ${props => props.theme.colors.secondary};
    }

    div p {
      padding: 4px 0;
      font-family: Poppins, sans-serif;
      font-size: 1rem;
      font-weight: 300;
      color: ${props => props.theme.colors.text};
    }
	}

  @media (max-width: 768px) {
    .header-area {    
      h3 {
        font-family: Poppins, sans-serif;
        font-size: 2rem;
        font-weight: 800;
        color: ${props => props.theme.colors.secondary};
      }
      
      p {
        font-family: Poppins, sans-serif;
        font-size: 0.6rem;
        font-weight: 800;
        color: ${props => props.theme.colors.text};
      }
   }
   .post-row {
    column-gap: 2vw;
    margin-top: 2vh;
    
    div img {
      width: 28vw;
    }
    
    div h6 {
      font-family: Poppins, sans-serif;
      font-size: 0.6rem;
      font-weight: 800;
      color: ${props => props.theme.colors.secondary};
    }

    div p {
      padding: 4px 0;
      font-family: Poppins, sans-serif;
      font-size: 0.2rem;
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

export const Footer = styled.footer`
	width: 100vw;
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	
	.footer-logo-area {
		display: flex;
		flex: 1;
    width: 100%;
    background: rgba(255,255,255,0.1);
		align-items: center;
		justify-content: center;
		padding: 40px;
		
	}
	
	.logo-footer {
		width: 30vw;
	}
	
	.footer-info {
    display: flex;
		flex: 1;
		align-items: center;
		justify-content: center;
		padding: 16px;
	}

  @media (max-width: 768px) {
    .footer-logo-area {
		  padding: 16px;
	  }
    .logo-footer {
		  width: 60vw;
	  }
    .footer-info {
      padding: 8px;
      font-family: Poppins, sans-serif;
      font-size: 0.3rem;
      font-weight: 400;
    }
  }

`

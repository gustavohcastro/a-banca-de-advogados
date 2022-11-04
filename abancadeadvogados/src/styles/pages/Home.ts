import styled from 'styled-components'

export const BackgroundImage = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  background-image: url("./assets/images/background_image.png");
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
  margin-top: -16px;
  padding-top: 16px;
`

export const Header = styled.section`
  width: 100vw;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 40px;
  margin-top: 16px;

  picture .logo {
    width: 200px;
  }

  div {
    width: 50vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
export const BannerArea = styled.div`
  padding: 36px;
  width: 50vw;

  h2 {
    color: ${props => props.theme.colors.secondary};
    font: 800 96px Abhaya Libre, sans-serif;
  }

  h3 {
    font-size: 32px;
  }
	p {
		width: 40vw;
	}
`

export const AboutCompany = styled.section`
  display: flex;
  width: 80vw;
  height: 50vh;
  margin-left: 10%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  picture img {
    width: 410px;
  }

  div {
    width: 50%;
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
`

export const OurOffice = styled.section`
  display: flex;
  width: 100vw;
  height: 50vh;
  background: rgba(255, 255, 255, 0.1);
  padding: 0 10%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  picture img {
    width: 410px;
  }

  div {
    width: 50%;
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
    font: 800 40px Abhaya Libre, sans-serif;
    color: ${props => props.theme.colors.secondary};
  }
	
	p {
		padding: 16px 0;
    font: 400 16px Poppins, sans-serif;
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
      font: 800 42px Poppins, sans-serif;
      color: ${props => props.theme.colors.secondary};
		}
		a {
			text-decoration: none;
		}
		p {
      font: 800 16px Poppins, sans-serif;
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
      width: 400px;
      height: 300px;
    }

    div h6 {
      font: 800 24px Poppins, sans-serif;
      color: ${props => props.theme.colors.secondary};
    }

    div p {
      padding: 4px 0;
      font: 400 16px Poppins, sans-serif;
      color: ${props => props.theme.colors.text};
    }
	}

`

export const ProductsHome = styled.section`
	background: ${props => props.theme.colors.secondary};
  width: 100vw;
  margin-top: 100px;
	
	div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
	}
	
	.background-image-product-area {
		opacity: 0.1;
		flex: 1;
		position: absolute;
	}
	
	button {
		outline: 0;
		background: transparent;
		border: none;
		padding: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
    cursor: pointer;
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
		width: 450px;
		height: 300px;
    z-index: 10;
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
`

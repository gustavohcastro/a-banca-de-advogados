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
		column-gap: 6vw;
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
		}
	
	div a {
		text-decoration: none;
	}
`



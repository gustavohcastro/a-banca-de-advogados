import styled from "styled-components";

export const BackgroundImage = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url("./assets/images/bg.png");
  background-position: 15% 55%;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: -16px;
  padding-top: 16px;
`

export const BannerArea = styled.div`
  padding: 36px;
  width: 100vw;
  display: flex;
  flex-direction: column;

	
  h2 {
    color: ${props => props.theme.colors.secondary};
    font-family: 'Noto Serif', serif;
    font-size: 7rem;
	  
  }

  h3 {
    font-size: 3rem;
  }
	
  p {
    width: 50vw;
    font-size: 1rem;
  }

  button {
    margin-top: 5vh;
    outline: 0;
    border: none;
    background-color: transparent;
    align-self: center;

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
		  font-size: 4rem;
      color: ${props => props.theme.colors.secondary};
	  }
	  h3 {
		  font-size: 2rem;
	  }
	  p {
		  width: 80vw;
	  }
    button {
      margin-top: 10vh;
    }
  }
`
export const OurTeam = styled.section`
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
      padding: 4px 0;
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
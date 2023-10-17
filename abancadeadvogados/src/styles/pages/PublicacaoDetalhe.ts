import styled from "styled-components"

interface BackgroundImageProps {
  url?: string;
}
export const BackgroundImage = styled.div<BackgroundImageProps>`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url(${props => props.url ? props.url : "../assets/images/background_image.png" });
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: -16px;
  padding-top: 16px;
`

export const BannerArea = styled.div`
  padding: 36px 10%;
  width: 100vw;
  display: flex;
  flex-direction: column;

	
  h2 {
    color: ${props => props.theme.colors.secondary};
    font-family: 'Noto Serif', serif;
    font-size: 5rem;
	  
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
	  padding: 12px;

	  h2 {
		  font-size: 2rem;
      color: ${props => props.theme.colors.secondary};
      text-align: center;
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

export const PostArea = styled.section`
  width: 100vw;
  padding: 36px 10%;
  background-color: ${props => props.theme.colors.ocre};;

  h1 {
    font-size: 1.6rem;
    color: ${props => props.theme.colors.semiDark};
  }

  h3 {
     font-size: 0.8rem;
     color: ${props => props.theme.colors.semiDark};
  }

  p {
    margin-top: 36px;
    text-align: justify;
    font-size: 1rem;
    color: ${props => props.theme.colors.semiDark};
  }

   @media (max-width: 768px) {
    padding: 16px;
    
    h1 {
      font-size: 1.2rem;
    }
    
    p {
      font-size: .8rem;
    }
   }

`
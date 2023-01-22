import styled from "styled-components"
import React from 'react';
export const BackgroundImage = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url("./assets/images/background_image.png");
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
export const OfficeDescription = styled.section`
    padding: 36px;

    h2 {
        color: ${props => props.theme.colors.secondary};
        font-family: 'Noto Serif', serif;
        font-weight: 800;
        font-size: 3rem;
    }

    p {
        color: ${props => props.theme.colors.text};
        font-family: Poppins, sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 2rem;
        }

        p {
            margin-top: 16px;
            font-size: 0.8rem;
        }
    }
`

export const CarouselArea = styled.section `
    padding: 36px;
    width: 100%;
    margin: auto;

    .row {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
    }

    .image {
        width: 150px;
        height: 200px;
        flex:1;
        margin-right: 16px;
        object-fit: cover;   
    }

    @media (max-width: 768px) {
      .row {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: space-between;
      }

       .image {
        width: 100%;
        height: 100px;
        
        margin-bottom: 16px;
        object-fit: cover;   
      }
    }
`;

export const Picture = styled.picture`
  /* display: block; */
`;
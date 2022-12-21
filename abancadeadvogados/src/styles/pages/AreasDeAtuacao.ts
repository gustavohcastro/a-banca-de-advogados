import styled from "styled-components";
import React from 'react';
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
    font-family: Abhaya Libre, sans-serif;
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

export const ServicesHeader = styled.section`
	width: 100vw;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	margin-top: 50px;
	div {
		width: 15vw;
	}
	
	h4 {
		width: 20vw;
		font-family: Abhaya Libre, sans-serif;
        font-size: 2rem;
        font-weight: 400;       
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
        margin-top: 8px;
		font-family: Poppings, sans-serif;
        font-size: 0.8rem;
        font-weight: 400;  
		color: ${props => props.theme.colors.text};
	}

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

      div {
        width: 100vw;
        padding: 24px;
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
  margin-top: 50px;
  display: grid;
  width: 90%;
  margin-left: 5%;
      
  grid-template-columns: 1fr;
  column-gap: 2vw;
  row-gap: 1vh;
  margin-bottom: 90px;

  
  div {
    display: flex;
    flex-direction: column;
    height: 160px;
    padding: 8px 16px;
    justify-content: center;
  
    background: #D9D9D9;
  }
  
  div p {
    font-family: Poppins, sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: ${props => props.theme.colors.primary};
    text-align: left;  
  }
  
  div span{
    padding: 16px 0;
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 0.8rem;
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
   
    div p {
        font-family: Poppins, sans-serif;
        font-size: 1rem;
        font-weight: 400;
        color: ${props => props.theme.colors.primary};
        text-align: left;  
    }

    div span{
        padding: 16px 0;
        font-family: Poppins, sans-serif;
        font-weight: 400;
        font-size: 0.7rem;
        color: ${props => props.theme.colors.dark};
        text-align: justify-all;
    }
  }
`

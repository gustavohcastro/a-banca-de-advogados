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
    text-shadow: 2px 2px ${props => props.theme.colors.primary};
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
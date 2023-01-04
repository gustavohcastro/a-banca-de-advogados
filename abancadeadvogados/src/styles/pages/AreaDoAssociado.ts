import styled from "styled-components"

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
  align-items: center;
  justify-content: center;

    div {
        background: rgba(0,0,0,0.4);
        width: 60vw;
        max-width: 800px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 48px 24px;
    }

    div picture {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;

        img {
            display: block;
            width: 50%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

    form label {
        font: 400 16px Poppins, sans-serif;
        color: ${props => props.theme.colors.ocre};
    }

    form input {
        background: ${props => props.theme.colors.ocre};
        width: 100%;
        min-width: 300px;
        height: 40px;
        color: ${props => props.theme.colors.primary};
        outline: 0;
        border: 0;
        padding: 0 8px;
    }

    form textarea {
        height: 80px;
    }

    form button {
        width: 100%;
        height: 40px;
        background: ${props => props.theme.colors.secondary};
        
        outline: 0;
        border: 0;
            
        font: 800 16px Poppins, sans-serif;
        color: ${props => props.theme.colors.semiDark};
            
        margin-top: 24px;
        margin-right: 16px;
    }

    @media (max-width: 768px) {

        div {
            width: 100%;
        }

        .login-form {
            width: 100%;
        }
    
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
            width: 100%;
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
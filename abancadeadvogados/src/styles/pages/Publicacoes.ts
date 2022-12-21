import styled from "styled-components"

export const BackgroundImage = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url("./assets/images/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 15% 55%;
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
export const LastPosts = styled.section`
  padding: 36px;

  h2 {
    color: ${props => props.theme.colors.secondary};
    font-family: Poppins, sans-serif;
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`

export const PostGrid = styled.div`
  width: 100%;
  height: 80vh;
  
  display: flex;
  flex-direction: column;
  justify-content: center;

  .post-line {
    display: flex;
    flex: 1;
    flex-direction: row;
    

    .hidden-desktop {
      display: none;
    }

    picture {
      display: flex;
      flex: 1;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    .text-area {
      display: flex;
      width: 50%;
      background: #F5F5F5;
      padding: 24px;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }
    
    span {
      color: ${props => props.theme.colors.semiDark};
      font-family: Poppins, sans-serif;
      font-size: 1rem;
      white-space: now-wrap;
    }
      
    .text-grey {
      color: ${props => props.theme.colors.grey};
    }

    .text-row {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    
    p {
      color: ${props => props.theme.colors.darkGrey};
      font-family: Poppins, sans-serif;
      font-size: 2rem;
      font-weight: 800;
    }

    h6 {
      color: ${props => props.theme.colors.darkGrey};
      font-family: Poppins, sans-serif;
      font-size: 1rem;
      font-weight: 800;
      cursor: pointer;
      padding: 8px;
    }

    a {
      text-decoration: none;
      cursor: pointer;
    }

    h6:hover {
      background-color: rgba(0,0,0,0.1);
      border-radius: 99px;
    }
  }

  @media (max-width: 768px) {
    .post-line {
      width: 100vw;

      display: flex;
      flex-direction: column;
      
      margin-bottom: 16px;

      picture {
        display: flex;
        flex: 1;

        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }

      .text-area {
        display: flex;
        width: 100%;
        background: #F5F5F5;
        padding: 16px 8px;
        flex-direction: column;
        align-items: flex-start;    
      }

      span {
        color: ${props => props.theme.colors.semiDark};
        font-family: Poppins, sans-serif;
        font-size: 0.6rem;
        white-space: now-wrap;
      }
      
      .text-grey {
        color: ${props => props.theme.colors.grey};
      }

      .text-row {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
      }
      
      p {
        color: ${props => props.theme.colors.darkGrey};
        font-family: Poppins, sans-serif;
        font-size: 1rem;
        font-weight: 800;
      }

      h6 {
        color: ${props => props.theme.colors.darkGrey};
        font-family: Poppins, sans-serif;
        font-size: 0.6rem;
        font-weight: 800;
        cursor: pointer;
        padding: 8px 0;
      }
    }
  }

`

export const SearchArea = styled.section`

  width: 100vw;
  padding: 36px;
  background: rgba(255,255,255,0.1);
  
  h4 {
    color: ${props => props.theme.colors.secondary};
    font-family: Poppins, sans-serif;
    font-size: 3rem;
    font-weight: 800;
  }

  div {
    display: flex;
    flex-direction: row;
  }
  
  @media (max-width: 768px) {
    h4 {
      color: ${props => props.theme.colors.secondary};
      font-family: Poppins, sans-serif;
      font-size: 1.4rem;
      font-weight: 800;
    }
  }

`

export const ContainerForm = styled.section`

  
`

export const ContainerModal = styled.div`
        margin: 0 40px;
        p {
            font-size: 1.2rem;
            padding: 10px 0;
        }
        button {
            background:var(--primary);
            border:none;
            color:var(--secundary);
            display: block;
            font-size:1.125rem;
            font-weight:300;
            margin: 0 auto;
          
        
            width:150px;
            height:40px;
        }
`

export const Container = styled.div`  

    .field-wrapper{
        display: flex;
        flex-direction: column;
    }

    label {
        margin-bottom: 8px;

        font-family: Poppins, sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }

    form {
        margin-top: 36px;
        width: 100vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end ;

    }

    input {
        outline: 0px;
        border: 0px;
        border-radius: 0px;
        padding: 8px;
        min-height: 40px;
        min-width: 25vw;  
        
        font-family: Poppins, sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }

    select {
        outline: 0px;
        border: 0px;
        border-radius: 0px;
        padding: 8px;
        min-height: 40px;
        min-width: 25vw;  
        
        font-family: Poppins, sans-serif;
        font-size: 1rem;
        font-weight: 400;
        color: ${props => props.theme.colors.primary};
    }

    button {
        outline: 0px;
        border: 0px;
        border-radius: 0px;
        padding: 8px;
        min-height: 40px;
        min-width: 25vw; 
        
        background: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.dark};

        font-family: Poppins, sans-serif;
        font-size: 1rem;
        font-weight: 800;
    }
  
    @media (max-width: 768px) {
      form {
        margin-top: 16px;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      input, select, button {
        min-width: 80vw;  
      }

      label {
        margin-top: 8px;
      }

      select {
        height: 40px;
      }
      button{
        margin-top: 16px;
      }

    }
  
`

export const PostsResult = styled.section`
  margin-bottom: 50px;

  .page-control{
    width: 97vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 16px 36px;
    

    svg {
      cursor: pointer;
      width: 32px;
      height: 32px;
      padding-left: 8px;
    }
  }

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 3vh;
    justify-items: center;
  }

  .cards .card {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    
    background-color: white;
    max-width : 400px;

    span {
      padding: 8px 12px;
      color: ${props => props.theme.colors.grey};
    }

    h3 {
      padding: 0 12px;
      color: ${props => props.theme.colors.primary};
      font-size: 1.2rem;
    }

    p {
      padding: 8px 12px;
      color: ${props => props.theme.colors.semiDark};
    }
    
    .card-row{
      display: flex;
      flex-direction: row;
      align-items : center;
      justify-content: space-between;
    }

    a {
      text-decoration:none;
      cursor: pointer;
    }

    h6 {
      color: ${props => props.theme.colors.primary};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      font-weight: 500;
      padding: 4px;

      cursor: pointer;

      svg {
        margin: 0 8px;
      }
    }

    h6:hover {
      background-color: rgba(0,0,0,0.1);
      border-radius: 99px;
    }
  }

  @media (max-width: 768px) {
    .page-control{
      width: 100vw;
      padding: 16px;
    }
    .cards {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 3vh;
      justify-items: center;
    }

  }

`
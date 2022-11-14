import styled from "styled-components";
import { devices } from "../../styles/devices";

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
  
`
import styled from "styled-components";

interface PropsOpen {
	open: boolean;
}

export const Header = styled.div`
width: 100vw;
display: flex;
flex-direction: row;
padding: 24px 40px;
z-index: 99999;

.main-menu{
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

picture .logo {
  width: 200px;
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

export const StyledBurger = styled.button<PropsOpen>`
  outline: 0;
  padding: 24px;
  background: transparent;
  border: 0;
  position: fixed;
  right: 16px;
  display: none;
  z-index: 99999;
    
  svg {
      width: 2rem;
    height: 2rem;
      z-index: 10;
  }
    
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    position: absolute;
  }
`;


export const Nav = styled.nav`
  z-index: 99;
  ul {
    display: flex;

    @media (min-width: 767px){
      align-items:flex-end;
    }

    li{
      list-style: none;
      margin-left: 0px;
      
      a {
        color: var(--secundary);
        font-family: Poppins, sans-serif;
        font-size: 0.875rem;
        letter-spacing: 2px;
        text-decoration: none;
        cursor: pointer;

      }
  }
}
`

export const Ul = styled.ul<PropsOpen>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
    
  li {
    padding: 8px 10px;
        
    a{
      font: 400 14px Poppins, sans-serif;
      cursor: pointer;
      padding: 8px 10px;
    }
  }

  li a:hover{
      color: ${props => props.theme.colors.secondary};
      background-color: rgba(0,0,0,0.1);
      border-radius: 99px;
  }


  @media (min-width: 769px) {
    .hidden-desktop {
      display: none;
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${props => props.theme.colors.primary};
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(150%)'};
    top: 0;
    right: 0;
    padding-right: 24px;
    height: 100vh;
    width: 70vw;
    align-items: flex-end;
    padding-top: 5.5rem;
    transition: transform 0.5s ease-in-out;
    li {
      color: #fff;
      /* padding: 5px 10px; */
    }
    .hidden-mobile {
      display: none;
    }
    li div a {
      font-size: 0.675rem;
      
    }
    .dropdown-content {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.0);
    }
  
  }

  div {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
`;
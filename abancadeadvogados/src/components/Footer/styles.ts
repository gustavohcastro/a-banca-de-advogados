import styled from "styled-components";

export const Footer = styled.footer`
	width: 100vw;
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	
	.footer-logo-area {
		display: flex;
		flex: 1;
    width: 100%;
    background: rgba(255,255,255,0.1);
		align-items: center;
		justify-content: center;
		padding: 40px;
		
	}
	
	.logo-footer {
		width: 30vw;
	}
	
	.footer-info {
    display: flex;
		flex: 1;
		align-items: center;
		justify-content: center;
		padding: 16px;
	}

  @media (max-width: 768px) {
    .footer-logo-area {
		  padding: 16px;
	  }
    .logo-footer {
		  width: 60vw;
	  }
    .footer-info {
      padding: 8px;
      font-family: Poppins, sans-serif;
      font-size: 0.3rem;
      font-weight: 400;
    }
  }

`

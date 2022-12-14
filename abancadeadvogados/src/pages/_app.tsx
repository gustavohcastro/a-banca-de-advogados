import {AppProps} from "next/app";
import React from "react";
import GlobalStyle from '../styles/global'
import {ThemeProvider} from "styled-components";
import theme from "../styles/theme";
import { AuthProvider } from "../contexts/AuthContext";
import 'tailwindcss/tailwind.css';
import '../styles/global.css';

const MyApp: React.FC = ({ Component, pageProps }: AppProps) => {

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle/>
      </ThemeProvider>
    </AuthProvider>    
  )
}

export default MyApp


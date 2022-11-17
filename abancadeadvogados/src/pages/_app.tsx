import {AppProps} from "next/app";
import React from "react";
import GlobalStyle from '../styles/global'
import {ThemeProvider} from "styled-components";
import theme from "../styles/theme";
import { SessionProvider } from "next-auth/react"

const MyApp: React.FC = ({ Component, pageProps: {session, ...pageProps} }: AppProps) => {

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle/>
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp


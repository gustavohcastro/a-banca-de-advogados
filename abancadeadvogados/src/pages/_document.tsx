import Document, {DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import React from 'react'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: [initialProps.styles, sheet.getStyleElement()],
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html lang='pt'>
                <Head>
                    <meta charSet="utf-8"/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;800&display=swap" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap" rel="stylesheet"></link>
                    <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

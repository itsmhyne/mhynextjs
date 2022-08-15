import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" type="image/x-icon" href="https://picsum.photos/200" />
                <meta property='custom' content='da' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
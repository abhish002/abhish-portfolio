import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta name='description' content='A portfolio site of Abhish Korah Abraham' />
                    <meta charSet='utf-8' />
                    <meta name='robots' content='noindex, nofollow' />
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
                    <link
                        href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'
                        rel='stylesheet'
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <style global jsx>{`
                    body {
                        font-family: 'Open Sans', sans-serif;
                    }
                `}</style>
            </html>
        )
    }
}


import Document, { Head, Main, NextScript } from 'next/document'

export default class SiteDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link
            rel='stylesheet' 
            href="/_next/static/style.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

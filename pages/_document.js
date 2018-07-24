import Document, { Head, Main, NextScript } from 'next/document'
// import { ServerStyleSheet } from 'styled-components'
// import 'styles/global-styles'

export default class SiteDocument extends Document {
  render () {
    // const sheet = new ServerStyleSheet()
    // const main = sheet.collectStyles(<Main />)
    // const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/sanitize.css/2.0.0/sanitize.min.css' />
          <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/tachyons/4.7.4/tachyons.min.css' />
          <link rel='stylesheet' type='text/css' href="/_next/static/style.css" />
          <link
            // rel="stylesheet"
            // href={`${this.props.__NEXT_DATA__.assetPrefix}/_next/static/style.css`}
            />
          {/* {styleTags} */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
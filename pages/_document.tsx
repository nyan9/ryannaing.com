import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "lib/gtag";

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='theme-color' content='#00b5d8' />

          <link rel='icon' href='/assets/images/favicon.ico' />
          <link rel='apple-touch-icon' href='/assets/images/logo.png' />
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap'
            rel='stylesheet'
          />
          <link rel='manifest' href='/manifest.json' />

          <script async src={`https://www.googletagmanager.com/gtag/js?id=`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

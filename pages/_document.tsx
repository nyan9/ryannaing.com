import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "lib/gtag";

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* <!-- ****** faviconit.com favicons ****** --> */}
          <link rel='shortcut icon' href='/assets/images/favicon.ico' />
          <link
            rel='icon'
            sizes='16x16 32x32 64x64'
            href='/assets/images/favicon.ico'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='196x196'
            href='/assets/images/favicon-192.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='160x160'
            href='/assets/images/favicon-160.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='96x96'
            href='/assets/images/favicon-96.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='64x64'
            href='/assets/images/favicon-64.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/assets/images/favicon-32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/assets/images/favicon-16.png'
          />

          <link rel='apple-touch-icon' href='/assets/images/favicon-57.png' />
          <link
            rel='apple-touch-icon'
            sizes='114x114'
            href='/assets/images/favicon-114.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='72x72'
            href='/assets/images/favicon-72.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='144x144'
            href='/assets/images/favicon-144.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='60x60'
            href='/assets/images/favicon-60.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='120x120'
            href='/assets/images/favicon-120.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='76x76'
            href='/assets/images/favicon-76.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='152x152'
            href='/assets/images/favicon-152.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/assets/images/favicon-180.png'
          />

          <meta name='msapplication-TileColor' content='#FFFFFF' />
          <meta
            name='msapplication-TileImage'
            content='/assets/images/favicon-144.png'
          />
          <meta
            name='msapplication-config'
            content='/assets/images/browserconfig.xml'
          />
          {/* <!-- ****** faviconit.com favicons ****** --> */}

          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap'
            rel='stylesheet'
          />

          <link rel='manifest' href='/manifest.json' />

          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          ></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
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

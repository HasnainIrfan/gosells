import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />
          <link
            rel="shortcut icon"
            href="https://goSellJSLib.b-cdn.net/v2.0.0/imgs/tap-favicon.ico"
          />
          <link
            href="https://goSellJSLib.b-cdn.net/v2.0.0/css/gosell.css"
            rel="stylesheet"
          />
          <script
            type="text/javascript"
            src="https://goSellJSLib.b-cdn.net/v2.0.0/js/gosell.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

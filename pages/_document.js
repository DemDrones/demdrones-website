import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#060a10" />
        <meta name="color-scheme" content="dark" />
        <meta name="applicable-device" content="pc,mobile" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="DemDrones" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Six+Caps&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/favicon.png" sizes="any" type="image/png" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

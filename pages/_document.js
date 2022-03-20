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
        <meta name="referrer" content="no-referrer" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DemDrones" />
        <meta property="og:url" content="https://demdrones.co.uk" />
        <meta property="og:title" content="DemDrones" />
        <meta property="og:description" content="Drone services." />
        <meta property="og:locale" content="en" />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="900" />
        <meta
          property="og:image"
          content="https://demdrones.co.uk/social.png"
        />
        <meta property="twitter:title" content="DemDrones" />
        <meta property="twitter:description" content="Drone services." />
        <meta property="twitter:card" content="summary_large_image" />
        <link href="https://demdrones.co.uk" rel="canonical" />

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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "DemDrones",
            "description": "DemDrones Drone services",
            "publisher": {
              "@type": "ProfilePage",
              "name": "DemDrones"
            }
          }`,
          }}
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import { Footer } from "@components/footer";
import { Hero } from "@components/hero";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Head from "next/head";
import Link from "next/link";
import { ContentfulApi } from "../utils/contentful";
import { richText } from "../utils/rich-text";

export default function Terms(props) {
  const global = props.global;

  return (
    <div className="container">
      <Head>
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

        <title>{global.title}</title>
      </Head>

      <main>
        <div className="dd-section dd-container">
          <h1>
            <Link href="/">
              <a>Demdrones</a>
            </Link>
            //TERMS
          </h1>
          {documentToReactComponents(global.policy.json, richText)}
          {documentToReactComponents(global.terms.json, richText)}
        </div>
      </main>

      <Footer global={global} />
    </div>
  );
}

export async function getStaticProps() {
  const query = `
      {
        global(id: "7v6WFxhvgwzdZeH8OzIojA") {
          title
          description
          instagram
          tiktok
          twitter
          policy {
            json
          }
          terms {
            json
          }
        }
      }
    `;
  const data = await ContentfulApi.getData(query);
  return { props: data.data };
}

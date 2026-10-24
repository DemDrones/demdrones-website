import { Footer } from "@components/footer";
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
        <title>Terms & Privacy | {global.title}</title>

        <meta
          name="description"
          content={`Terms and privacy information for ${global.title}.`}
        />

        <link
          rel="canonical"
          href="https://demdrones.co.uk/terms"
        />
      </Head>

      <main>
        <div className="dd-section dd-container">
          <h1>
            <Link href="/">
              <a>DEMDRONES</a>
            </Link>
            {" // TERMS & PRIVACY"}
          </h1>

          {documentToReactComponents(
            global.policy.json,
            richText
          )}

          {documentToReactComponents(
            global.terms.json,
            richText
          )}
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
        youtube
        facebook
        pinterest

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

  return {
    props: data.data,
  };
}

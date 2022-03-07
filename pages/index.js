import { About } from "@components/about";
import { CardBoxList } from "@components/card-box-list";
import { Hero } from "@components/hero";
import { ImageOrVideo } from "@components/image-or-video";
import { IntroVideo } from "@components/intro-video";
import { StockList } from "@components/stock-list";
import Head from "next/head";
import { ContentfulApi } from "../utils/contentful";

export default function Home(props) {
  const global = props.globalCollection.items[0];
  const about = props.aboutCollection.items[0];
  const serviceSummaries = props.serviceSummaryCollection.items;
  const projects = props.projectCollection.items;
  console.log(projects);
  const stockMedia = props.stockMediaCollection.items;

  return (
    <div className="container">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Six+Caps&display=swap"
          rel="stylesheet"
        />
        <title>{global.title}</title>
      </Head>

      <main>
        <Hero>
          <h1>{global.title}</h1>
        </Hero>

        <div className="dd-section dd-container">
          <h1 style={{ maxWidth: "50ch" }}>
            DemDrones is a studio of licensed drone-pilots, with a focus on
            cinematography
          </h1>
        </div>

        <h2 className="dd-container a11y-visually-hidden">Services</h2>
        <CardBoxList className="dd-container" entries={serviceSummaries} />

        <IntroVideo />

        <About heading={about.bodyHeading} body={about.body} />

        <div className="dd-container dd-section image-same-height">
          <ul className="unstyled-list dd-grid dd-grid--3col">
            {projects.map((entry, index) => (
              <li key={index}>
                <ImageOrVideo asset={entry.thumbnail} />
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="dd-container dd-section theme theme--with-background theme--dark">
          <h2 className="dd-section--inner bottom-only">
            Purchase assets for your next project.
          </h2>
          <StockList entries={stockMedia} />
        </div>

        <div className="dd-container dd-section image-same-height">
          <h2
            style={{
              fontSize: "calc(1.5rem + 2.5vw)",
              lineHeight: "1",
              maxWidth: "20ch",
            }}
          >
            We are always open for collaboration, feel free to get in touch.
          </h2>

          <ul
            className="unstyled-list"
            style={{
              fontSize: "1.5rem",
              lineHeight: "1",
              maxWidth: "20ch",
              display: "grid",
              gap: "2rem",
              marginTop: "4rem",
            }}
          >
            <li>hello@demdrones.co.uk</li>
            <li>+44 123 4567</li>
          </ul>
        </div>
      </main>

      <footer className="dd-container dd-section">
        <span>
          <a href={global.instagram}>IG</a> / <a href={global.tiktok}>TikTok</a>
        </span>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const data = await ContentfulApi.getData();
  return { props: data.data };
}

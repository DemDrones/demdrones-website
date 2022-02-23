import { About } from "@components/about";
import { CardBoxList } from "@components/card-box-list";
import { Hero } from "@components/hero";
import { StockList } from "@components/stock-list";
import Head from "next/head";
import Image from "next/image";
import LazyLoad from "react-lazyload";
import { ContentfulApi } from "../utils/contentful";

export default function Home(props) {
  const global = props.globalCollection.items[0];
  const about = props.aboutCollection.items[0];
  console.log(about);
  const serviceSummaries = props.serviceSummaryCollection.items;
  const projects = props.projectCollection.items;
  const stockMedia = props.stockMediaCollection.items;

  return (
    <div className="container">
      <Head>
        <title>{global.title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
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

        <div className="dd-container dd-section">
          <LazyLoad height={576}>
            <video
              src="/video/pex-c.mp4"
              muted
              loop
              preload="none"
              playsInline={true}
              autoPlay={true}
              width={1024}
              height={576}
            />
          </LazyLoad>
        </div>

        <About heading={about.bodyHeading} body={about.body} />

        <div className="dd-container dd-section">
          <ul className="unstyled-list dd-grid dd-grid--3col">
            {projects.map((entry, index) => (
              <li key={index}>
                <Image
                  src={entry.thumbnail.url}
                  width={entry.thumbnail.width}
                  height={entry.thumbnail.height}
                  alt=""
                  loading="lazy"
                />
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
  // const res = await fetchEntries();
  // console.log(res);
  // const posts = res.items.map((p) => {
  //   return p.fields
  // });
  //
  // console.log(posts);
  //
  // return {
  //   props: {
  //     posts,
  //   },
  // }
}

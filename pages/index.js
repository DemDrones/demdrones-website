import { About } from "@components/about";
import { CardBoxList } from "@components/card-box-list";
import { Footer } from "@components/footer";
import { Hero } from "@components/hero";
import { ImageOrVideo } from "@components/image-or-video";
import { IntroVideo } from "@components/intro-video";
import { StockList } from "@components/stock-list";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Head from "next/head";
import { ContentfulApi } from "../utils/contentful";
import { richText } from "../utils/rich-text";

export default function Home(props) {
  const global = props.global;
  const about = props.about;
  const projects = props.projectCollection.items;
  const stockMedia = props.stockMediaCollection.items;
  const footers = props.footerCollection.items;

  return (
    <div className="container">
      <Head>
        <title>{global.title}</title>
      </Head>

      <main>
        <Hero global={global}>
          <h1>{global.title}</h1>
        </Hero>

        <div className="dd-section dd-container">
          <div style={{ maxWidth: "50ch" }}>
            {documentToReactComponents(about.servicesBlurb.json, richText)}
          </div>
        </div>

        <h2 className="dd-container a11y-visually-hidden">Services</h2>
        <CardBoxList
          className="dd-container"
          entries={about.servicesCollection.items}
        />

        <IntroVideo />

        <About
          heading={about.bodyHeading}
          body={about.body}
          bodyExtra={about.bodyExtra}
          testimonials={about.testimonialsCollection.items}
        />

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

        {footers.map((f, i) => (
          <div className="dd-container dd-section image-same-height" key={i}>
            <h2
              style={{
                fontSize: "calc(1.5rem + 2.5vw)",
                lineHeight: "1",
                maxWidth: "20ch",
              }}
            >
              {f.headline}
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
              <li>{f.email}</li>
              <li>{f.phone}</li>
            </ul>
          </div>
        ))}
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
          shareTitle
          shareDescription
        }
        about(id: "3Ood3dTWFnQzPkBTJOiy3K") {
          servicesBlurb {
            json
          }
          servicesCollection {
            items {
              heading
              body
            }
          }
          bodyHeading
          body {
            json
          }
          bodyExtra {
            json
          }
          testimonialsCollection {
            items {
              quote
              cite
              url
            }
          }
        }
        projectCollection {
          items {
            title
            description
            thumbnail {
              title
              description
              contentType
              url
              width
              height
            }
          }
        }
        stockMediaCollection {
          items {
            title
            url
            preview {
              title
              description
              contentType
              url
              width
              height
            }
          }
        }
        footerCollection {
          items {
            headline
            email
            phone
          }
        }
      }
    `;
  const data = await ContentfulApi.getData(query);
  return { props: data.data };
}

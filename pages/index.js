import * as style from "@components/about/style.module.css";
import { CardBoxList } from "@components/card-box-list";
import { Contact } from "@components/contact";
import { Footer } from "@components/footer";
import { Hero } from "@components/hero";
import { ImageOrVideo } from "@components/image-or-video";
import { IntroVideo } from "@components/intro-video";
import { StockList } from "@components/stock-list";
import { Testimonials } from "@components/testimonial/testimonials";
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
          <div className="t-h1" style={{ maxWidth: "50ch" }}>
            {documentToReactComponents(about.servicesBlurb.json, richText)}
          </div>
        </div>

        <h2 className="dd-container a11y-visually-hidden">Services</h2>
        <CardBoxList
          className="dd-container"
          entries={about.servicesCollection.items}
        />

        <section className={`dd-container dd-section`}>
          <h2>{about.bodyHeading}</h2>
          <div className="dd-grid dd-grid--2col dd-section--inner">
            <div>{documentToReactComponents(about.body.json, richText)}</div>
            <div>
              <IntroVideo />
            </div>
          </div>
        </section>

        <div className="dd-container dd-section image-same-height">
          <ul className="unstyled-list dd-grid dd-grid--3col">
            {projects.map((entry, index) => (
              <li key={index}>
                <ImageOrVideo asset={entry.thumbnail} />
                <h3 style={{ marginTop: "1rem" }}>{entry.title}</h3>
                <p style={{ marginTop: "0rem" }}>{entry.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <section className="dd-container dd-section theme--with-background theme--dark">
          <div className={`dd-section--inner ${style.columns}`}>
            {documentToReactComponents(about.bodyExtra.json, richText)}
          </div>
        </section>

        {stockMedia.length ? (
          <div className="dd-container dd-section theme">
            <h2 className="dd-section--inner bottom-only">
              Purchase assets for your next project.
            </h2>
            <StockList entries={stockMedia} />
          </div>
        ) : null}

        <section className="dd-container dd-section">
          <div className="dd-section--inner">
            <h2 className="a11y-visually-hidden">Testimonials</h2>
            <Testimonials testimonials={about.testimonialsCollection.items} />
          </div>
        </section>

        {footers.map((f, i) => (
          <Contact
            headline={f.headline}
            email={f.email}
            phone={f.phone}
            key={i}
          />
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

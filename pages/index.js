import { CardBoxList } from "@components/card-box-list";
import { Contact } from "@components/contact";
import { Footer } from "@components/footer";
import { Hero } from "@components/hero";
import { ImageOrVideo } from "@components/image-or-video";
import { IntroVideo } from "@components/intro-video";
import { StockList } from "@components/stock-list";
import { Testimonials } from "@components/testimonial/testimonials";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Head from "next/head";
import { ContentfulApi } from "../utils/contentful";
import { richText } from "../utils/rich-text";

function getRichTextOptions(field) {
  const embeddedAssets = field?.links?.assets?.block || [];

  return {
    ...richText,
    renderNode: {
      ...richText.renderNode,

      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const assetId = node?.data?.target?.sys?.id;

        const asset = embeddedAssets.find(
          (item) => item?.sys?.id === assetId
        );

        return asset ? <ImageOrVideo asset={asset} /> : null;
      },
    },
  };
}

export default function Home(props) {
  const { global, about, projects, stock } = props;
  const footers = props.footerCollection.items;

  return (
    <div className="container">
      <Head>
        <title>{global.shareTitle || global.title}</title>

        <meta
          name="description"
          content={
            global.shareDescription ||
            global.description ||
            "DEMDRONES"
          }
        />

        <link
          rel="canonical"
          href="https://demdrones.co.uk"
        />

        <link
          rel="icon"
          href="/favicon.svg"
          type="image/svg+xml"
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DEMDRONES" />
        <meta
          property="og:url"
          content="https://demdrones.co.uk"
        />

        <meta
          property="og:title"
          content={global.shareTitle || global.title}
        />

        <meta
          property="og:description"
          content={
            global.shareDescription ||
            global.description ||
            "DEMDRONES"
          }
        />

        <meta
          property="og:image"
          content="https://demdrones.co.uk/social.png"
        />

        <meta
          property="og:image:width"
          content="1600"
        />

        <meta
          property="og:image:height"
          content="900"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content={global.shareTitle || global.title}
        />

        <meta
          name="twitter:description"
          content={
            global.shareDescription ||
            global.description ||
            "DEMDRONES"
          }
        />

        <meta
          name="twitter:image"
          content="https://demdrones.co.uk/social.png"
        />
      </Head>

      <main>
        <Hero global={global}>
          <h1>{global.title}</h1>
        </Hero>

        {about?.servicesCollection?.items?.length ? (
          <div className="dd-section dd-container">
            <div
              className="t-h1"
              style={{ maxWidth: "50ch" }}
            >
              {documentToReactComponents(
                about.servicesBlurb.json,
                getRichTextOptions(about.servicesBlurb)
              )}
            </div>

            <CardBoxList
              className="dd-section--inner"
              entries={about.servicesCollection.items}
            />
          </div>
        ) : null}

        {about?.body?.json ? (
          <section className="dd-container dd-section">
            <h2>{about.bodyHeading}</h2>

            <div className="dd-grid dd-grid--2col dd-section--inner">
              <div>
                {documentToReactComponents(
                  about.body.json,
                  getRichTextOptions(about.body)
                )}
              </div>

              {about?.video?.url && (
                <IntroVideo url={about.video.url} />
              )}
            </div>
          </section>
        ) : null}

        {projects?.elementsCollection?.items?.length ? (
          <div className="dd-container dd-section image-same-height">
            {projects.heading && (
              <h2 className="dd-section--inner bottom-only">
                {projects.heading}
              </h2>
            )}

            <ul className="unstyled-list dd-grid dd-grid--3col">
              {projects.elementsCollection.items
                .filter(Boolean)
                .map((entry, index) => (
                  <li key={index}>
                    {entry.thumbnail ? (
                      <ImageOrVideo
                        asset={entry.thumbnail}
                      />
                    ) : null}

                    <h3 style={{ marginTop: "1rem" }}>
                      {entry.title}
                    </h3>

                    <p style={{ marginTop: "0rem" }}>
                      {entry.description}
                    </p>
                  </li>
                ))}
            </ul>
          </div>
        ) : null}

        {about.safetyIntroduction?.json ? (
          <section className="dd-container dd-section theme--with-background theme--dark">
            {about.safetyHeading && (
              <h2>{about.safetyHeading}</h2>
            )}

            <div className="dd-grid dd-grid--2col dd-section--inner">
              <div>
                {documentToReactComponents(
                  about.safetyIntroduction.json,
                  getRichTextOptions(
                    about.safetyIntroduction
                  )
                )}
              </div>

              <div>
                {documentToReactComponents(
                  about.safetyContinued.json,
                  getRichTextOptions(
                    about.safetyContinued
                  )
                )}
              </div>
            </div>
          </section>
        ) : null}

        {stock?.elementsCollection?.items?.length ? (
          <div className="dd-container dd-section theme">
            {stock.heading && (
              <h2 className="dd-section--inner bottom-only">
                {stock.heading}
              </h2>
            )}

            <StockList
              entries={stock.elementsCollection.items}
            />
          </div>
        ) : null}

        {about.testimonialsCollection.items.length ? (
          <section
            className="dd-container dd-section"
            style={{
              borderBlock:
                "1px solid rgba(255, 255, 255, .17)",
            }}
          >
            <div className="dd-section--inner">
              <h2 className="a11y-visually-hidden">
                Testimonials
              </h2>

              <Testimonials
                testimonials={
                  about.testimonialsCollection.items
                }
              />
            </div>
          </section>
        ) : null}

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
        youtube
        facebook
        pinterest
        shareTitle
        shareDescription
      }

      about(id: "3Ood3dTWFnQzPkBTJOiy3K") {
        servicesBlurb {
          json

          links {
            assets {
              block {
                sys {
                  id
                }

                title
                description
                contentType
                url
                width
                height
              }
            }
          }
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

          links {
            assets {
              block {
                sys {
                  id
                }

                title
                description
                contentType
                url
                width
                height
              }
            }
          }
        }

        video {
          width
          height
          url
        }

        testimonialsCollection {
          items {
            quote
            cite
            url
          }
        }

        safetyHeading

        safetyIntroduction {
          json

          links {
            assets {
              block {
                sys {
                  id
                }

                title
                description
                contentType
                url
                width
                height
              }
            }
          }
        }

        safetyContinued {
          json

          links {
            assets {
              block {
                sys {
                  id
                }

                title
                description
                contentType
                url
                width
                height
              }
            }
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

      projects: bundle(
        id: "2rvnKH9qLi0UNsxP0jJRY6"
      ) {
        heading

        elementsCollection {
          items {
            __typename

            ... on Project {
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
        }
      }

      stock: bundle(
        id: "1YltWWDlbfU2QbUxz6YdC6"
      ) {
        heading

        elementsCollection {
          items {
            __typename

            ... on StockMedia {
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
        }
      }
    }
  `;

  const data = await ContentfulApi.getData(query);

  return {
    props: data.data,
  };
}

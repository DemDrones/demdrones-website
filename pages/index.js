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

function getYouTubeEmbedUrl(url) {
  if (!url) return null;

  try {
    const parsedUrl = new URL(url);
    let videoId = null;

    if (parsedUrl.hostname.includes("youtu.be")) {
      videoId = parsedUrl.pathname.slice(1);
    } else if (parsedUrl.pathname.startsWith("/shorts/")) {
      videoId = parsedUrl.pathname.split("/")[2];
    } else if (parsedUrl.pathname.startsWith("/embed/")) {
      videoId = parsedUrl.pathname.split("/")[2];
    } else {
      videoId = parsedUrl.searchParams.get("v");
    }

    return videoId
      ? `https://www.youtube-nocookie.com/embed/${videoId}`
      : null;
  } catch {
    return null;
  }
}

export default function Home(props) {
  const { global, about, projects, stock, events } = props;
  const footers = props.footerCollection.items;

  const youtubeEmbedUrl = getYouTubeEmbedUrl(
    about?.youtubeUrl
  );

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
  href="/demdrones-tab-icon.svg"
  type="image/svg+xml"
  sizes="any"
/>

<link
  rel="shortcut icon"
  href="/demdrones-tab-icon.svg"
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

        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="900" />

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

             <div
  style={{
    display: "grid",
    gap: "1rem",
  }}
>
  {about?.video?.url ? (
    <IntroVideo url={about.video.url} />
  ) : null}

  {youtubeEmbedUrl ? (
    <iframe
      src={youtubeEmbedUrl}
      title="DEMDRONES YouTube video"
      width="640"
      height="360"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{
        width: "100%",
        aspectRatio: "16 / 9",
        height: "auto",
        border: 0,
      }}
    />
  ) : null}
</div>
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
{events?.items?.length ? (
  <section className="dd-container dd-section">
    <div className="dd-section--inner bottom-only">
      <p
        style={{
          textTransform: "uppercase",
          letterSpacing: ".12em",
          marginBottom: ".75rem",
        }}
      >
        DEMDRONES EVENTS
      </p>

      <h2>Experiences & Events</h2>
    </div>

    <ul className="unstyled-list dd-grid dd-grid--3col">
      {events.items.filter(Boolean).map((event) => {
        const ticketOptions =
          event.ticketOptionsCollection?.items?.filter(
            (ticket) => ticket && ticket.available !== false
          ) || [];

        const bookingLinks =
          event.bookingLinksCollection?.items?.filter(
            (link) => link && link.available !== false
          ) || [];

        return (
          <li key={event.sys.id}>
            {event.image ? (
              <div className="image-same-height">
                <ImageOrVideo asset={event.image} />
              </div>
            ) : null}

            <div style={{ marginTop: "1.25rem" }}>
              {event.eventType ? (
                <p
                  style={{
                    textTransform: "uppercase",
                    letterSpacing: ".1em",
                    fontSize: ".85rem",
                    marginBottom: ".5rem",
                  }}
                >
                  {event.eventType}
                </p>
              ) : null}

              <h3>{event.title}</h3>

              {event.startDate ? (
                <p>
                  {new Date(event.startDate).toLocaleDateString(
                    "en-GB",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      timeZone: "Europe/London",
                    }
                  )}
                </p>
              ) : null}

              {event.location ? (
                <p>{event.location}</p>
              ) : null}

              {event.description ? (
                <p style={{ marginTop: "1rem" }}>
                  {event.description}
                </p>
              ) : null}

              {ticketOptions.length ? (
                <div style={{ marginTop: "1.5rem" }}>
                  <p
                    style={{
                      textTransform: "uppercase",
                      letterSpacing: ".08em",
                      fontWeight: "700",
                    }}
                  >
                    Ticket options
                  </p>

                  {ticketOptions.map((ticket) => (
                    <div
                      key={ticket.sys.id}
                      style={{
                        marginTop: "1rem",
                        paddingTop: "1rem",
                        borderTop:
                          "1px solid rgba(255,255,255,.17)",
                      }}
                    >
                      <strong>{ticket.name}</strong>

                      {ticket.price != null ? (
                        <p
                          style={{
                            fontSize: "1.25rem",
                            fontWeight: "700",
                            margin: ".35rem 0",
                          }}
                        >
                          £{Number(ticket.price).toFixed(2)}
                        </p>
                      ) : null}

                      {ticket.description ? (
                        <p>{ticket.description}</p>
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : null}

              {event.status ? (
                <p
                  style={{
                    textTransform: "uppercase",
                    letterSpacing: ".08em",
                    marginTop: "1.5rem",
                  }}
                >
                  {event.status}
                </p>
              ) : null}

              {event.status === "Tickets Live" &&
              bookingLinks.length ? (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: ".75rem",
                    marginTop: "1rem",
                  }}
                >
                  {bookingLinks.map((link) => (
                    <a
                      key={link.sys.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        padding: "1rem 1.4rem",
                        background: "white",
                        color: "black",
                        textDecoration: "none",
                        fontWeight: "700",
                      }}
                    >
                      BUY ON {link.name.toUpperCase()} →
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </li>
        );
      })}
    </ul>
  </section>
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
<section
  className="dd-container dd-section"
  style={{
    borderTop: "1px solid rgba(255,255,255,.17)",
    borderBottom: "1px solid rgba(255,255,255,.17)",
  }}
>
  <div style={{ maxWidth: "900px" }}>
    <p
      style={{
        textTransform: "uppercase",
        letterSpacing: ".12em",
        marginBottom: "1rem",
      }}
    >
      DEMDRONES
    </p>

    <h2 style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", margin: 0 }}>
      Stay in the loop.
    </h2>

    <p
      style={{
        fontSize: "1.25rem",
        maxWidth: "55ch",
        marginTop: "1.5rem",
        marginBottom: "3rem",
      }}
    >
      Get early access to DDF experiences, ticket releases,
      merchandise drops, events, and DEMDRONES opportunities.
    </p>

    <form
      name="demdrones-mailing-list"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      style={{
        display: "grid",
        gap: "1.25rem",
        maxWidth: "700px",
      }}
    >
      <input
        type="hidden"
        name="form-name"
        value="demdrones-mailing-list"
      />

      <input
        type="hidden"
        name="source"
        value="DEMDRONES homepage"
      />

      <p hidden>
        <label>
          Do not fill this out:
          <input name="bot-field" />
        </label>
      </p>

      <label>
        Name
        <input
          type="text"
          name="name"
          required
          style={{
            display: "block",
            width: "100%",
            marginTop: ".5rem",
            padding: "1rem",
            background: "transparent",
            color: "white",
            border: "1px solid rgba(255,255,255,.5)",
            fontSize: "1rem",
          }}
        />
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          required
          style={{
            display: "block",
            width: "100%",
            marginTop: ".5rem",
            padding: "1rem",
            background: "transparent",
            color: "white",
            border: "1px solid rgba(255,255,255,.5)",
            fontSize: "1rem",
          }}
        />
      </label>

      <label>
        Phone number
        <input
          type="tel"
          name="phone"
          style={{
            display: "block",
            width: "100%",
            marginTop: ".5rem",
            padding: "1rem",
            background: "transparent",
            color: "white",
            border: "1px solid rgba(255,255,255,.5)",
            fontSize: "1rem",
          }}
        />
      </label>

      <label style={{ display: "flex", gap: ".75rem", alignItems: "flex-start" }}>
        <input
          type="checkbox"
          name="email-consent"
          value="yes"
          required
          style={{ marginTop: ".3rem" }}
        />
        <span>
          I want to receive DEMDRONES news, ticket releases,
          experiences, merchandise drops, and opportunities by email.
        </span>
      </label>

      <label style={{ display: "flex", gap: ".75rem", alignItems: "flex-start" }}>
        <input
          type="checkbox"
          name="sms-consent"
          value="yes"
          style={{ marginTop: ".3rem" }}
        />
        <span>
          I would also like DEMDRONES updates by text message.
        </span>
      </label>

      <button
        type="submit"
        style={{
          padding: "1.1rem 1.5rem",
          background: "white",
          color: "black",
          border: "1px solid white",
          fontSize: "1rem",
          fontWeight: "700",
          cursor: "pointer",
          width: "fit-content",
        }}
      >
        JOIN DEMDRONES →
      </button>
    </form>
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
        youtubeUrl

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
events: eventCollection(
  order: sortOrder_ASC
  limit: 12
) {
  items {
    sys {
      id
    }

    title
    eventType
    description
    startDate
    endDate
    location
    status
    waitlistEnabled
    saveTheDateEnabled
    featured
    sortOrder
    youtubeUrl

    image {
      title
      description
      contentType
      url
      width
      height
    }

    video {
      title
      description
      contentType
      url
      width
      height
    }

    galleryCollection {
      items {
        title
        description
        contentType
        url
        width
        height
      }
    }

    ticketOptionsCollection(
      order: sortOrder_ASC
      limit: 10
    ) {
      items {
        sys {
          id
        }
        name
        price
        description
        available
        sortOrder
      }
    }

    bookingLinksCollection(
      order: sortOrder_ASC
      limit: 10
    ) {
      items {
        sys {
          id
        }
        name
        url
        available
        sortOrder
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

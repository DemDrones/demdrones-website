const defaultOptions = {
  preview: false,
};

export class ContentfulApi {
  static async getData() {
    const query = `
      {
        globalCollection {
          items {
            title
            instagram
            tiktok
            description
            shareDescription
            appName
            socialImage {
              url
            }
          }
        }
        aboutCollection {
          items {
            heading
            body {
              json
            }
          }
        }
        stockMediaCollection {
          items {
            title
            url
            preview {
              width
              height
              url
              title
            }
          }
        }
        serviceSummaryCollection {
          items {
            heading
            body
          }
        }
        projectCollection {
          items {
            title
            description
            thumbnail {
              title
              url
              width
              height
            }
          }
        }
      }
    `;

    const response = await this.callContentful(query);
    return response;
  }

  /**
   * Call the Contentful GraphQL API using fetch.
   *
   * param: query (string)
   */
  static async callContentful(query, variables = {}, options = defaultOptions) {
    const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`;
    const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
    const fetchOptions = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    };

    try {
      const data = await fetch(fetchUrl, fetchOptions).then((response) =>
          response.json(),
      );
      return data;
    } catch (error) {
      throw new Error("Could not fetch data from Contentful!");
    }
  }
}

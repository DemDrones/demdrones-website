import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from 'next/head';
import { ContentfulApi } from '../utils/contentful';
import { richText } from '../utils/rich-text';

export default function Home(props) {
  const global = props.globalCollection.items[0];
  const about = props.aboutCollection.items[0];
  const serviceSummaries = props.serviceSummaryCollection.items;
  const projects = props.projectCollection.items;
  const stockMedia = props.stockMediaCollection.items;

  return (
      <div className="container">
        <Head>
          <title>{global.title}</title>
        </Head>

        <main>
          <h1>{global.title}</h1>

          <h2>Services</h2>
          <ul className="unstyled-list col3">
            {serviceSummaries.map((entry, index) => (
                <li key={index}>
                  <h3>{entry.heading}</h3>
                  <p>{entry.body}</p>
                </li>
            ))}
          </ul>


          <h2>{about.heading}</h2>
          {documentToReactComponents(about.body.json, richText)}

          <ul className="unstyled-list col3">
            {projects.map((entry, index) => (
                <li key={index}>
                  <img src={entry.thumbnail.url} width={entry.thumbnail.width} height={entry.thumbnail.height} alt=""/>
                  <h3>{entry.title}</h3>
                  <p>{entry.description}</p>
                </li>
            ))}
          </ul>

          <ul className="unstyled-list col3">
            {stockMedia.map((entry, index) => (
                <li key={index}>
                  <a href={entry.url} rel="noreferrer" target="_blank">
                    <img
                        src={entry.preview.url}
                        width={entry.preview.width}
                        height={entry.preview.height}
                        alt=""
                    />
                  </a>
                </li>
            ))}
          </ul>

        </main>
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

import { CardBox } from "@components/card-box";
import { ImageOrVideo } from "@components/image-or-video";
import * as styles from "./style.module.css";

export function StockList({ entries }) {
  return (
    <section className={styles.stocklist}>
      <ul className="unstyled-list dd-grid dd-grid--3col image-same-height">
        {entries.map((entry, index) => {
          const image = entry.preview || entry.thumbnail;
          return (
            <li key={index}>
              <CardBox minimal>
                <a href={entry.url} rel="noreferrer" target="_blank">
                  <ImageOrVideo asset={image} />
                  {entry.title && <h3>{entry.title}</h3>}
                </a>
              </CardBox>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

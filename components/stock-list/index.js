import { CardBox } from "@components/card-box";
import Image from "next/image";
import * as styles from "./style.module.css";

export function StockList({ entries }) {
  return (
    <section className={styles.stocklist}>
      <ul className="unstyled-list dd-grid dd-grid--3col">
        {entries.map((entry, index) => (
          <li key={index}>
            <CardBox minimal>
              <a href={entry.url} rel="noreferrer" target="_blank">
                <Image
                  src={entry.preview.url}
                  width={entry.preview.width}
                  height={entry.preview.height}
                  title={entry.title}
                  loading="lazy"
                />
                {entry.title && <h3>{entry.title}</h3>}
              </a>
            </CardBox>
          </li>
        ))}
      </ul>
    </section>
  );
}

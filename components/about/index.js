import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { richText } from "../../utils/rich-text";
import * as styles from "./style.module.css";

export function About({ heading, body }) {
  return (
    <section className={`dd-container dd-section`}>
      <h2>{heading}</h2>
      <div className="dd-grid dd-grid--2col dd-section--inner">
        <div className={styles.layoutcell}>
          {documentToReactComponents(body.json, richText)}
        </div>
        <div className={styles.layoutcell}>Logos</div>
      </div>
    </section>
  );
}

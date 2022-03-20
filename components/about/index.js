import { Testimonials } from "@components/testimonial/testimonials";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { richText } from "../../utils/rich-text";
import * as style from "./style.module.css";

export function About({ heading, body, bodyExtra, testimonials }) {
  return (
    <>
      <section className={`dd-container dd-section`}>
        <h2>{heading}</h2>
        <div className="dd-grid dd-grid--2col dd-section--inner">
          <div>{documentToReactComponents(body.json, richText)}</div>
          <div>
            <Testimonials testimonials={testimonials} />
          </div>
        </div>
      </section>
      <section className="dd-container">
        <div className={`dd-section--inner ${style.columns}`}>
          {documentToReactComponents(bodyExtra.json, richText)}
        </div>
      </section>
    </>
  );
}

import * as style from "./style.module.css";

export function Testimonial(props) {
  return (
    <figure className={style.testimonial}>
      <blockquote cite={props.url}>
        <q className="t-headline">{props.quote}</q>
      </blockquote>
      <figcaption>— {props.cite}</figcaption>
    </figure>
  );
}

Testimonial.defaultProps = {
  cite: "",
  url: "",
  quote: "",
};

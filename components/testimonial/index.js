import * as style from "./style.module.css";

export function Testimonial(props) {
  return (
    <figure className={style.testimonial}>
      <blockquote cite={props.url}>
        <p className="t-headline">{props.quote}</p>
      </blockquote>
      <figcaption>—{props.cite}</figcaption>
    </figure>
  );
}

Testimonial.defaultProps = {
  cite: "",
  url: "",
  quote: "",
};

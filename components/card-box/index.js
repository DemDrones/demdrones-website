import * as style from "./style.module.css";

export function CardBox({ children, minimal }) {
  const m = minimal ? style.cardboxMinimal : "";
  return <article className={`${style.cardbox} ${m}`}>{children}</article>;
}

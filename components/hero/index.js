import { PdwFiber } from "@components/pdw-fiber";
import * as style from "./style.module.css";

export function Hero({ children }) {
  return (
    <div className={style.hero}>
      <div className={style.canvas}>
        <PdwFiber />
      </div>
      <div className={`dd-section ${style.ui}`}>
        <div className="dd-container">{children}</div>

        <div className={`dd-container ${style.arrow}`}>
          <div style={{ writingMode: "vertical-lr" }}>See more</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="currentColor"
          >
            <rect fill="none" height="24" width="24" />
            <path d="M19,15l-1.41-1.41L13,18.17V2H11v16.17l-4.59-4.59L5,15l7,7L19,15z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

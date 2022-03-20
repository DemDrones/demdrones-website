import { Socials } from "@components/socials";
import Link from "next/link";
import * as style from "./style.module.css";

export function Footer({ global }) {
  return (
    <footer className="dd-container dd-section">
      <div className={style.footer}>
        <Socials global={global} />

        <Link href="/terms">
          <a>Terms & Privacy</a>
        </Link>
      </div>
    </footer>
  );
}

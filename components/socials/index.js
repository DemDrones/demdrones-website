import * as style from "./style.module.css";

export function Socials({ global }) {
  return (
    <ul className={`unstyled-list ${style.list}`}>
      <li>
        <a href={global.instagram}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30"
            height="30"
          >
            <path
              fill="currentColor"
              d="M10 3c-4 0-7 3-7 7v10c0 4 3 7 7 7h10c4 0 7-3 7-7V10c0-4-3-7-7-7H10zm12 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-7 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 2a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4z"
            />
          </svg>
        </a>
      </li>
      <li>
        <a href={global.tiktok}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30"
            height="30"
          >
            <path
              fill="currentColor"
              d="M24 4H6a2 2 0 0 0-2 2v18c0 1.1.9 2 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-1.3 9.5a4.3 4.3 0 0 1-4-2v6.6a4.9 4.9 0 1 1-4.8-4.8h.3v2.4h-.3a2.5 2.5 0 0 0 0 5c1.3 0 2.5-1.2 2.5-2.5V7h2.4c.2 2 1.8 3.7 3.9 3.8v2.7z"
            />
          </svg>
        </a>
      </li>
      <li>
        <a href={global.twitter}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30"
            height="30"
          >
            <path
              fill="currentColor"
              d="M28 6.94c-.96.42-1.99.7-3.06.84a5.34 5.34 0 0 0 2.34-2.95 10.7 10.7 0 0 1-3.39 1.3 5.33 5.33 0 0 0-9.09 4.85 15.14 15.14 0 0 1-11-5.57 5.32 5.32 0 0 0 1.66 7.12 5.32 5.32 0 0 1-2.42-.66v.06a5.33 5.33 0 0 0 4.28 5.23 5.34 5.34 0 0 1-2.4.1 5.34 5.34 0 0 0 4.98 3.7 10.7 10.7 0 0 1-7.9 2.2 15.1 15.1 0 0 0 8.18 2.4c9.8 0 15.17-8.12 15.17-15.17l-.01-.7A10.54 10.54 0 0 0 28 6.94z"
            />
          </svg>
        </a>
      </li>
    </ul>
  );
}

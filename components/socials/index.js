import * as style from "./style.module.css";

export function Socials({ global }) {
  return (
    <ul className={`unstyled-list ${style.list}`}>
      {global.instagram && (
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
      )}
      {global.tiktok && (
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
      )}
      {global.twitter && (
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
      )}
      {global.facebook && (
        <li>
          <a href={global.facebook}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30"
              height="30"
            >
              <path
                fill="currentColor"
                d="M24 4H6a2 2 0 0 0-2 2v18c0 1.1.9 2 2 2h10v-9h-3v-3h3v-1.6c0-3 1.5-4.4 4-4.4l2.2.1V11h-1.7c-1.1 0-1.5.6-1.5 1.7V14h3.2l-.5 3H19v9h5a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
              />
            </svg>
          </a>
        </li>
      )}
      {global.youtube && (
        <li>
          <a href={global.youtube}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30"
              height="30"
            >
              <path
                fill="currentColor"
                d="M15 4c-4.2 0-9.6 1-9.6 1A4 4 0 0 0 2 9v12a4 4 0 0 0 3.4 4s5.4 1 9.6 1c4.2 0 9.6-1 9.6-1a4 4 0 0 0 3.4-4V9a4 4 0 0 0-3.4-4S19.2 4 15 4zm-3 6.4 8 4.6-8 4.6v-9.2z"
              />
            </svg>
          </a>
        </li>
      )}

      {global.pinterest && (
        <li>
          <a href={global.pinterest}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path d="M15 3a12 12 0 0 0-4.4 23.2c0-1-.2-2.4 0-3.5l1.5-6s-.4-.7-.4-1.7c0-1.7 1-3 2.2-3 1 0 1.5.8 1.5 1.8s-.6 2.5-1 4c-.3 1.2.6 2.1 1.8 2.1 2.1 0 3.8-2.2 3.8-5.5 0-2.8-2.1-4.9-5-4.9a5.2 5.2 0 0 0-5.5 5.3c0 1 .4 2 1 2.7v.3l-.3 1.4c0 .2-.2.3-.4.2-1.5-.7-2.5-3-2.5-4.7 0-3.8 2.8-7.2 8-7.2 4.1 0 7.4 3 7.4 6.9 0 4.1-2.6 7.4-6.3 7.4-1.2 0-2.3-.6-2.7-1.3l-.8 2.8c-.2 1-1 2.4-1.5 3.2A12 12 0 0 0 27 15 12 12 0 0 0 15 3z" />
            </svg>
          </a>
        </li>
      )}
    </ul>
  );
}

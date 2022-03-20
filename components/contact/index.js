import style from "./style.module.css";

export function Contact({ headline, email, phone }) {
  return (
    <div className="dd-container dd-section">
      <h2 className={style.heading}>{headline}</h2>
      <ul
        className="unstyled-list"
        style={{
          fontSize: "1.5rem",
          lineHeight: "1",
          maxWidth: "20ch",
          display: "grid",
          gap: "2rem",
          marginTop: "4rem",
        }}
      >
        <li>{email}</li>
        <li>{phone}</li>
      </ul>
    </div>
  );
}

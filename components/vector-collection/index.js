import React from "react";

export const VECTOR = {
  ICON_ARROW: "icon-arrow",
  ICON_CHEVRON: "icon-chevron",
  ICON_STAR: "icon-star",
  TIK_TOK: "icon-tiktok",
};

export function Vector(props) {
  const { id, className, width, height, rotation, ...otherProps } = props;
  const style = rotation ? { transform: `rotate(${rotation}deg` } : undefined;
  return (
    <svg
      {...otherProps}
      className={`icon ${className}`}
      width={width}
      height={height}
      style={style}
    >
      <use xlinkHref={`#${id}`} />
    </svg>
  );
}

Vector.defaultProps = {
  width: 24,
  height: 24,
  className: "",
};

export function Vectors() {
  return (
    <div hidden>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden={true}
        focusable={false}
      >
        <symbol id={VECTOR.ICON_ARROW} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12.5 0l-2.2 2 8 8.4H0v3.1h18.4L10.3 22l2.2 2L24 12 12.5 0z"
          />
        </symbol>
        <symbol id={VECTOR.ICON_STAR} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M23 11v2a263.1 263.1 0 01-10.4-.9 169.4 169.4 0 019.3 4.4l.1.1-1 1.8v-.1a137 137 0 01-8.6-6 57.7 57.7 0 003.2 4.6l2.8 4-1.8 1.1-3-6.3-1.4-3.2.2 2.3c.3 4 .6 6.6.6 8.1v.1h-2a263.9 263.9 0 01.8-10.4l-1 2.3-3.3 7-.1.2-1.7-1V21a162.6 162.6 0 015.9-8.6l-1.7 1.2A284 284 0 013 18.4L2 16.7a207 207 0 019.5-4.6l-2.3.3-8.1.6H1v-2a263.6 263.6 0 0110.4.8l-3-1.4-6.4-3 1-1.8v.1a134 134 0 018.6 5.9l-1.2-1.7-4.8-6.8V3l1.7-1a207.4 207.4 0 014.5 9.5l-.2-2.3c-.3-4-.6-6.7-.6-8.1V1h2a515.5 515.5 0 01-.8 10.4l1.3-3a1979.2 1979.2 0 003-6.4l1.8 1a215.2 215.2 0 01-5.9 8.5l1.5-1 7-4.9L22 7.3a193.4 193.4 0 01-9.5 4.5l3.4-.3 7-.6h.1z"
          />
        </symbol>
        <symbol id={VECTOR.TIK_TOK} viewBox="0 0 30 30">
          <path
            fill="currentColor"
            d="M24 4H6a2 2 0 0 0-2 2v18c0 1.1.9 2 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-1.3 9.5a4.3 4.3 0 0 1-4-2v6.6a4.9 4.9 0 1 1-4.8-4.8h.3v2.4h-.3a2.5 2.5 0 0 0 0 5c1.3 0 2.5-1.2 2.5-2.5V7h2.4c.2 2 1.8 3.7 3.9 3.8v2.7z"
          />
        </symbol>
      </svg>
    </div>
  );
}

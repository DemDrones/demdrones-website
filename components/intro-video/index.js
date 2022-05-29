import * as style from "./style.module.css";

export function IntroVideo({ url }) {
  return (
    <video
      src={url}
      muted
      loop
      preload="none"
      playsInline={true}
      autoPlay={true}
      width={640}
      height={360}
      className={style.video}
    />
  );
}

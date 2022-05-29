import LazyLoad from "react-lazyload";
import * as style from "./style.module.css";

export function IntroVideo({ url }) {
  return (
    <LazyLoad height={576}>
      <video
        src={url}
        muted
        loop
        preload="none"
        playsInline={true}
        autoPlay={true}
        width={1024}
        height={576}
        className={style.video}
      />
    </LazyLoad>
  );
}

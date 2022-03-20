import LazyLoad from "react-lazyload";
import * as style from "./style.module.css";

export function IntroVideo() {
  return (
    <LazyLoad height={576}>
      <video
        src="/video/movie-c.mp4"
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

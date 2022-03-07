import LazyLoad from "react-lazyload";
import * as style from "./style.module.css";

export function IntroVideo() {
  return (
    <div className="dd-container dd-section">
      <div className="dd-grid">
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
          />
        </LazyLoad>
        <h1 className={style.heading}>
          We specialise in aerial-imaging & cinematogrophy using drones
        </h1>
      </div>
    </div>
  );
}

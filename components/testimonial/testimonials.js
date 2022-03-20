import { Testimonial } from "@components/testimonial/index";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import * as style from "./style.module.css";

export function Testimonials(props) {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      style={{
        paddingBottom: "2rem",
        "--swiper-pagination-bullet-inactive-color": "var(--color-accent)",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-opacity": "1",
        "--swiper-pagination-color": "var(--color-foreground)",
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className={style.testimonials}
    >
      {props.testimonials.map((t, index) => (
        <SwiperSlide className="swiper-slide" key={index}>
          <Testimonial cite={t.cite} quote={t.quote} url={t.url} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

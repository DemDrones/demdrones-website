import { CardBox } from "@components/card-box";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import * as styles from "./style.module.css";

export function CardBoxList({ className, entries }) {
  return (
    <div className={className}>
      <Swiper
        pagination={{
          clickable: true,
        }}
        className={styles.cardBoxList}
        spaceBetween={16}
        modules={[Pagination, Navigation]}
        slidesPerView="auto"
      >
        {entries.map((entry, index) => (
          <SwiperSlide className={styles.slide} key={index}>
            <CardBox>
              {entry.heading && <h3>{entry.heading}</h3>}
              {entry.body && <p>{entry.body}</p>}
            </CardBox>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

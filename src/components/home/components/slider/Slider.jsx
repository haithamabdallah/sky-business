// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

import "./slider.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { slideImages } from "./data";

export default function Slider({ sliders }) {
  const url = import.meta.env.VITE_STORAGE_URL;
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 2000,
      }}
      className="mySwiper"
    >
      {sliders.map((slider, index) => (
        <SwiperSlide key={slider.id}>
          <img
            className="object-[center_!important]"
            src={`${url}/${slider.background_image}`}
            alt={`Image ${slider.id}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

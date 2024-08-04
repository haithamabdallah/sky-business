// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slider.css";

// import required modules
import { Pagination } from "swiper/modules";
import { slideImages } from "./data";

export default function Slider({ sliders }) {
  const url = import.meta.env.VITE_STORAGE_URL;
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {sliders.map((slider) => (
        <SwiperSlide key={slider.id}>
          <img src={`${url}/${slider.background_image}`} alt={`Image ${slider.id}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

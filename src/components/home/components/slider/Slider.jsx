// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slider.css";

// import required modules
import { Pagination } from "swiper/modules";
import { slideImages } from "./data";

export default function App() {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {slideImages.map((image, i) => (
        <SwiperSlide key={`swiper_slide${i + 1}`}>
          <img src={image} alt={`Image ${i + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

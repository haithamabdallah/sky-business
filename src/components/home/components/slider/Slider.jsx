// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

import "./slider.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import SliderContents from "./components/sliderContents/SliderContents";
import { useContext } from "react";
import { Context } from "../../../../ContextProvider";

export default function Slider() {
  const { state } = useContext(Context);
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      {state.homeData.sliders.map((slider) => (
        <SwiperSlide key={slider.id}>
          <SliderContents slider={slider} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

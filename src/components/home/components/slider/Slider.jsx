import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './slider.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
      <>
        <Swiper
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src="https://www.vichy.ca/dw/image/v2/AATL_PRD/on/demandware.static/-/Sites-vichy-ca-Library/default/dwe69a2e3d/homepage/homepage-2024/WFP-816562_VICHY-W24-M89-Serum-HPB-Desktop-1998x783-EN-V2.jpg?sw=2000&sh=784&sm=cut&q=70" alt="Image 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://www.vichy.ca/dw/image/v2/AATL_PRD/on/demandware.static/-/Sites-vichy-ca-Library/default/dw00967a06/homepage/homepage-2024/WFP-782403_VICHY-W24-CapitalSoleil-HPB-June-HPB-Desktop-EN-V2.jpg?sw=2000&sh=784&sm=cut&q=70" alt="Image 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://www.vichy.ca/dw/image/v2/AATL_PRD/on/demandware.static/-/Sites-vichy-ca-Library/default/dw85c69703/homepage/homepage-2024/WFP-691105_VICHY-W24-CollagenSpecialist-EyeCare-HPB-Desktop-EN-V1.jpg?sw=2000&sh=784&sm=cut&q=70" alt="Image 1" />
            </SwiperSlide>
        </Swiper>
      </>
  );
}

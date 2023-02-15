import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="img/test.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://ktnimg2.mncdn.com/cms/2023/01/27/dc78ad3c-ea8f-4ae7-b292-da7fea32ed0d.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://ktnimg2.mncdn.com/cms/2023/02/08/9c28de0e-b9e7-4a3f-be05-715d5a2c770a.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide><img src="https://ktnimg2.mncdn.com/cms/2023/02/09/7145d8c0-e228-4178-8bdd-1ee2fffb76f5.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://imgscf.slidemembers.com/docs/1/1/259/shopping_slide_ppt_258353.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://ktnimg2.mncdn.com/cms/2023/02/09/7145d8c0-e228-4178-8bdd-1ee2fffb76f5.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://ktnimg2.mncdn.com/cms/2023/02/09/7145d8c0-e228-4178-8bdd-1ee2fffb76f5.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://ktnimg2.mncdn.com/cms/2023/02/09/7145d8c0-e228-4178-8bdd-1ee2fffb76f5.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://ktnimg2.mncdn.com/cms/2023/02/09/7145d8c0-e228-4178-8bdd-1ee2fffb76f5.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}

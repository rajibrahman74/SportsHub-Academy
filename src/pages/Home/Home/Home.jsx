import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";

const Home = () => {
  return (
    <>
      {/* <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper w-[98.7vw] h-[88vh]"
      >
        <SwiperSlide>
          <img
            className="w-full h-full"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full"
            src="https://swiperjs.com/demos/images/nature-2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full"
            src="https://swiperjs.com/demos/images/nature-3.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full"
            src="https://swiperjs.com/demos/images/nature-4.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full"
            src="https://swiperjs.com/demos/images/nature-5.jpg"
          />
        </SwiperSlide>
      </Swiper> */}
    </>
  );
};

export default Home;

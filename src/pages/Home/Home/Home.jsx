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
        pagination={{ clickable: true }}
        navigation
        loop={true}
        autoplay={{ delay: 5000 }}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper xl:w-[98.7vw] xl:h-[88vh] h-[70vh]"
      >
        <SwiperSlide>
          <div>
          <img
            className="w-full h-auto"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
          <div className="banner-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Title 1
              </h2>
              <p className="text-white mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="bg-white text-black py-2 px-4 rounded">
                Click Me
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
          <img
            className="w-full h-[70vh]"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
          <div className="banner-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Title 2
              </h2>
              <p className="text-white mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="bg-white text-black py-2 px-4 rounded">
                Click Me
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
          <img
            className="w-full h-auto"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
          <div className="banner-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Title 3
              </h2>
              <p className="text-white mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="bg-white text-black py-2 px-4 rounded">
                Click Me
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
          <img
            className="w-full h-auto"
            src="https://swiperjs.com/demos/images/nature-2.jpg"
          />
          <div className="banner-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Title 4
              </h2>
              <p className="text-white mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="bg-white text-black py-2 px-4 rounded">
                Click Me
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper> */}
    </>
  );
};

export default Home;

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../../assets/bannerimg/banner1.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";

const Header = () => {
  return (
    <>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        autoplay={{ delay: 5000 }}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper xl:w-[98.7vw]  xl:h-[80vh]"
      >
        <SwiperSlide>
          <div>
            <img className="w-full h-[80vh] object-cover" src={banner1} />
            <div className="banner-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4">
                The Beautiful Game A Journey into the World of Football
              </h2>
              <p className="text-white mb-8">
                Football is more than just a game; it has the power to inspire
                and evoke emotions in fans, creating a sense of unity and
                belonging. The sports popularity and global reach
              </p>
              <button className="btn-outline border-warning border-1 text-white py-3 px-6 font-semibold btn rounded-none hover:bg-warning hover:border-none">
                Explore more
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-full h-[80vh] object-cover"
              src="https://media.istockphoto.com/id/180868820/photo/cricket-batsman-about-to-strike-ball.jpg?s=612x612&w=0&k=20&c=xRiAIk3RA6cmm1FtI2S-YK8Pei9qSkqxhX-JUbTI2Cs="
            />
            <div className="banner-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4">
                Cricket Chronicles Battling for Victory on the Green Pitch
              </h2>
              <p className="text-white mb-8">
                Cricket is a bat-and-ball game played between two teams on a
                field. Players aim to score runs by hitting the ball and protect
                their wickets from being knocked down. It combines strategy,
                skill, and teamwork.
              </p>
              <button className="btn-outline border-warning border-1 text-white py-3 px-6 font-semibold btn rounded-none hover:bg-warning hover:border-none">
                Explore more
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-full h-[80vh] object-cover"
              src="https://i.ibb.co/p1F3SjP/professional-sporty-woman-rollerblades-neon-background-251464988.png"
            />
            <div className="banner-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4">
                Sprint to Glory The Thrilling World of Athletics
              </h2>
              <p className="text-white mb-8">
                Athletics is a dynamic sport encompassing various disciplines
                such as running, jumping, and throwing. Athletes showcase their
                speed, strength, and agility in pursuit of victory, pushing the
                limits of human potential and inspiring awe.
              </p>
              <button className="btn-outline border-warning border-1 text-white py-3 px-6 font-semibold btn rounded-none hover:bg-warning hover:border-none">
                Explore more
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-full h-[80vh] object-cover"
              src="https://img.freepik.com/fotos-premium/mujer-joven-uniforme-jugando-al-tenis-accion-tecnica-mixta_641298-23363.jpg"
            />
            <div className="banner-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4">
                Racket Rivals The Fast-paced World of Badminton Battles
              </h2>
              <p className="text-white mb-8">
                Badminton is a thrilling racquet sport played on a rectangular
                court. Players use agility, precision, and power to hit a
                shuttlecock over the net, engaging in intense rallies and
                strategic gameplay. Speed and finesse are key to success.
              </p>
              <button className="btn-outline border-warning border-1 text-white py-3 px-6 font-semibold btn rounded-none hover:bg-warning hover:border-none">
                Explore more
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Header;

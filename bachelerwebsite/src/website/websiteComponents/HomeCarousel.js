import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper";
import firstImage from "../../assets/carouselImages/carouselFirst.jpg";
import secondImage from "../../assets/carouselImages/carouselSecond.jpg";
import thirdImage from "../../assets/carouselImages/carouselThird.jpg";

const slides = [
  {
    title: "Student Village Kamtjatka",
    bg: firstImage,
    btnText: "See our categories",
  },
  {
    title: "Student Village Kamtjatka",
    bg: secondImage,
    btnText: "See our categories",
  },
  {
    title: "Student Village Kamtjatka",
    bg: thirdImage,
    btnText: "See our categories",
  },
];
const HomeCarousel = () => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={"fade"}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="homeCarousel h-[600px] lg:h[860px]"
    >
      {slides.map((slide, index) => {
        //destructure slide
        const { title, bg, btnText } = slide;
        return (
          <SwiperSlide
            className="h-full bg-pink-300 relative flex justify-center items-center"
            key={index}
          >
            <div className="z-20 text-white text-center">
              <div className="uppercase font-tertiary tracking-[6px] mb-5">
                Horsens Student Housing
              </div>
              <h1 className="text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6">
                {title}
              </h1>
              <button className="btn btn-lg btn-primary mx-auto">
                {btnText}
              </button>
            </div>
            <div className="absolute top-0 w-full h-full">
              <img className="object-cover h-full w-full" src={bg} alt="" />
            </div>
            {/*overlay */}
            <div className="absolute w-full h-full bg-black/70"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HomeCarousel;

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, EffectFade, Autoplay } from "swiper";

const Carousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop
        autoplay
        speed={1000}
        effect="fade"
        modules={[EffectFade, Autoplay]}
        className="mySwiper">
        <SwiperSlide className="text-primary">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1445985543470-41fba5c3144a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80")`
            }}>
            <div className="hero-overlay bg-opacity-30 bg-primary"></div>
            <div className="hero-content text-center text-white">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Sing</h1>
                <p className="mb-5">
                  Immerse yourself in the world of music and let your talents
                  soar with our innovative learning resources
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-primary">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1519139270028-ab664cf42264?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80")`
            }}>
            <div className="hero-overlay bg-opacity-30 bg-primary"></div>
            <div className="hero-content text-center text-white">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Explore</h1>
                <p className="mb-5">
                  Experience the joy of music as you embark on a journey of
                  discovery and growth through our expertly crafted lessons
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-primary">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1532956985363-fb868d867e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`
            }}>
            <div className="hero-overlay bg-opacity-30 bg-primary"></div>
            <div className="hero-content text-center text-white">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Fun</h1>
                <p className="mb-5">
                  Discover the magic of music in every note as our curated
                  lessons guide you towards mastering your chosen instrument.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-primary">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1575314113965-c6672a42b99c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80")`
            }}>
            <div className="hero-overlay bg-opacity-30 bg-primary"></div>
            <div className="hero-content text-center text-white">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Enjoy</h1>
                <p className="mb-5">
                  Unleash your inner musician and watch your skills flourish
                  through our personalized, step-by-step learning approach
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;

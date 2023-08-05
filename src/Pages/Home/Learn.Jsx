import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

const Learn = () => {
  return (
    <div>
      <div className="px-5 lg:px-36 mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2 rounded-xl">
          <div className="mt-[50%] text-center font-bold">
            <h1 className="text-5xl">We are here to</h1>
            <h3 className="text-4xl text-primary mt-4">Learn you Music!!!</h3>
          </div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper">
            <SwiperSlide>
              <img
                className="h-full w-full rounded-2xl"
                src="https://cdn.mos.cms.futurecdn.net/nhZSrYwraXobci4E4tSLRc.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-full w-full rounded-2xl"
                src="https://media.istockphoto.com/id/1266802520/photo/a-traditional-harmonium-indian-music-instrument-kept-on-a-table.jpg?s=612x612&w=0&k=20&c=1nsjUmJsm9Eg4g_AsM6ThBnRL6Al4Pw4bH9LsFcgD7k="
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-full w-full rounded-2xl"
                src="https://cdn.pixabay.com/photo/2018/06/29/01/47/piano-3505109_640.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-full w-full rounded-2xl"
                src="https://images.unsplash.com/photo-1566913485242-694e995731b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmlvbGlufGVufDB8fDB8fHww&w=1000&q=80"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-full w-full rounded-2xl"
                src="https://images.unsplash.com/photo-1607560105214-0aaa5f8fcba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3RyaWMlMjBndWl0YXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-full w-full rounded-2xl"
                src="https://images.unsplash.com/photo-1588032786045-59cefda005c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHJ1bXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-full w-full rounded-2xl"
                src="https://www.musicianwave.com/wp-content/uploads/2022/01/Fun-Harmonica-Songs-in-C-788x525.jpg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Learn;

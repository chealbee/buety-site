"use client";
import React from "react";
import "./style.scss";
import worksData from "../../../worksData.json";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";
import "swiper/css/pagination";
import { EffectFade, Pagination } from "swiper/modules";
const But = () => {
  const swiper = useSwiper();
  return (
    <div className="SwiperNavigation">
      <svg
        onClick={() => swiper.slidePrev()}
        width="15"
        height="16"
        viewBox="0 0 15 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.292893 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM15 7L1 7V9L15 9V7Z"
          fill="white"
        />
      </svg>
      <svg
        onClick={() => swiper.slideNext()}
        width="15"
        height="16"
        viewBox="0 0 15 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289L8.34315 0.928932C7.95262 0.538408 7.31946 0.538408 6.92893 0.928932C6.53841 1.31946 6.53841 1.95262 6.92893 2.34315L12.5858 8L6.92893 13.6569C6.53841 14.0474 6.53841 14.6805 6.92893 15.0711C7.31946 15.4616 7.95262 15.4616 8.34315 15.0711L14.7071 8.70711ZM0 9H14V7H0V9Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

const Works = () => {
  const data = worksData;
  return (
    <section className="workSewction" id="section-works">
      <h3>{data.title}</h3>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        effect={"fade"}
        modules={[EffectFade, Pagination]}
        pagination={{
          clickable: true,
        }}
      >
        <But />
        {data.slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="workSewction__image">
              <Image
                alt={slide.alt}
                src={slide.image}
                width={1920}
                height={1186}
              />
            </div>
            <div className="workInfo">
              <h4>{slide.h4}</h4>
              <p>{slide.p}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="workSewction__moreLink">
        <a href={data.moreButton.link}>
          <button className="workSewction__moreButtont">
            <span>{data.moreButton.text}</span>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Works;

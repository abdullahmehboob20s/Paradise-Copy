import React, { useRef } from "react";
import styles from "./SliderLayout.module.css";
import Card from "components/Cards/Card/Card";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

function SliderLayout({ sliderData, titleEffect, title }) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="container-wrapper-2">
      <div className="mb-50px">
        <h1
          className={`text-center font-paradise fs-64px weight-3 ${titleEffect}`}
        >
          {title}
        </h1>
      </div>

      <div className={`${styles.slider_container} relative`}>
        <Swiper
          spaceBetween={40}
          slidesPerView={3}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          breakpoints={{
            850: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            200: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          {sliderData.map((data, index) => (
            <SwiperSlide>
              <Card img={data.img} title={data.title} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className={`${styles.btn_prev} black pointer`}
          ref={navigationPrevRef}
        >
          <IoIosArrowBack size={30} />
        </button>
        <button
          className={`${styles.btn_next} black pointer`}
          ref={navigationNextRef}
        >
          <IoIosArrowForward size={30} />
        </button>
      </div>
    </div>
  );
}

export default SliderLayout;

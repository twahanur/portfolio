import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./ProjectSlider.css";

import bootstrap from "./bootstrap.jpg";
import css from "./css.jpg";
import expressjs from "./expressjs.jpg";
import firebase from "./firebase.jpg";
import html from "./html.jpg";
import js from "./js.jpg";
import material from "./material.jpg";
import mongodb from "./mongodb.jpg";
import nodejs from "./nodejs.jpg";
import photoshop from "./photoshop.jpg";
import react from "./react.jpg";
import reactNative from "./reactNative.jpg";
import spiring from "./spiring.png";
import tailwind from "./tailwind.jpg";


// import Swiper core and required modules
import SwiperCore, {
    EffectCoverflow,
    Pagination,
    Autoplay,
    Mousewheel
} from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Autoplay, Mousewheel]);

const ProjectSlider = () => {
    return (
        <div className="Body">
            
            <div data-aos="slide-up"
                    data-aos-offset="50"
                    data-aos-delay="20"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out">
                        <h1 className="fs-1 fw-bold text-center text-info">Languages I Used</h1>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                }}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false
                }}
                loop={true}
                mousewheel={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={html} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={css}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bootstrap} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={js} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={react} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={reactNative} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={firebase} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={mongodb} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={expressjs} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={material} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={nodejs} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={photoshop} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={tailwind} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={spiring} />
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    );
};

export default ProjectSlider;
'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination , Autoplay } from "swiper/modules";

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


export default function swiper() {
    return (
        <div className="mx-10">
            <Swiper
            className="h-96 rounded-2xl"
                autoplay = {{
                    delay: 2000
                }}
                modules={[Navigation, Pagination , Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                
                pagination={{ clickable: true }}
            >

                <SwiperSlide>
                    <img src="/images/swiper-images/1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/swiper-images/2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/swiper-images/3.jpg" alt="" />
                </SwiperSlide>
            </Swiper>


        </div>
    )
}

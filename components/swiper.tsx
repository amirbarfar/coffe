'use client';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


export default function swiper() {
    return (
        <div className="mx-10 max-sm:mx-3">
            <Swiper
                className="h-80 max-sm:h-52 rounded-2xl max-md:h-52 max-xl:h-60"
                autoplay={{
                    delay: 3000
                }}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}

                pagination={{ clickable: true }}
            >

                <SwiperSlide>
                    <Image src="/images/swiper-images/1.jpg" alt="" width={1800} height={1800} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/swiper-images/2.jpg" alt="" width={1800} height={1800} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/swiper-images/3.jpg" alt="" width={1800} height={1800} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

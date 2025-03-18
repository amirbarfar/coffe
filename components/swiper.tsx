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
                className="h-96 max-sm:h-52 rounded-2xl"
                autoplay={{
                    delay: 3000
                }}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}

                pagination={{ clickable: true }}
            >

                <SwiperSlide>
                    <Image src="/images/swiper-images/1.jpg" alt="" width={1800} height={1800}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/swiper-images/2.jpg" alt="" width={1800} height={1800}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/swiper-images/3.jpg" alt="" width={1800} height={1800}/>
                </SwiperSlide>
            </Swiper>

            <div className="flex justify-center items-center gap-5 mt-10">
                <Swiper
                    className="h-96 max-sm:h-52 rounded-2xl"
                    autoplay={{
                        delay: 4000
                    }}
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}

                    pagination={{ clickable: true }}
                >

                    <SwiperSlide>
                        <Image className="w-full" src="/images/swiper-images/barista/1.webp" alt="" width={200} height={200}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className="w-full" src="/images/swiper-images/barista/2.webp" alt="" width={200} height={200}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className="w-full" src="/images/swiper-images/barista/3.webp" alt="" width={200} height={200}/>
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    className="h-96 max-sm:h-52 rounded-2xl"
                    autoplay={{
                        delay: 5000
                    }}
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}

                    pagination={{ clickable: true }}
                >

                    <SwiperSlide>
                        <Image className="w-full" src="/images/swiper-images/bartender/1.jpg" alt="" width={200} height={200}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className="w-full" src="/images/swiper-images/bartender/2.jpg" alt="" width={200} height={200}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className="w-full" src="/images/swiper-images/bartender/3.jpg" alt="" width={200} height={200}/>
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>
    )
}

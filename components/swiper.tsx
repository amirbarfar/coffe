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

            <div className="flex justify-center items-center gap-5 mt-10 max-lg:flex-col w-auto">
                <Swiper
                    className="h-80 max-sm:h-52 max-2xl:h-72 max-xl:h-60 max-lg:h-60 rounded-2xl w-full"
                    autoplay={{
                        delay: 4000
                    }}
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}

                    pagination={{ clickable: true }}
                >

                    <SwiperSlide>
                        <Image className="w-full" src="/images/swiper-images/1.jpg" alt="" width={1600} height={1600} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className="w-full" src="/images/swiper-images/2.jpg" alt="" width={1600} height={1600} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className="w-full" src="/images/swiper-images/3.jpg" alt="" width={1600} height={1600} />
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    className="h-80 max-sm:h-52 max-2xl:h-72 max-xl:h-60 max-lg:h-60 rounded-2xl w-full"
                    autoplay={{
                        delay: 5000
                    }}
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}

                    pagination={{ clickable: true }}
                >

                    <SwiperSlide>
                        <Image className="w-full" src="/images/swiper-images/1.jpg" alt="" width={1600} height={1600} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className="w-full" src="/images/swiper-images/2.jpg" alt="" width={1600} height={1600} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className="w-full" src="/images/swiper-images/3.jpg" alt="" width={1600} height={1600} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

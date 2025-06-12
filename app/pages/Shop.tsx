import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from 'swiper/modules';
import clsx from 'clsx';

export default function Shop() {

    const dataShop = [
        {
            tools: [
                { id: 1, image: './images/shopImages/1.png', name: "اسپرسو ماشین", price: '2500000', discount: '20' },
                { id: 2, image: './images/shopImages/1.png', name: "آسیاب قهوه", price: '100000', discount: '12' },
                { id: 3, image: './images/shopImages/1.png', name: "تمپر", price: '32000', discount: '15' },
                { id: 4, image: './images/shopImages/1.png', name: "موکاپات", price: '54200', discount: '10' },
                { id: 5, image: './images/shopImages/1.png', name: "موکاپات", price: '54200', discount: '10' },
                { id: 6, image: './images/shopImages/1.png', name: "موکاپات", price: '54200', discount: '10' },

            ],
            consumables: [
                { id: 1, image: './images/shopImages/2.png', name: "دانه قهوه (روست‌های مختلف: اسپرسو، ترکیبی، تک‌خاستگاه و...)", price: '250000', discount: '12' },
                { id: 2, image: './images/shopImages/2.png', name: "شیر (حیوانی یا گیاهی مثل بادام، جو، نارگیل)", price: '35000', discount: '30' },
                { id: 3, image: './images/shopImages/2.png', name: "شربت‌های طعم‌دهنده (وانیل، کارامل، فندق...)", price: '54000', discount: '10' },
                { id: 4, image: './images/shopImages/2.png', name: "پودر شکلات، دارچین، هل", price: '98200', discount: '20' },
                { id: 5, image: './images/shopImages/2.png', name: "پودر شکلات، دارچین، هل", price: '98200', discount: '20' },
                { id: 6, image: './images/shopImages/2.png', name: "پودر شکلات، دارچین، هل", price: '98200', discount: '20' },

            ]
        }
    ]

    const progressCircle = useRef<HTMLDivElement>(null);
    const progressContent = useRef<HTMLSpanElement>(null);

    const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
        if (progressCircle.current) {
            progressCircle.current.style.setProperty('--progress', `${1 - progress}`);
        }
        console.log(s)
        if (progressContent.current) {
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };
    return (
        <div className="mt-44">
            <div className="font-bold flex justify-between items-center max-lg:mx-2">
                <h3 className="max-md:text-2xl text-4xl max-sm:text-lg">فروشگاه بارنستا</h3>
                <button className="text-base bg-black dark:bg-[#151515] hover:opacity-80 dark:text-white w-60 max-sm:w-44 max-sm:text-xs h-14 max-sm:h-10 rounded-xl text-white">مشاهده تمامی محصولات</button>
            </div>
            {dataShop.map((shop, shopIndex) => (
                <div key={shopIndex}>
                    <h2 className="text-3xl text-center font-bold my-20"> - ابزار و تجهیزات - </h2>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={4}
                        centeredSlides={false}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1280: {
                                slidesPerView: 4,
                            },
                        }}
                        modules={[Autoplay]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="mySwiper"
                    >
                        {shop.tools.map((tool) => (
                            <SwiperSlide
                                key={`tool-${tool.id}`}
                                className="shadow-xl dark:bg-[#151515] w-96 h-[640px] rounded-2xl font-bold mb-10 flex flex-col items-center"
                            >
                                <img className="hover:scale-110 transition-all duration-200 ease-in-out" src={tool.image} alt={tool.name} />
                                <div className="p-5">
                                    <h3 className="text-xl h-7">{tool.name}</h3>
                                    <div>
                                        <div className="flex gap-2 mt-2 text-lg">
                                            <p>{tool.price}</p>
                                            <span className="w-12 h-6 rounded-2xl text-sm flex justify-center items-center text-white bg-red-600">
                                                %{tool.discount}
                                            </span>
                                        </div>
                                        <p className="text-base">
                                            قیمت نهایی : {Number(tool.price) * (1 - Number(tool.discount) / 100)}
                                        </p>
                                    </div>
                                    <button className="bg-black text-sm text-white w-full mt-5 h-11 rounded-xl">
                                        اضافه کردن به سبد
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <h2 className="text-3xl font-bold text-center mt-20 mb-5"> - مواد مصرفی - </h2>

                    <Swiper
                        spaceBetween={30}
                        slidesPerView={4}
                        centeredSlides={false}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1280: {
                                slidesPerView: 4,
                            },
                        }}
                        modules={[Autoplay]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="mySwiper"
                    >
                        {shop.consumables.map((consumable) => (
                            <SwiperSlide
                                key={`consumable-${consumable.id}`}
                                className="shadow-xl dark:bg-[#151515]  rounded-2xl font-bold "
                            >
                                <img src={consumable.image} alt={consumable.name} className="w-full h-auto object-cover hover:scale-110 transition-all duration-200 ease-in-out" />
                                <div className="p-5">
                                    <h3 className="text-xl h-14">{consumable.name}</h3>
                                    <div>
                                        <div className="flex gap-2 mt-4 text-lg">
                                            <p>{consumable.price}</p>
                                            <span className="w-12 h-6 rounded-2xl text-sm flex justify-center items-center text-white bg-red-600">
                                                %{consumable.discount}
                                            </span>
                                        </div>
                                        <p className="text-base">
                                            قیمت نهایی : {Number(consumable.price) * (1 - Number(consumable.discount) / 100)}
                                        </p>
                                    </div>
                                    <button className="bg-black text-sm mt-5 text-white w-full h-11 rounded-xl">
                                        اضافه کردن به سبد
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            ))
            }
        </div >
    )
}

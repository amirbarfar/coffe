import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { dataComments } from "@/consts/consts";

export default function Comments() {


    return (
        <div className="mt-52 max-sm:mt-24 overflow-hidden">
            <h3 className="text-4xl text-center font-bold mb-10 max-md:text-2xl">بخش نظرات</h3>
            <div className="flex justify-between items-center mx-20 max-xl:mx-0 max-xl:flex-col max-xl:gap-10">
                <div className="flex justify-start items-start flex-col basis-1/2 max-xl:w-full max-xl:justify-center max-xl:items-center">
                    <h2 className="text-4xl font-bold max-md:text-xl">درباره بارنستا چه میگن!</h2>
                    <p className="text-2xl font-light mt-5 max-md:text-lg max-md:text-center max-md:mb-5">در این بخش نظزاتی از افراد مختلف درمورد بارنستاست.</p>
                </div>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper w-96 h-72 basis-1/2 max-xl:w-[70%] max-xl:justify-end max-xl:items-end"
                >
                    {dataComments.map((item) => (
                        <SwiperSlide
                            key={item.id}
                            className="bg-white dark:bg-[#151515] rounded-2xl shadow-lg p-5 max-sm:p-2"
                        >
                            <p className="text-gray-600 dark:text-white text-xl p-10 text-center font-bold max-md:text-lg max-sm:p-5 max-sm:text-sm">{item.discription}</p>
                            <div className="flex items-center justify-start gap-2 mb-4 ">
                                <img
                                    className="w-16 h-16 rounded-full"
                                    src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${item.id}`}
                                    alt="Avatar"
                                />
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white  max-sm:text-base">{item.title}</h2>
                                    <p className="text-sm">{item.education_role}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

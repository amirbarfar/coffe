import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import Navbar from "@/components/Navbar";

import { TypingAnimation } from "@/components/magicui/typing-animation";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export default function main() {

    const dataComments = [
        { id: 1, title: 'علی محمدی', image: '', education_role: 'هنرآموزی بارنستا', discription: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' },
        { id: 2, title: 'احمد رضایی', image: '', education_role: 'هنرآموزی بارنستا', discription: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' },
        { id: 3, title: 'امیر برفر', image: '', education_role: 'هنرآموزی بارنستا', discription: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' },
        { id: 4, title: 'متین سلیمانی', image: '', education_role: 'هنرآموزی بارنستا', discription: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' },
    ]

    return (
        <div>
            <Navbar/>
            <div className="font-medium flex justify-center items-center mt-36 max-xl:flex-col gap-12 px-12 max-sm:px-5 max-xl:mt-5 max-sm:mt-24">

                <div className="flex justify-start items-start flex-col w-1/2 max-xl:items-center max-xl:w-full">
                    <TypingAnimation className="text-3xl mb-10 font-bold max-sm:text-xl">بارنستا اولین گام باریستا بارتندر شدن :)</TypingAnimation>
                    <p className="text-lg mb-5 max-lg:text-lg max-lg:w-[90%] max-xl:text-center max-sm:w-full max-sm:text-center max-sm:text-base">وایسا ببینم توام مثل همه باریستا و بارتندررو دوس داری؟ خب اینجا همون جاست که قراره به صورت خیلی حرفه ای  باریستا و بارتندر بشی فقط بزن رو دکمه تا شروع کنیم به یادگیری :)</p>
                    <button className="my-5 w-60 h-11 bg-[#2B2B2B] text-white rounded-md mb-10">بریم که شروع کنیم؟</button>
                </div>

                <div className="relative max-sm:w-full w-1/2 max-xl:w-full">
                    <HeroVideoDialog
                        className="block dark:hidden h-[80%]"
                        animationStyle="from-center"
                        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?`si=4rb-zSdDkVK9qxxb"
                        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                        thumbnailAlt="Hero Video"
                    />

                    <HeroVideoDialog
                        className="hidden dark:block h-[80%]"
                        animationStyle="from-center"
                        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?`si=4rb-zSdDkVK9qxxb"
                        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                        thumbnailAlt="Hero Video"
                    />
                </div>
            </div>
            <div className="mt-52 w-full max-xl:mt-36 max-sm:mt-52">
                <h1 className="text-4xl text-center my-20 max-sm:my-10 font-bold max-sm:text-xl pt-10">دوره های بارنستا</h1>
                <div className="flex justify-center items-center gap-20 mb-10 max-lg:gap-10 max-lg:mx-5 max-md:flex-col relative">
                    <div className="h-[560px] flex flex-col w-[360px] rounded-2xl font-medium shadow-2xl bg-white dark:bg-[#151515] dark:text-white">
                        <Image src="/images/course-images/1.webp" alt="image-main" className="rounded-tr-2xl h-80 rounded-tl-2xl" width="360" height="100" />
                        <div className="mt-4 px-5">
                            <h1 className="text-xl max-sm:text-lg mb-5 font-bold">باریستا شو</h1>
                            <p className="text-base max-sm:text-sm">تو این دوره یحیا قراره بهتون یاد بده چجوری یک باریستا باشین چجوری  لاته آرت رو به درستی بزنین و کلی چیزهای دیگه ... </p>
                            <div className="flex justify-between items-center mt-10">
                                <button className="cursor-pointer bg-slate-200 dark:bg-[#2a2a2aa8] w-44 h-12 rounded-xl">شرکت در دوره</button>
                                <p><span>تومان</span> ۲,۵۰۰,۰۰۰</p>
                            </div>
                        </div>
                    </div>
                    <div className="area">
                        <ul className="circles">
                            <li className="bg-[#00000033] dark:bg-[#ffffff83]"></li>
                            <li className="bg-[#00000033] dark:bg-[#ffffff83]"></li>
                            <li className="bg-[#00000033] dark:bg-[#ffffff83]"></li>
                            <li className="bg-[#00000033] dark:bg-[#ffffff83]"></li>
                            <li className="bg-[#00000033] dark:bg-[#ffffff83]"></li>
                            <li className="bg-[#00000033] dark:bg-[#ffffff83]"></li>
                            <li className="bg-[#00000033] dark:bg-[#ffffff83]"></li>
                            <li className="bg-[#00000033] dark:bg-[#ffffff83]"></li>
                            <li className="bg-[#00000033] dark:bg-[#ffffff83]"></li>
                            <li className="bg-[#00000033] dark:bg-[#ffffff83]"></li>
                        </ul>
                    </div>
                    <div className="h-[560px] flex flex-col w-[360px] rounded-2xl font-medium shadow-2xl bg-white backdrop-blur-2xl dark:bg-[#151515] dark:text-white">
                        <Image src="/images/course-images/2.webp" alt="image-main" className="rounded-tr-2xl h-80 rounded-tl-2xl" width="360" height="100" />
                        <div className="mt-4 px-5">
                            <h1 className="text-xl max-sm:text-lg mb-5 font-bold">بارتندر شو</h1>
                            <p className="text-base max-sm:text-sm">تو این دوره یحیا قراره به شما تمامی مباحثی که تو بارتندری وجود داره رو بهتون یاد بده نوع سیروپ ها تمامی مدل های آبمیوه ها و ...</p>
                            <div className="flex justify-between items-center mt-10">
                                <button className="cursor-pointer bg-slate-200 dark:bg-[#2a2a2aa8] w-44 h-12 rounded-xl">شرکت در دوره</button>
                                <p><span>تومان</span> ۲,۵۰۰,۰۰۰</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center mt-52">
                <div className="flex justify-start items-start flex-col">
                    <h2 className="text-4xl font-bold">درباره بارنستا چه میگن! 😎</h2>
                    <p className="text-2xl font-light mt-5">در این بخش نظزاتی از افراد مختلف درمورد بارنستاست.</p>
                </div>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper w-[800px] h-72"
                >
                    {dataComments.map((item) => (
                        <SwiperSlide
                            key={item.id}
                            className="bg-white rounded-2xl shadow-lg p-5"
                        >
                            <p className="text-gray-600 text-xl p-10 text-center font-bold">{item.discription}</p>
                            <div className="flex items-center justify-start gap-2 mb-4">
                                <img
                                    className="w-16 h-16 rounded-full"
                                    src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${item.id}`}
                                    alt="Avatar"
                                />
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                                    <p>{item.education_role}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    )
}


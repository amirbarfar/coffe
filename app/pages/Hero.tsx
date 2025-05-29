import { TypingAnimation } from "@/components/magicui/typing-animation";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export default function Hero() {
    return (
        <div className="font-medium flex justify-center items-center mt-36 max-xl:flex-col gap-12 px-12 max-sm:px-5 max-xl:mt-5 max-sm:mt-24">

            <div className="flex justify-start items-start flex-col w-1/2 max-xl:items-center max-xl:w-full">
                <TypingAnimation className="text-3xl mb-10 font-bold max-sm:text-xl">بارنستا اولین گام باریستا بارتندر شدن :)</TypingAnimation>
                <p className="text-lg mbnpm run dev-5 max-lg:text-lg max-lg:w-[90%] max-xl:text-center max-sm:w-full max-sm:text-center max-sm:text-base">وایسا ببینم توام مثل همه باریستا و بارتندررو دوس داری؟ خب اینجا همون جاست که قراره به صورت خیلی حرفه ای  باریستا و بارتندر بشی فقط بزن رو دکمه تا شروع کنیم به یادگیری :)</p>
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
    )
}

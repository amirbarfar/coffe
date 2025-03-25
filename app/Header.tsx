import { TypingAnimation } from "@/components/magicui/typing-animation";
import { TextAnimate } from "@/components/magicui/text-animate";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export default function Header() {

  return (
    <div className="font-medium flex justify-center items-center flex-col mt-24 max-lg:px-3">
      <TypingAnimation className="text-3xl mb-10 font-bold max-sm:text-xl">بارنستا اولین گام باریستا بارتندر شدن :)</TypingAnimation>
      <TextAnimate animation="blurInUp" delay={3} duration={3} className="text-xl w-[60%] text-center mb-5 max-xl:w-[80%] max-lg:text-lg max-lg:w-[90%] max-sm:w-full max-sm:text-base">با بارنستا میتونی خیلی راحت بدون فکروخیال به صورت آنلاین و حضوری دوره باریستا یا بارتندر شدن رو ببینی تازشم پشتیبانی ۲۴ ساعته هم داره دیگه چی میخوای ؟</TextAnimate>
      <button className="my-5 w-60 h-11 bg-[#2B2B2B] text-white rounded-md mb-10">بریم که شروع کنیم؟</button>

      <div className="relative w-[80%]">
        <HeroVideoDialog
          className="block dark:hidden h-[80%]"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
          thumbnailAlt="Hero Video"
        />
      </div>
    </div>
  )
}

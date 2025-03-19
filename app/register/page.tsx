'use client';

import Link from "next/link"
import Image from "next/image"

export default function page() {

      const result = localStorage.getItem('mode')
      if (result === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }

  return (
    <div className="container mx-auto my-36 max-md:my-8 font-bold flex justify-between items-center gap-10 max-lg:gap-5 max-sm:gap-10 max-md:flex-col-reverse max-md:px-5">
      <div className="basis-1/2">
        <h2 className="text-2xl mb-5 max-lg:text-lg max-lg:mb-2">حدس میزنم ثبت نام نکردی تا حالا 😎</h2>
        <p className="text-xl max-lg:text-sm">برای ثبت نام اسم و ایمیل و رمزی که میخوای رو تو فرم بنویس و اگه هم ثبت نام کردی قبلا از دکمه پایین برو وارد شو به حسابت :)</p>
        <form action="" className="mt-10 flex flex-col gap-5 max-lg:mt-5">
        <div className="flex flex-col gap-2 max-lg:text-sm">
            <label htmlFor="">نام و نام خانوادگی :</label>
            <input type="text" className="w-full h-12 max-lg:h-10 rounded-md border-2 p-2" />
          </div>
          <div className="flex flex-col gap-2 max-lg:text-sm">
            <label htmlFor="">ایمیل :</label>
            <input type="email" className="w-full h-12 max-lg:h-10 rounded-md border-2 p-2" />
          </div>
          <div className="flex flex-col gap-2 max-lg:text-sm">
            <label htmlFor="">رمز عبور :</label>
            <input type="password" className="w-full h-12 max-lg:h-10 rounded-md border-2 p-2" />
          </div>
          <div className="grid col-span-8 gap-2 items-center mt-5 max-lg:text-sm">
            <button className="w-full h-12 col-start-1 col-end-7 rounded-md max-lg:h-11 hover:bg-[#1b1b1b] bg-[#2B2B2B] duration-300 cursor-pointer transition-all text-white">ثبت نام</button>
            <Link className="col-start-7 col-end-9 h-12 bg-white border-2 max-lg:h-11 text-black hover:bg-[#2B2B2B] hover:text-white rounded-md duration-300 transition-all flex justify-center items-center" href={'/login'}>ورود</Link>
          </div>
        </form>
      </div>
      <div className="basis-1/2 flex justify-end items-end">
        <Image
          className="w-auto rounded-2xl max-lg:h-[480px] max-sm:h-auto max-lg:w-full"
          src={'/images/login&register-images/2.jpg'}
          alt=""
          width={400}
          height={400}
        />
      </div>
    </div>
  )
}

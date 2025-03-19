'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Login() {

  useEffect(() => {
    const result = localStorage.getItem('mode')
    if (result === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <div className="container mx-auto my-36 max-md:my-8 font-bold flex justify-between items-center gap-10 max-md:flex-col-reverse max-md:px-5">
      <div className="basis-1/2">
        <h2 className="text-2xl mb-5 max-lg:text-lg max-lg:mb-2">خیلی خوش برگشتی به بارنِستا  😎</h2>
        <p className="text-xl max-lg:text-sm">برای ورود ایمیل و رمزتو تو فرم وارد کن اگه هم ثبت نام نکردی جای نگرانی نیس از دکمه پایین برو ثبت نام کن :)</p>
        <form action="" className="mt-10 flex flex-col gap-5 max-lg:mt-5">
          <div className="flex flex-col gap-2 max-lg:text-sm">
            <label htmlFor="">ایمیل :</label>
            <input type="email" className="w-full h-12 max-lg:h-10 rounded-md border-2 p-2" />
          </div>
          <div className="flex flex-col gap-2 max-lg:text-sm">
            <label htmlFor="">رمز عبور :</label>
            <input type="password" className="w-full h-12 max-lg:h-10 rounded-md border-2 p-2" />
          </div>
          <div className="grid col-span-8 gap-2 items-center mt-5 max-lg:text-sm">
            <button className="w-full h-12 col-start-1 col-end-7 rounded-md max-lg:h-11 hover:bg-[#1b1b1b] bg-[#2B2B2B] duration-300 cursor-pointer transition-all text-white">ورود</button>
            <Link className="col-start-7 col-end-9 h-12 bg-white border-2 max-lg:h-11 text-black hover:bg-[#2B2B2B] hover:text-white rounded-md duration-300 transition-all flex justify-center items-center" href={'/register'}>ثبت نام؟</Link>
          </div>
        </form>
      </div>
      <div className="basis-1/2 flex justify-end items-end">
        <Image
          className="w-auto rounded-2xl"
          src={'/images/login&register-images/1.jpg'}
          alt=""
          width={400}
          height={400}
        />
      </div>
    </div>
  )
}

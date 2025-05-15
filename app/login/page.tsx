'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Login() {

  const schema = z.object({
    email : z.string().email('ایمیل نامعتبر است !'),
    password : z.string().min(6 , 'پسورد حداقل باید ۶ کارکتر باید !')
  })

  type FormData = z.infer<typeof schema>

  const router = useRouter();

  useEffect(() => {
    const result = localStorage.getItem('mode');
    if (result === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState : { errors }
  } = useForm<FormData>({
    resolver : zodResolver(schema)
  })

  const [token, setToken] = useState('');

  const onSubmit = async (data: FormData) => {
    const response = await fetch('http://localhost:3333/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      const res = await response.json();
      localStorage.setItem('token', res.token);
      setToken(res.token);
      toast.success('ورود موفقیت آمیز بود :)');
      router.push('/');
    } else {
      toast.error("خطایی رخ داده است.");
      console.log("error");
    }
  };

  return (
    <div>
      <button className="m-5 rotate-180" onClick={router.back}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path className="dark:stroke-white" d="M18.9998 12H5.99985M10.9998 6L5.70696 11.2929C5.31643 11.6834 5.31643 12.3166 5.70696 12.7071L10.9998 18" stroke="black" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      <div className="container mx-auto my-28 max-md:my-8 font-bold flex justify-between items-center gap-10 max-md:flex-col-reverse max-md:px-5">
        <div className="basis-1/2">
          <h2 className="text-2xl mb-5 max-lg:text-lg">خیلی خوش برگشتی به بارنِستا 😎</h2>
          <p className="text-xl max-sm:text-sm">برای ورود ایمیل و رمزتو تو فرم وارد کن اگه هم ثبت نام نکردی جای نگرانی نیس از دکمه پایین برو ثبت نام کن :)</p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-10 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="max-sm:text-sm">ایمیل :</label>
              <input {...register("email")} type="email" className="w-full h-12 rounded-md border-2 p-2" />
              {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label className="max-sm:text-sm">رمز عبور :</label>
              <input {...register("password")} type="password" className="w-full h-12 rounded-md border-2 p-2" />
              {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
            </div>

            <div className="grid col-span-8 gap-2 items-center mt-5">
              <button className="w-full h-12 col-start-1 col-end-7 rounded-md bg-[#2B2B2B] hover:bg-[#1b1b1b] text-white max-sm:text-sm">ورود</button>
              <Link className="col-start-7 col-end-9 h-12 bg-white border-2 text-black hover:bg-[#2B2B2B] hover:text-white rounded-md flex max-sm:text-sm justify-center items-center" href={'/register'}>ثبت نام؟</Link>
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
    </div>
  )
}

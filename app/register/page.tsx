'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "نام حداقل باید ۲ حرف داشته باشد"),
  email: z.string().email("ایمیل نامعتبر است"),
  password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
});

type FormData = z.infer<typeof schema>;

export default function Page() {
  const router = useRouter();
  const [token, setToken] = useState('');

  console.log(token);
  

  useEffect(() => {
    const mode = localStorage.getItem('mode');
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('http://localhost:3333/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setToken(result.token); // ذخیره در state
        localStorage.setItem('token', result.token); // ذخیره در localStorage
        toast.success('ثبت‌نام موفقیت‌آمیز بود :)');
        router.push('/');
      } else {
        toast.error(result.message || 'خطا در ثبت‌نام');
      }
    } catch (error) {
      console.error('خطای شبکه یا سرور:', error);
      toast.error('مشکلی پیش آمده!');
    }
  };

  return (
    <div>
      <Toaster />
      <button className="m-5 rotate-180 cursor-pointer" onClick={() =>  router.push('/')}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path className="dark:stroke-white" d="M18.9998 12H5.99985M10.9998 6L5.70696 11.2929C5.31643 11.6834 5.31643 12.3166 5.70696 12.7071L10.9998 18" stroke="black" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      <div className="container mx-auto my-28 max-md:my-8 font-bold flex justify-between items-center gap-10 max-md:flex-col-reverse max-md:px-5">
        <div className="basis-1/2">
          <h2 className="text-2xl mb-5 max-lg:text-lg max-lg:mb-2">حدس میزنم ثبت نام نکردی تا حالا</h2>
          <p className="text-xl max-lg:text-sm">برای ثبت نام اسم و ایمیل و رمزی که میخوای رو تو فرم بنویس و اگه هم ثبت نام کردی قبلا از دکمه پایین برو وارد شو به حسابت :)</p>
          
          <form onSubmit={handleSubmit(onSubmit)} className="mt-10 flex flex-col gap-5 max-lg:mt-5">
            <div className="flex flex-col gap-2 max-lg:text-sm">
              <label>نام و نام خانوادگی :</label>
              <input {...register("name")} type="text" className="w-full h-12 rounded-md border-2 p-2" />
              {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
            </div>

            <div className="flex flex-col gap-2 max-lg:text-sm">
              <label>ایمیل :</label>
              <input {...register("email")} type="email" className="w-full h-12 rounded-md border-2 p-2" />
              {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
            </div>

            <div className="flex flex-col gap-2 max-lg:text-sm">
              <label>رمز عبور :</label>
              <input {...register("password")} type="password" className="w-full h-12 rounded-md border-2 p-2" />
              {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
            </div>

            <div className="grid col-span-8 gap-2 items-center mt-5 max-lg:text-sm">
              <button className="w-full h-12 col-start-1 col-end-7 rounded-md bg-[#2B2B2B] hover:bg-[#1b1b1b] text-white duration-300">ثبت نام</button>
              <Link href="/login" className="col-start-7 col-end-9 h-12 border-2 bg-white text-black hover:bg-[#2B2B2B] hover:text-white rounded-md duration-300 flex justify-center items-center">ورود</Link>
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
    </div>
  );
}

'use client';

import Image from "next/image"
import Link from "next/link";
import { useState } from "react"

export default function Header() {

    const [searchHandler, setSearchHandler] = useState(false)
    const [menuHandler, setMenuHandler] = useState(false)
    const [basket, setBasket] = useState(false)

    return (
        <div>
            <div className="font-medium flex justify-between items-center py-5 max-sm:px-5 px-10">
                <Image
                    className="max-lg:hidden"
                    src="/images/logo.png"
                    alt="Logo"
                    width={150}
                    height={150}
                    priority
                />
                <nav>
                    <ul className={`${menuHandler ? 'max-lg:opacity-100 max-lg:scale-100' : 'max-lg:scale-90 max-lg:opacity-0'} right-0 transition-all z-20 transform duration-300 ease-in-out flex justify-center items-center gap-8 max-lg:absolute max-lg:block top-0 max-lg:border-2 max-lg:bg-white max-lg:leading-7 max-lg:w-72 max-lg:min-h-screen max-lg:py-5  max-lg:rounded-md`}>
                        {/* <div className="bg-slate-200">
                            <Image
                                className="max-lg:hidden"
                                src="/images/logo.png"
                                alt="Logo"
                                width={150}
                                height={150}
                                priority
                            />
                            <div>
                                <h2>امیرحسین برفر</h2>
                                <p>چهارشنبه 15 اسفند 1403</p>
                            </div>
                        </div> */}
                        <li>
                            <Link href="">خانه</Link>
                        </li>
                        <li>
                            <Link href="">دوره های آموزشی</Link>
                        </li>
                        <li>
                            <Link href="">مقالات</Link>
                        </li>
                        <li>
                            <Link href="">نظرات</Link>
                        </li>
                        <li>
                            <Link href="">درباره ما</Link>
                        </li>
                    </ul>
                    <div className="max-lg:block hidden max-sm:w-8" onClick={() => setMenuHandler((curr) => !curr)}>
                        <svg className="w-6 h-5 max-sm:w-5" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1C18 1.26522 17.8946 1.51957 17.7071 1.70711C17.5196 1.89464 17.2652 2 17 2H1C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1ZM17 4H7C6.73478 4 6.48043 4.10536 6.29289 4.29289C6.10536 4.48043 6 4.73478 6 5C6 5.26522 6.10536 5.51957 6.29289 5.70711C6.48043 5.89464 6.73478 6 7 6H17C17.2652 6 17.5196 5.89464 17.7071 5.70711C17.8946 5.51957 18 5.26522 18 5C18 4.73478 17.8946 4.48043 17.7071 4.29289C17.5196 4.10536 17.2652 4 17 4ZM17 8H1C0.734784 8 0.48043 8.10536 0.292893 8.29289C0.105357 8.48043 0 8.73478 0 9C0 9.26522 0.105357 9.51957 0.292893 9.70711C0.48043 9.89464 0.734784 10 1 10H17C17.2652 10 17.5196 9.89464 17.7071 9.70711C17.8946 9.51957 18 9.26522 18 9C18 8.73478 17.8946 8.48043 17.7071 8.29289C17.5196 8.10536 17.2652 8 17 8ZM17 12H7C6.73478 12 6.48043 12.1054 6.29289 12.2929C6.10536 12.4804 6 12.7348 6 13C6 13.2652 6.10536 13.5196 6.29289 13.7071C6.48043 13.8946 6.73478 14 7 14H17C17.2652 14 17.5196 13.8946 17.7071 13.7071C17.8946 13.5196 18 13.2652 18 13C18 12.7348 17.8946 12.4804 17.7071 12.2929C17.5196 12.1054 17.2652 12 17 12Z" fill="#201600" />
                        </svg>
                    </div>
                    <label onClick={() => setMenuHandler(false)} className={`${menuHandler ? 'block' : 'hidden'} bg-black opacity-50 w-dvw h-dvh top-0 right-0 absolute`}></label>
                </nav>

                <Image
                    className="max-lg:block hidden max-sm:w-30"
                    src="/images/logo.png"
                    alt="Logo"
                    width={150}
                    height={150}
                    priority
                />

                <div className="flex gap-3">
                    <div onClick={() => setBasket((curr) => !curr)} className="w-12 h-12 mr-20 max-lg:mr-0 max-sm:w-10 max-sm:h-10 cursor-pointer flex justify-center items-center rounded-full">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 7H16V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V7H5C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8V19C4 19.7956 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V8C20 7.73478 19.8946 7.48043 19.7071 7.29289C19.5196 7.10536 19.2652 7 19 7ZM10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6V7H10V6ZM18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V9H8V10C8 10.2652 8.10536 10.5196 8.29289 10.7071C8.48043 10.8946 8.73478 11 9 11C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V9H14V10C14 10.2652 14.1054 10.5196 14.2929 10.7071C14.4804 10.8946 14.7348 11 15 11C15.2652 11 15.5196 10.8946 15.7071 10.7071C15.8946 10.5196 16 10.2652 16 10V9H18V19Z" fill="black" />
                        </svg>
                    </div>
                </div>

                <label onClick={() => setSearchHandler(false)} className={`${searchHandler ? 'block' : 'hidden'} bg-black opacity-50 w-dvw h-dvh top-0 right-0 absolute`}></label>
                <div className={`${searchHandler ? 'flex scale-100' : 'opacity-0 scale-90'} absolute z-20 w-full px-52 h-16 rounded-lg translate-x-[50%] top-28 right-[50%] max-lg:px-24 max-md:px-10 max-sm:h-12 max-sm:px-5 max-sm:text-sm left-[50%] ease-in-out transition-all duration-500 transform`}>
                    <input type="text" className="w-full h-full rounded-lg px-3 bg-white border-2 outline-0" placeholder="دنبال چی میگردی ؟" />
                </div>

                <label onClick={() => setBasket(false)} className={`${basket ? 'block' : 'hidden'} bg-black opacity-50 w-dvw h-dvh top-0 right-0 absolute`}></label>
                <div className={`${basket ? 'scale-100 opacity-100' : 'opacity-0 scale-90'} duration-300 absolute z-20 bg-white left-10 top-24 rounded-md transform transition-all w-80 h-44 border-2`}>
                    <div className="flex justify-between items-center border-b-2 p-3 text-sm">
                        <h2>سبد خرید من</h2>
                        <p><span>0</span> دوره</p>
                    </div>
                    <p className="text-center mt-10">سبد خرید شما خالی است :(</p>
                </div>
            </div>

        </div>
    )
}

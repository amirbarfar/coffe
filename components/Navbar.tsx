'use client';
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";

import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";

export default function Navbar() {

    const [menuHandler, setMenuHandler] = useState(false)
    const [basket, setBasket] = useState(false)
    const [toggleMode, setToggleMode] = useState(false)


    interface UserType {
        id: number;
        name: string;
        email: string;
    }

    const [user, setUser] = useState<{ currentDate: string; user: UserType } | null>(null);


    async function getDataUsrs() {
        const token = await localStorage.getItem('token');
        console.log(localStorage.getItem('token'))

        if (!token) {
            console.log('توکن یافت نشد');
            return;
        }
        const response = await fetch('http://localhost:3333/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        if (response.ok) {
            console.log(token);
            const res = await response.json()
            setUser(res)
            console.log(res);
        } else {
            console.log('error');
        }
    }

    useEffect(() => {
        getDataUsrs();
    }, []);

    async function logout() {
        const token = localStorage.getItem('token');

        if (!token) {
            console.log('توکن یافت نشد، کاربر از قبل خارج شده است.');
            return;
        }

        const response = await fetch('http://localhost:3333/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.ok) {
            console.log('خروج موفقیت‌آمیز بود!');
            toast.loading('شما از حساب کاربری خود بیرون رفتید :(')
            localStorage.removeItem('token');
            window.location.reload();
        } else {
            console.log('خطا در خروج از حساب:', await response.json());
        }
        
    }



    function darkAndLIghtMode() {
        if (toggleMode === false) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('mode', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('mode', 'white')
        }
    }


    useEffect(() => {
        const result: string | null = localStorage.getItem('mode')
        if (result === 'dark') {
            setToggleMode(!toggleMode)
        } else {
            setToggleMode(false)
        }
        if (result) {
            document.documentElement.classList.add(result)
        }
    }, [])


    return (
        <div className="flex justify-between items-center py-1 font-medium px-2 mb-10 max-sm:px-0">
            <div className="absolute container mx-auto flex -z-10 h-[1600px] w-[99%] max-xl:px-2 max-2xl:px-1 items-center justify-center overflow-hidden rounded-lg bg-background">
                <AnimatedGridPattern
                    numSquares={30}
                    maxOpacity={0.1}
                    duration={3}
                    className={cn(
                        "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
                        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                    )}
                />
            </div>
            <div className="flex justify-start max-xl:justify-center items-center gap-5 max-xl:gap-2 px-5">
                <Image
                    className="max-xl:hidden max-lg:w-32"
                    src={`${toggleMode ? '/images/logo-dark.png' : '/images/logo.png'}`}
                    alt="Logo"
                    width={160}
                    height={160}
                />
                <nav>
                    <div className={`${menuHandler ? 'max-xl:opacity-100 max-xl:scale-100 max-xl:right-0' : 'max-scale-80 max-xl:opacity-0 max-xl:-right-72'} dark:bg-black xl:dark:bg-transparent right-0 transition-all  z-20 transform duration-500 ease-in-out flex justify-center items-center gap-8 max-xl:absolute max-xl:block top-0 max-xl:border-2 text-lg max-xl:bg-white max-sm:rounded-br-none max-sm:rounded-tr-none max-xl:leading-7 max-xl:w-72 max-sm:text-sm max-xl:text-sm max-xl:min-h-screen`}>
                        <div className={`max-xl:${menuHandler ? 'opacity-100 scale-100' : "opacity-0 scale-90"} flex h-24 justify-start dark:bg-[#111111] absolute xl:opacity-0 items-center top-0 w-full max-lg:bg-[#f4f4f4]`}>
                            {
                                user ? (
                                    <div className="flex justify-center items-center gao-5">
                                        <Image
                                            className="rounded-full m-2"
                                            src="/images/noimage.jpg"
                                            alt="Logo"
                                            width={70}
                                            height={70}
                                        />
                                        <div>
                                            <h2>{user.user.name}</h2>
                                            <p>{user.currentDate}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <Link href={'/login'} className="flex justify-center items-center text-lg w-full">ورود | عضویت</Link>
                                )
                            }
                        </div>
                        <ul className="my-2 text-lg max-md:border-b-2  dark:border-slate-500 max-xl:px-5 max-md:pb-6 md:pt-2 md:px-2 flex justify-center items-center max-xl:items-start gap-5 max-xl:flex-col max-xl:mt-28">
                            <li>
                                <Link href="">دوره های آموزشی</Link>
                            </li>
                            <li>
                                <Link href="">تهیه وسایل مورد نیاز</Link>
                            </li>
                            <li>
                                <Link href="">درباره ما</Link>
                            </li>
                        </ul>
                        <div className="w-auto mx-3 xl:hidden dark:border-1 dark:border-slate-400 h-12 my-5 px-2 flex justify-center items-center border-2 rounded-lg max-sm:text-sm">
                            <input type="text" className="w-full dark:bg-black dark:text-white text-black h-full rounded-lg px-3 bg-white outline-0" placeholder="دنبال چی میگردی ؟" />
                            <svg width="24" height="24" viewBox="0 0 24 24" className="fill-none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 22L17.5 17.5M20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11Z" stroke="black" className="dark:stroke-white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className="w-auto h-12 mx-2 text-center">
                            <div className="duration-300 cursor-pointer hover:bg-blue-600 transition-all bg-blue-500 h-full w-full rounded-lg">
                                <div onClick={() => { setToggleMode((curr) => !curr); darkAndLIghtMode() }} className="w-full h-12 text-white hidden max-xl:flex cursor-pointer justify-center px-2 items-center gap-2 rounded-full">
                                    {
                                        toggleMode ? (
                                            <div className="flex justify-center items-center gap-1 rounded-lg">
                                                <svg className="w-6 h-6" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path color="white" fillRule="evenodd" clipRule="evenodd" d="M11.8025 18.0871C7.03723 18.0871 5.4658 16.5156 5.51682 11.8013C5.56785 7.08705 7.03723 5.51562 11.8025 5.51562C16.5678 5.51562 18.0882 7.08705 18.0882 11.8013C18.0882 16.5156 16.5678 18.0871 11.8025 18.0871Z" fill="currentColor"></path>
                                                    <path color="white" d="M11.8008 0.800781C12.2347 0.800781 12.5865 1.15256 12.5865 1.5865V3.15792C12.5865 3.59186 12.2347 3.94364 11.8008 3.94364C11.3668 3.94364 11.0151 3.59186 11.0151 3.15792V1.5865C11.0151 1.15256 11.3668 0.800781 11.8008 0.800781Z" fill="currentColor" fillOpacity="0.4"></path>
                                                    <path color="white" d="M12.5865 20.4436C12.5865 20.0097 12.2347 19.6579 11.8008 19.6579C11.3668 19.6579 11.0151 20.0097 11.0151 20.4436V22.0151C11.0151 22.449 11.3668 22.8008 11.8008 22.8008C12.2347 22.8008 12.5865 22.449 12.5865 22.0151V20.4436Z" fill="currentColor" fillOpacity="0.4"></path>
                                                    <path color="white" d="M22.8008 11.8008C22.8008 12.2347 22.449 12.5865 22.0151 12.5865H20.4436C20.0097 12.5865 19.6579 12.2347 19.6579 11.8008C19.6579 11.3668 20.0097 11.0151 20.4436 11.0151H22.0151C22.449 11.0151 22.8008 11.3668 22.8008 11.8008Z" fill="currentColor" fillOpacity="0.4"></path>
                                                    <path color="white" d="M3.15792 12.5865C3.59186 12.5865 3.94364 12.2347 3.94364 11.8008C3.94364 11.3668 3.59186 11.0151 3.15792 11.0151H1.5865C1.15256 11.0151 0.800781 11.3668 0.800781 11.8008C0.800781 12.2347 1.15256 12.5865 1.5865 12.5865H3.15792Z" fill="currentColor" fillOpacity="0.4"></path>
                                                    <path color="white" d="M3.38805 3.38805C3.6949 3.08121 4.19238 3.08121 4.49922 3.38805L5.61039 4.49922C5.91723 4.80606 5.91723 5.30355 5.61039 5.61039C5.30355 5.91723 4.80606 5.91723 4.49922 5.61039L3.38805 4.49922C3.08121 4.19238 3.08121 3.6949 3.38805 3.38805Z" fill="currentColor" fillOpacity="0.4"></path>
                                                    <path color="white" d="M4.49922 20.5388C4.19238 20.8457 3.6949 20.8457 3.38805 20.5388C3.08121 20.232 3.08121 19.7345 3.38805 19.4277L4.49922 18.3165C4.80606 18.0097 5.30355 18.0097 5.61039 18.3165C5.91723 18.6233 5.91723 19.1208 5.61039 19.4277L4.49922 20.5388Z" fill="currentColor" fillOpacity="0.4"></path>
                                                    <path color="white" d="M20.5388 3.38805C20.232 3.08121 19.7345 3.08121 19.4277 3.38805L18.3165 4.49922C18.0097 4.80606 18.0097 5.30355 18.3165 5.61039C18.6233 5.91723 19.1208 5.91723 19.4277 5.61039L20.5388 4.49922C20.8457 4.19238 20.8457 3.6949 20.5388 3.38805Z" fill="currentColor" fillOpacity="0.4"></path>
                                                    <path color="white" d="M19.4277 20.5388C19.7345 20.8457 20.232 20.8457 20.5388 20.5388C20.8457 20.232 20.8457 19.7345 20.5388 19.4277L19.4277 18.3165C19.1208 18.0097 18.6233 18.0097 18.3165 18.3165C18.0097 18.6233 18.0097 19.1208 18.3165 19.4277L19.4277 20.5388Z" fill="currentColor" fillOpacity="0.4"></path>
                                                </svg>
                                                <p>لایت مود</p>
                                            </div>
                                        ) : (
                                            <div className="flex justify-center gap-1 items-center rounded-lg">
                                                <svg className="w-5 h-5" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path color="white" fillRule="evenodd" clipRule="evenodd" d="M19.9358 14.3652C20.0691 14.0415 19.9906 13.6679 19.7389 13.4276C19.4872 13.1873 19.115 13.1308 18.8051 13.2857C17.7584 13.8091 16.5801 14.1034 15.3317 14.1034C10.9835 14.1034 7.45846 10.5246 7.45846 6.1098C7.45846 4.32254 8.0352 2.67449 9.01033 1.34372C9.21644 1.06244 9.22917 0.680892 9.04229 0.386091C8.85541 0.0912907 8.50809 -0.054977 8.17055 0.0189828C3.50017 1.04235 2.17361e-07 5.25905 0 10.3077C-2.50276e-07 16.1208 4.64155 20.8333 10.3672 20.8333C14.6778 20.8333 18.372 18.1625 19.9358 14.3652Z" fill="currentColor"></path>
                                                    <path color="white" fillRule="evenodd" clipRule="evenodd" d="M13.0928 3.67116L13.7596 1.84183C13.9751 1.25035 14.4797 0.939795 14.9987 0.910156C15.5177 0.939795 16.0222 1.25035 16.2378 1.84183L16.9045 3.67116L18.7063 4.34807C19.9329 4.8089 19.9329 6.57032 18.7063 7.03114L16.9045 7.70806L16.2378 9.53738C16.0222 10.1289 15.5177 10.4394 14.9987 10.4691C14.4797 10.4394 13.9751 10.1289 13.7596 9.53738L13.0928 7.70806L11.2911 7.03114C10.0644 6.57032 10.0644 4.8089 11.2911 4.34807L13.0928 3.67116Z" fill="currentColor" fillOpacity="0.4"></path>
                                                </svg>
                                                <p>دارک مود</p>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        {
                            user &&
                            <div className="max-xl:flex hidden w-full h-12 justify-center items-center mt-3 ">
                                <button onClick={logout} className="w-full h-full mx-2 bg-red-500 duration-300 cursor-pointer hover:bg-red-600 transition-all ease-in-out text-white rounded-lg">خروج از حساب کاربری</button>
                            </div>
                        }
                    </div>
                    <div className="max-xl:block hidden max-sm:w-8" onClick={() => setMenuHandler((curr) => !curr)}>
                        <svg className="w-6 h-6 max-sm:w-5" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1C18 1.26522 17.8946 1.51957 17.7071 1.70711C17.5196 1.89464 17.2652 2 17 2H1C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1ZM17 4H7C6.73478 4 6.48043 4.10536 6.29289 4.29289C6.10536 4.48043 6 4.73478 6 5C6 5.26522 6.10536 5.51957 6.29289 5.70711C6.48043 5.89464 6.73478 6 7 6H17C17.2652 6 17.5196 5.89464 17.7071 5.70711C17.8946 5.51957 18 5.26522 18 5C18 4.73478 17.8946 4.48043 17.7071 4.29289C17.5196 4.10536 17.2652 4 17 4ZM17 8H1C0.734784 8 0.48043 8.10536 0.292893 8.29289C0.105357 8.48043 0 8.73478 0 9C0 9.26522 0.105357 9.51957 0.292893 9.70711C0.48043 9.89464 0.734784 10 1 10H17C17.2652 10 17.5196 9.89464 17.7071 9.70711C17.8946 9.51957 18 9.26522 18 9C18 8.73478 17.8946 8.48043 17.7071 8.29289C17.5196 8.10536 17.2652 8 17 8ZM17 12H7C6.73478 12 6.48043 12.1054 6.29289 12.2929C6.10536 12.4804 6 12.7348 6 13C6 13.2652 6.10536 13.5196 6.29289 13.7071C6.48043 13.8946 6.73478 14 7 14H17C17.2652 14 17.5196 13.8946 17.7071 13.7071C17.8946 13.5196 18 13.2652 18 13C18 12.7348 17.8946 12.4804 17.7071 12.2929C17.5196 12.1054 17.2652 12 17 12Z" fill="#201600" className="dark:fill-white " />
                        </svg>
                    </div>
                    <label onClick={() => setMenuHandler(false)} className={`${menuHandler ? 'block' : 'hidden'} bg-black opacity-50 w-full h-full top-0 right-0 absolute z-10`}></label>
                </nav>
                <Image
                    className="max-xl:block hidden max-sm:w-30"
                    src={`${toggleMode ? '/images/logo-dark.png' : '/images/logo.png'}`}
                    alt="Logo"
                    width={150}
                    height={150}
                    priority
                />
            </div>
            <label onClick={() => setBasket(false)} className={`${basket ? 'block' : 'hidden'} bg-black opacity-50 w-dvw h-dvh top-0 right-0 absolute z-10`}></label>
            <div className="flex gap-3 max-lg:gap-1 justify-center items-center max-xl:flex-row-reverse">
                <div className="relative">
                    <div onClick={() => setBasket((curr) => !curr)} className="w-12 h-12 mr-20 max-sm:mx-2 max-xl:mr-0 max-sm:w-8 max-sm:h-10 max-lg:mr-0 cursor-pointer flex justify-center items-center rounded-full">
                        <svg className="max-sm:w-6 max-sm:h-6 max-lg:w-7" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="dark:fill-white" d="M19 7H16V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V7H5C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8V19C4 19.7956 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V8C20 7.73478 19.8946 7.48043 19.7071 7.29289C19.5196 7.10536 19.2652 7 19 7ZM10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6V7H10V6ZM18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V9H8V10C8 10.2652 8.10536 10.5196 8.29289 10.7071C8.48043 10.8946 8.73478 11 9 11C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V9H14V10C14 10.2652 14.1054 10.5196 14.2929 10.7071C14.4804 10.8946 14.7348 11 15 11C15.2652 11 15.5196 10.8946 15.7071 10.7071C15.8946 10.5196 16 10.2652 16 10V9H18V19Z" fill="black" />
                        </svg>
                    </div>
                    <div className={`${basket ? 'scale-100 opacity-100' : 'opacity-0 scale-90'} duration-300 dark:bg-black max-xl:left-10 max-sm:left-0 absolute -left-20 z-20 bg-white rounded-md transform transition-all max- w-96 h-52 border-2`}>
                        <div className="flex justify-between items-center border-b-2 p-3 text-sm">
                            <h2>سبد خرید من</h2>
                            <p><span>0</span> دوره</p>
                        </div>
                        <div className="flex justify-center items-center my-14">
                            <p className="text-center">سبد خرید شما خالی است :(</p>
                        </div>
                    </div>
                </div>
                <Link className="cursor-pointer text-lg max-sm:text-sm max-md:hidden max-xl:text-base" href={'/login'}>ورود | عضویت</Link>
                <div onClick={() => { setToggleMode((curr) => !curr); darkAndLIghtMode() }} className="w-8 h-12 duration-500 transition-all max-xl:hidden ease-in-out  cursor-pointer max-md:hidden flex  justify-center items-center rounded-full">
                    {
                        toggleMode ? (
                            <svg className="w-6 h-6 max-sm:h-5 max-lg:w-5" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M19.9358 14.3652C20.0691 14.0415 19.9906 13.6679 19.7389 13.4276C19.4872 13.1873 19.115 13.1308 18.8051 13.2857C17.7584 13.8091 16.5801 14.1034 15.3317 14.1034C10.9835 14.1034 7.45846 10.5246 7.45846 6.1098C7.45846 4.32254 8.0352 2.67449 9.01033 1.34372C9.21644 1.06244 9.22917 0.680892 9.04229 0.386091C8.85541 0.0912907 8.50809 -0.054977 8.17055 0.0189828C3.50017 1.04235 2.17361e-07 5.25905 0 10.3077C-2.50276e-07 16.1208 4.64155 20.8333 10.3672 20.8333C14.6778 20.8333 18.372 18.1625 19.9358 14.3652Z" fill="currentColor"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.0928 3.67116L13.7596 1.84183C13.9751 1.25035 14.4797 0.939795 14.9987 0.910156C15.5177 0.939795 16.0222 1.25035 16.2378 1.84183L16.9045 3.67116L18.7063 4.34807C19.9329 4.8089 19.9329 6.57032 18.7063 7.03114L16.9045 7.70806L16.2378 9.53738C16.0222 10.1289 15.5177 10.4394 14.9987 10.4691C14.4797 10.4394 13.9751 10.1289 13.7596 9.53738L13.0928 7.70806L11.2911 7.03114C10.0644 6.57032 10.0644 4.8089 11.2911 4.34807L13.0928 3.67116Z" fill="currentColor" fillOpacity="0.4"></path>
                            </svg>
                        ) : (
                            <svg className="w-7 h-7 max-lg:w-6" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.8025 18.0871C7.03723 18.0871 5.4658 16.5156 5.51682 11.8013C5.56785 7.08705 7.03723 5.51562 11.8025 5.51562C16.5678 5.51562 18.0882 7.08705 18.0882 11.8013C18.0882 16.5156 16.5678 18.0871 11.8025 18.0871Z" fill="currentColor"></path>
                                <path d="M11.8008 0.800781C12.2347 0.800781 12.5865 1.15256 12.5865 1.5865V3.15792C12.5865 3.59186 12.2347 3.94364 11.8008 3.94364C11.3668 3.94364 11.0151 3.59186 11.0151 3.15792V1.5865C11.0151 1.15256 11.3668 0.800781 11.8008 0.800781Z" fill="currentColor" fillOpacity="0.4"></path>
                                <path d="M12.5865 20.4436C12.5865 20.0097 12.2347 19.6579 11.8008 19.6579C11.3668 19.6579 11.0151 20.0097 11.0151 20.4436V22.0151C11.0151 22.449 11.3668 22.8008 11.8008 22.8008C12.2347 22.8008 12.5865 22.449 12.5865 22.0151V20.4436Z" fill="currentColor" fillOpacity="0.4"></path>
                                <path d="M22.8008 11.8008C22.8008 12.2347 22.449 12.5865 22.0151 12.5865H20.4436C20.0097 12.5865 19.6579 12.2347 19.6579 11.8008C19.6579 11.3668 20.0097 11.0151 20.4436 11.0151H22.0151C22.449 11.0151 22.8008 11.3668 22.8008 11.8008Z" fill="currentColor" fillOpacity="0.4"></path>
                                <path d="M3.15792 12.5865C3.59186 12.5865 3.94364 12.2347 3.94364 11.8008C3.94364 11.3668 3.59186 11.0151 3.15792 11.0151H1.5865C1.15256 11.0151 0.800781 11.3668 0.800781 11.8008C0.800781 12.2347 1.15256 12.5865 1.5865 12.5865H3.15792Z" fill="currentColor" fillOpacity="0.4"></path>
                                <path d="M3.38805 3.38805C3.6949 3.08121 4.19238 3.08121 4.49922 3.38805L5.61039 4.49922C5.91723 4.80606 5.91723 5.30355 5.61039 5.61039C5.30355 5.91723 4.80606 5.91723 4.49922 5.61039L3.38805 4.49922C3.08121 4.19238 3.08121 3.6949 3.38805 3.38805Z" fill="currentColor" fillOpacity="0.4"></path>
                                <path d="M4.49922 20.5388C4.19238 20.8457 3.6949 20.8457 3.38805 20.5388C3.08121 20.232 3.08121 19.7345 3.38805 19.4277L4.49922 18.3165C4.80606 18.0097 5.30355 18.0097 5.61039 18.3165C5.91723 18.6233 5.91723 19.1208 5.61039 19.4277L4.49922 20.5388Z" fill="currentColor" fillOpacity="0.4"></path>
                                <path d="M20.5388 3.38805C20.232 3.08121 19.7345 3.08121 19.4277 3.38805L18.3165 4.49922C18.0097 4.80606 18.0097 5.30355 18.3165 5.61039C18.6233 5.91723 19.1208 5.91723 19.4277 5.61039L20.5388 4.49922C20.8457 4.19238 20.8457 3.6949 20.5388 3.38805Z" fill="currentColor" fillOpacity="0.4"></path>
                                <path d="M19.4277 20.5388C19.7345 20.8457 20.232 20.8457 20.5388 20.5388C20.8457 20.232 20.8457 19.7345 20.5388 19.4277L19.4277 18.3165C19.1208 18.0097 18.6233 18.0097 18.3165 18.3165C18.0097 18.6233 18.0097 19.1208 18.3165 19.4277L19.4277 20.5388Z" fill="currentColor" fillOpacity="0.4"></path>
                            </svg>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
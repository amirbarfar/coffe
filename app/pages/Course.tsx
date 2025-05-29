import Image from "next/image"

export default function Course() {
    return (
        <div className="mt-52 w-full max-xl:mt-36 max-sm:mt-52">
            <h1 className="text-4xl text-center my-20 max-sm:my-10 font-bold max-md:text-2xl pt-10">دوره های بارنستا</h1>
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
                        <p className="text-base max-sm:text-sm">تو این دوره یحیا قراره به شما تمامی مباحثی که تو بارتندری وجود داره رو بهتون یاد بده نوع سیروپ ها مدل های آبمیوه ها و ...</p>
                        <div className="flex justify-between items-center mt-10">
                            <button className="cursor-pointer bg-slate-200 dark:bg-[#2a2a2aa8] w-44 h-12 rounded-xl">شرکت در دوره</button>
                            <p><span>تومان</span> ۲,۵۰۰,۰۰۰</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

'use client';

import Navbar from "@/components/Navbar";
import Header from "./Header";
import Swiper from "@/components/swiper";

export default function Home() {

  return (
    <div className="container mx-auto">
      <Navbar/>
      <Header/>
      {/* <Swiper/> */}
    </div>
  );
}

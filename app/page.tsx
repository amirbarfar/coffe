'use client';

import Navbar from "@/components/Navbar";
import Header from "./Header";
import Main from "./main";

export default function Home() {

  return (
    <div className="container mx-auto">
      <Navbar/>
      <Header/>
      <Main/>
      {/* <Swiper/> */}
    </div>
  );
}

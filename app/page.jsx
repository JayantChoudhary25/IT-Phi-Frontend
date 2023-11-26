// use client
import React, {useEffect } from "react";

import FollowUs from "@/component/followUs";
import Footer from "@/component/footer";
import Herosection from "@/component/home/hero";
import Reviews from "@/component/reviews";
import Section2 from "@/component/section2";

import AOS from 'aos';
import Services from "@/component/services/service";
import Herosection2 from "@/component/home/home2";
import StickToVision from "@/component/home/stick-to-our-vision";
import Ourcapabilities from "@/component/home/our-capabilities";


export default function Home() {


  useEffect(() => {
    AOS.init({
      once: false
    });
  }, []);


  const newProductItems = [
    {
      id: 1,
      url: "/images/watch1.png",
      color: "brown",
      isCart : true
    },
    {
      id: 2,
      url: "/images/watch2.png",
      color: "blue",
    },
    {
      id: 3,
      url: "/images/watch3.png",
      color: "black",
    },
    {
      id: 3,
      url: "/images/watch4.png",
      color: "orange",
    },
  ];

  const bestSellersItems = [
    {
      id: 1,
      url: "/images/watch3.png",
      color: "black",
    },
    {
      id: 2,
      url: "/images/watch7.png",
      color: "red",
    },
    {
      id: 3,
      url: "/images/watch6.png",
      color: "green",
    },
    {
      id: 3,
      url: "/images/watch2.png",
      color: "blue",
    },
  ];

  return (
    <>
      <Herosection />
      <Section2 />
      <Herosection2 />
      <StickToVision/>
      <Reviews />
      <Ourcapabilities/>
      <FollowUs/>
      {/* <Services/> */}
      
    </>
  );
}

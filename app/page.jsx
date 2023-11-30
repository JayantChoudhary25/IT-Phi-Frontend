"use client";

import React, { useEffect } from "react";
import dynamic from 'next/dynamic'

import FollowUs from "@/component/user-module/followUs";
import Footer from "@/component/user-module/home/footer";
import Herosection from "@/component/user-module/home/hero";
import Reviews from "@/component/user-module/reviews";
import Section2 from "@/component/user-module/services/section2";

import AOS from 'aos';
import Services from "@/component/user-module/services/service";
import Herosection2 from "@/component/user-module/home/home2";
import StickToVision from "@/component/user-module/home/stick-to-our-vision";
import Ourcapabilities from "@/component/user-module/home/our-capabilities";
import ContactPage from "@/app/contact-us/page";


const Home = () => {


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
      isCart: true
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
      <StickToVision />
      <Reviews />
      <Ourcapabilities />
      <ContactPage />
      <FollowUs />
      {/* <Services/> */}

    </>
  );
}

export default dynamic(() => Promise.resolve(Home), { ssr: false });
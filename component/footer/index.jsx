"use client";

import React from "react";
import dynamic from 'next/dynamic'
import Link from "next/link";

const Footer = () => {
  const menusList1 = [
    {
      id: 0,
      menu: "join Us",
      path: "/careers"
    },
    {
      id: 1,
      menu: "about us",
      path: "/about us"
    },
    {
      id: 2,
      menu: "what we do",
      path: "/services"
    },
    {
      id: 3,
      menu: "privacy policy",
      path: "/privacy-policy"
    },
  ];

  const menuList3 = [
    "about us ",
    "careers",
    "contact us",
    "privacy policy",
  ];

  return (
    <>
      <section className="bg-primary  text-main">
        <div className="container mx-auto">
          <div className="flex flex-wrap lg:flex-nowrap gap-y-10 lg:gap-x-5 xl:gap-x-10 2xl:gap-x-10 py-[30px] lg:py-[80px] justify-between  items-start">
            <div className=" flex flex-col gap-3 w-full sm:w-[40%] md:w-[35%]">
              <div className="">
                <Link href="/">
                  <img src="/svg/logo/logo-white.svg" alt="Logo." className="max-w-[150px]" />
                </Link>
              </div>
              <p className="ext-[15px] xl:text-[16px] font-normal leading-[24px]">
                IT Phi Pvt. Ltd, just not a team of passionate and skilled experts, rather it’s a hub of new possibilities, innovations, development and business affluence; to accompany you for your significant success.
              </p>
            </div>
            <div className="">
              <h6 className="text-[20px] font-bold  leading-[26px]">
                Quick links
              </h6>
              <ul className="inline-flex flex-col gap-3 pt-[20px]">
                {menusList1.map((list, inx) => (
                  <Link href={list.path}>
                    <li
                      key={inx}
                      className="text-[15px]  font-normal leading-[24px] capitalize cursor-pointer"
                    >
                      {list.menu}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>

            {/* <div className="">
              <h6 className="text-[20px] font-bold  leading-[26px] ">
                Information
              </h6>
              <ul className="inline-flex flex-col gap-4 pt-[20px] z-[999]">
                {menuList3.map((list, inx) => (
                  <li
                    key={inx}
                    className="text-[15px] xl:text-[16px] font-normal leading-[24px] capitalize cursor-pointer"
                  >
                    {list}
                  </li>
                ))}
              </ul>
            </div> */}


            <div className=" flex flex-col gap-5 lg:gap-8">
              <p className="text-[18px] font-semibold  leading-[26px]">
                Subscribe to our emails
              </p>
              <div className="border border-white flex justify-between px-4 h-[48px]">
                <input
                  type="email"
                  placeholder="Email"
                  className="border-none bg-[#133239] focus-visible:outline-none   placeholder:text-white text-[16px] font-normal  leading-[15px] "
                />
                <img src="/svg/arrow.svg" alt="" className="cursor-pointer" />
              </div>
              <div className="flex gap-x-8 lg:gap-5 2xl:gap-8 items-center">
                <Link href="https://www.twitter.com/">
                  <img src="/svg/social/icon1.svg" alt="" />
                </Link>
                <Link href="https://www.facebook.com/">
                  <img src="/svg/social/icon2.svg" alt="" />
                </Link>
                <Link href="https://www.youtube.com/">
                  <img src="/svg/social/icon3.svg" alt="" />
                </Link>
                <Link href="https://www.instagram.com/">
                  <img src="/svg/social/icon4.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>

          {/* bottom */}
          <div className="flex flex-wrap-reverse sm:flex-nowrap  gap-y-3 md:gap-y-6 justify-center items-center py-4 border-t border-t-[#A1A1A1] text-center">
            <p className="text-[14px] font-normal leading-[21px] ">
              © 2023 IT Phi Pvt. Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });

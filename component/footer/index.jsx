import Link from "next/link";
import React from "react";

const Footer = () => {
  const menusList1 = [
    "what we do",
    "join our project",
    "our work",
    "join Us",
  ];

  const menuList3 = [
    "about us ",
    "careers",
    "contact us",
    "privacy policy",
  ];

  return (
    <>
      <section className="bg-[#133239] text-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap lg:flex-nowrap gap-y-10 lg:gap-x-5 xl:gap-x-10 2xl:gap-x-20 py-[30px] lg:py-[80px] justify-between  ">
            <div className=" flex flex-col gap-5 lg:gap-8 w-full sm:w-[40%] md:w-[25%]">
              <div className="">
                {/* <img src="/svg/logo.svg" alt="Logo" className="w-[150px]" />
                 */}
                  <h1 className="text-primary text-[30px] font-bold whitespace-nowrap">IT Phi Pvt. Ltd</h1>
              </div>
              <p className="text-[16px] font-medium leading-[24px] text-white ">
              IT Phi Pvt. Ltd, just not a team of passionate and skilled experts, rather it’s a hub of new possibilities, innovations, development and business affluence; to accompany you for your significant success.
              </p>
            </div>


            <div className="">
              <h6 className="text-[20px] font-bold  leading-[26px] text-white">
                Quick links
              </h6>
              <ul className="inline-flex flex-col gap-4 pt-[20px]">
                {menusList1.map((list, inx) => (
                  <li
                    key={inx}
                    className="text-[15px] xl:text-[16px] font-medium leading-[24px] capitalize"
                  >
                    {list}
                  </li>
                ))}
              </ul>
            </div>

            <div className="">
              <h6 className="text-[20px] font-bold  leading-[26px] ">
            Information
              </h6>
              <ul className="inline-flex flex-col gap-4 pt-[20px]">
                {menuList3.map((list, inx) => (
                  <li
                    key={inx}
                    className="text-[15px] xl:text-[16px] font-medium leading-[24px] capitalize"
                  >
                    {list}
                  </li>
                ))}
              </ul>
            </div>


            <div className=" flex flex-col gap-5 lg:gap-8">
              <p className="text-[18px] font-semibold  leading-[26px] text-white">
                Subscribe to our emails
              </p>
              <div className="border border-white flex justify-between px-4 h-[48px]">
                <input
                  type="email"
                  placeholder="Email"
                  className="border-none bg-[#133239] focus-visible:outline-none   placeholder:text-white text-[16px] font-normal  leading-[15px] text-white "
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
          <div className="flex flex-wrap-reverse sm:flex-nowrap  gap-y-3 md:gap-y-6 justify-center  sm:justify-between items-center py-4 border-t border-t-[#315031]">
            <p className="text-[14px] font-normal text-[#A1A1A1] leading-[21px] text-white ">
              © 2023 IT Phi Pvt. Ltd. All Rights Reserved.
            </p>
            <div className="">
              <img src="/svg/card.svg" alt="cards.." className="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

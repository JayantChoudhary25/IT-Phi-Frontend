import React from "react";
import Button from "../button/Button";

const NewProduct2 = () => {
  return (
    <>
      <section className="md:py-[70px] py-[30px] px-4 md:px-0">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 md:flex-row justify-center items-center gap-x-10 gap-y-10">
            <div className="">
              <img src="/images/watch5.png" alt="watch.." />
            </div>
            <div className="flex flex-col gap-3 md:gap-6 text-center md:text-left lg:pl-[40px]  px-[30px] md:px-0 xl:w-[585px]">
              <p className="text-[16px] font-bold leading-[26px] text-[#FE7330;] uppercase font-[`Montserrat`]">
                Watch Strap Sale
              </p>
              <h3 className="text-[24px] md:text-[35px] font-bold leading-[36px] md:leading-[45px]  uppercase text-black font-[`Montserrat`]">
                Save Big on Your Next Watch Accessory
              </h3>
              <p className="text-[16px] md:text-[18px] font-normal leading-[24px] md:leading-[28px]   text-black font-[`Montserrat`]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </p>
              <div className="mx-auto md:mx-0">
                <Button />
              </div>
            </div>
          </div>

          <div className="md:pt-[70px] pt-[30px] flex flex-col lg:flex-row gap-10  justify-center items-center">
            <div className="lg:w-[40%] md:w-[80%] w-full">
                <img src="/images/watch8.png" alt="" className="lg:w-[550px]" />
            </div>
            <div className="lg:w-[60%] md:w-[80%] w-full relative">
                <img src="/images/watch9.png" alt="" className="lg:w-[855px]" />
                <img src="/svg/social/play.svg" alt="loading."  className="absolute top-[50%] left-[50%] transform translate-x-0 translate-y-[-50%] "/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewProduct2;

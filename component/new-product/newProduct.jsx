import React from "react";
import NewProduct2 from "./newProduct2";

const NewProduct = ({cardItems,title}) => {


  return (
    <>
    <section className="py-[50px]">
      <div className="container mx-auto">
        <div className="">
          <h3 className="text-black font-['Red_Hat_Display'] text-[35px] font-bold leading-[45px] text-center uppercase">
          {title}
          </h3>
          <div className="bg-[#54A3F2] w-[142px] mx-auto h-[3px] mt-[15px]"></div>
          <div className="md:py-[70px] py-[30px] flex  flex-wrap md:flex-row lg:flex-nowrap gap-x-10 gap-y-10 md:px-0 px-4 justify-center ">
            {cardItems.map((items, inx) => (
              <div className="border border-[#D0D0D0] rounded-[20px] bg-white  px-3 pt-4 pb-4 md:pb-12">
                <div className="">
                  <img src={items.url} alt="Loading.." className="md:w-[320px] lg:w-auto"/>
                </div>
                <div className="px-4 flex flex-col gap-5 pt-5 ">
                  <h6 className="text-black font-['Red_Hat_Display'] text-[16px] font-medium leading-[26px]">
                    Rubber Strap for Moonswatch - <span className=" capitalize">{items.color}</span>
                  </h6>
                  <div className="">
                    <img src="/svg/star.svg" alt="review" />
                  </div>
                  <div className="flex items-center gap-x-10">
                    <h5 className="text-black font-['Red_Hat_Display'] text-[16px] font-bold leading-[26px]">
                      €49.90 EUR
                    </h5>
                    <p className="text-[#949494] font-['Red_Hat_Display'] text-[12px] font-medium leading-[26px]">
                      €59.90 EUR
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default NewProduct;

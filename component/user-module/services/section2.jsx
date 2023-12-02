import Image from "next/image";
import React from "react";

const Section2 = () => {

    const helpItems = [
        {
          id: 1,
          url: "/svg/ship.svg",
          label: "Free Shipping ",
          desc: "Free shipping  on order ",
        },
        {
          id: 2,
          url: "/svg/support.svg",
          label: "Support 24/7",
          desc: "Contact us 24 hrs a day ",
        },
        {
          id: 3,
          url: "/svg/payment.svg",
          label: "Payment Secure",
          desc: "Secure payment",
        },
      ];
      
  return (
    <section className="py-[30px] lg:py-[30px] 2xl:py-[50px]">
        <div className="container mx-auto">
          <div className="flex md:flex-row flex-col  h-auto md:h-[100px] items-center justify-around gap-y-8 ">
            {helpItems.map((items, inx) => (
              <>
                <div className="flex  items-center justify-center md:gap-x-3 gap-x-5 lg:gap-x-5 support_box" key={inx}>
                  <div className="md:w-[50px] w-auto lg:w-auto" >
                    <Image src={items.url} alt="" className="support-icon"  width={70}
                   height={70}/>
                  </div>
                  <div className="">
                    <h6 className="text-black font-['Red_Hat_Display'] text-[18px] lg:text-[20px] font-bold leading-normal">{items.label}</h6>
                    <p className="text-black font-['Red_Hat_Display'] text-[15px] lg:text-[16px] font-normal leading-normal">{items.desc}</p>
                  </div>
                </div>
                {!(inx === 2) && (
                  <div className="w-[70px] md:w-[1px] bg-[#B3B3B3] h-[1px] md:h-[73px]"></div>
                )}
              </>
            ))}
          </div>
        </div>
      </section>
  )
};

export default Section2;

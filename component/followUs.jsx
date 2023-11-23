import React from "react";

const FollowUs = () => {

  const cardItems = [
    {
        id:1,
        url:"/images/w1.png"
    },
    {
        id:2,
        url:"/images/w2.png",
    },
    {
        id:3,
        url:"/images/w3.png",
        icon : "/svg/social/instagram.svg"

    },
    {
        id:4,
        url:"/images/w4.png"
    },
    {
        id:5,
        url:"/images/w5.png"
    },
  ]
  return (
    <>
      <section className="py-[50px]">
        <div className="container mx-auto">
          <div className="">
            <h3 className="text-black font-['Red_Hat_Display'] text-[35px] font-bold leading-[45px] text-center px-4">
            FOLLOW US ON INSTAGRAM
            </h3>
            <div className="bg-[#54A3F2] w-[142px] mx-auto h-[3px] mt-[15px] pt-4"></div>
            <div className="md:py-[70px] py-[30px] flex  flex-wrap md:flex-row lg:flex-nowrap  gap-x-3 gap-y-6  md:px-0 px-4 justify-center ">
              {cardItems.map((items) => (
                <div
                  className={`rounded-[20px] flex flex-col gap-10 text-center`}
                  key={items.id}
                >
                  
                  <div className="relative">
                    <img
                      src={items.url}
                      alt="Loading.."
                      className="mx-auto"
                    />
                    {
                        items.id == 3 &&
                    <img src={items?.icon } alt="loading."  className="absolute top-[50%] left-[50%] transform translate-x-0 translate-y-[-50%"/>
                    }
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

export default FollowUs;

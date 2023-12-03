import Image from "next/image";
import React from "react";

const FollowUs = () => {
  const cardItems = [
    {
      id: 1,
      url: "/images/about/img (1).jpg",
    },
    {
      id: 2,
      url: "/images/about/img (1).png",
    },
    {
      id: 3,
      url: "/images/about/img (2).jpg",
      icon: "/svg/social/instagram.svg",
    },
    {
      id: 4,
      url: "/images/about/img (3).jpg",
    },
    {
      id: 5,
      url: "/images/about/img (4).jpg",
    },
  ];
  return (
    <>
      <section className="py-[30px] lg:py-[70px]">
        <div className="container mx-auto">
          <div className="">
            <h3
              className="text-black font-['Red_Hat_Display'] text-[24px] md:text-[35px] font-bold leading:[30px] md:leading-[45px] text-center px-4"
              data-aos="fade-down"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
            >
              {/* FOLLOW US ON INSTAGRAM */}
            </h3>
            {/* <div className="bg-[#54A3F2] w-[142px] mx-auto h-[3px] mt-[15px]"></div> */}
            <div className="md:pt-[70px] pt-[30px] flex  flex-wrap lg:flex-row lg:flex-nowrap  gap-x-3 gap-y-6  md:px-0 px-4 justify-center ">
              {cardItems.map((items) => (
                <div
                  className="relative img-box"
                >
                  <Image
                    src={items.url}
                    width={300}
                    height={400}
                    alt="Loading.."
                    className="mx-auto"
                  />
                  <div className="bg-black absolute top-0 left-0 h-full w-full flex justify-center items-center rounded img-inner">
                    <Image
                      src="/svg/social/instagram.svg"
                      alt="loading."
                      className=""
                      width={30}
                      height={30}
                    />
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

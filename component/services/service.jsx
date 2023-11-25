import React from "react";

const Services = () => {

    const cardItems = [
        1, 2, 3, 4, 5, 6
    ]
    return (
        <>
            <section className="py-[100px] lg:py-[200px] bg-[#f4fbfe]">
                <div className="container mx-auto">
                    <div className="">
                        <h3 className="text-black font-['Red_Hat_Display'] text-[24px] md:text-[35px] leading:[30px] md:leading-[45px] font-bold leading-[45px] text-center px-4"
                            data-aos="fade-down"
                            data-aos-easing="ease-in-out"
                            data-aos-duration="1000"
                        >
                            Services
                        </h3>
                        <div className="bg-[#54A3F2] w-[142px] mx-auto h-[3px] mt-[15px]"></div>
                        <div className=" lg:pt-[50px] pt-[30px] grid grid-cols-3 gap-x-5  gap-y-5 md:px-0 px-4 justify-center ">
                            {cardItems.map((items) => (
                                <div
                                    className={`rounded-[10px] flex flex-col gap-3 px-[30px]  py-[30px] 
                  bg-white service-card 
                  `}
                                    key={items}

                                    data-aos="zoom-in-up"
                                    data-aos-easing="ease-in-out"
                                    data-aos-duration="2000"
                                    data-aos-delay="50"
                                >
                                    <h6 className="text-[18px] font-bold">Lorem Ipsum</h6>

                                    <p className=" text-[16px] font-normal leading-[26px]">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;

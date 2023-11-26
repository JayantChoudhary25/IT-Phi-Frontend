import React from 'react'

const Ourcapabilities = () => {

    const cardItems = [
        {
            id: 1,
            head: "SOFTWARE CONSULTING",
            para: "Get expert advice from IT Phi Pvt. Ltd  before you go live to maximize ROI."
        },
        {
            id: 2,
            head: "DESIGNING",
            para: "Get pro & trending designs from best UX-UI developers."
        },
        {
            id: 3,
            head: "Custom Software Development",
            para: "Get rid of inefficient & complicated business processes with IT Phi Pvt. Ltd.."
        },
        {
            id: 4,
            head: "MOBILE APP DEVELOPMENT",
            para: "Go handy to reach out maximum users with Mobile App development"
        },
        {
            id: 5,
            head: "WEB APP DEVELOPMENT",
            para: "Get pro full stack development services for your website"
        },
        {
            id: 6,
            head: "CMS DEVELOPMENT",
            para: "Flexibility, Time saver, effective & easy CMS development services."
        },

    ]
    return (
        <>
            <section className="py-[100px] lg:py-[200px] bg-primary text-main">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h3 className="text-main font-['Red_Hat_Display'] text-[24px] md:text-[35px] leading:[30px] md:leading-[45px] font-bold leading-[45px] text-center px-4 capitalize"
                        >
                            Our capabilities
                        </h3>
                        <div className="bg-[#54A3F2] w-[142px] mx-auto h-[3px] mt-[15px]"></div>
                        <p className="my-4 text-[18px] font-normsl leading-[26px]">We love what we do. Our primary objective is to achieve the ultimate user satisfaction.<br /> We believe in transparent work with a professional approach.</p>
                        <div className=" lg:pt-[50px] pt-[30px] grid grid-cols-3 gap-x-5  gap-y-5 md:px-0 px-4 justify-center ">
                            {cardItems.map((items) => (
                                <div
                                    className={`rounded-[10px] flex flex-col gap-3 px-[40px]  py-[30px] 
                  bg-white service-card text-left text-black
                  `}
                                    key={items.id}

                                    data-aos="zoom-in-up"
                                    data-aos-easing="ease-in-out"
                                    data-aos-duration="2000"
                                    data-aos-delay="50"
                                >
                                    <h6 className="text-[18px] font-bold">{items.head}</h6>

                                    <p className=" text-[16px] font-normal leading-[26px]">
                                        {items.para}
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

export default Ourcapabilities;


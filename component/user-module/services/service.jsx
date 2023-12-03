import React from "react";

const Services = () => {

    const cardItems = [
        1, 2, 3, 4, 5, 6
    ]
    const serviceData = [
        {
            label: "POS (Point of sell software)",
            list: ["small shops etc"]
        },
        {
            label: "Marketing Software",
            list: ["whatsapp marketing", "email marketing", "bulk brocast", "sms marketing", "telecaller marketing"]
        },
        {
            label: "ERP (Enterprise Management Software) ",
            list: ["Big companies"]
        },
        {
            label: "chatBoard software",
            list: ["automed solution"]
        },
        {
            label: "database scraping software",
            list: ["phoen no", "whole sheet shoes etc."]
        },
        {
            label: "acouting or bookeeping saftware",
            list: ["vyaper", "refrens"]
        },
        {
            label: "reselling application",
        },
        {
            label: "Ecommerce website",
        },
        {
            label: "employee  management software",
        },
        {
            label: "learning  management website",
        },
    ]

    return (
        <>
            <section className="py-[170px]">
                {/*----------- section 1----------- */}
                <div className="text-black pb-[30px]">
                    <h3
                        className="text-[24px] md:text-[35px] font-bold leading:[30px] md:leading-[45px] text-center px-4 uppercase"
                    >
                        SERVICES WE PROVIDE
                    </h3>
                    <div className="bg-[#54A3F2] w-[142px] mx-auto h-[3px] mt-[15px]"></div>
                    <p className="my-4 text-[16px] md:text-[18px] font-normal leading-[26px] text-center capitalize">
                        We have specialized services that can support you wherever you are on your OutSystems journey.
                    </p>
                </div>

                <div className=" bg-[#f4fbfe] py-[70px]">
                    <div className="container mx-auto">
                        <div className="">
                            <div className=" lg:pt-[50px] pt-[30px] grid md:grid-cols-3 gap-x-5  gap-y-5 md:px-0 px-4 justify-center ">
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
                </div>

                <div className=" bg-[#f4fbfe] py-[70px]">
                    <div className="container mx-auto">
                        <div className="">
                            <div className="lg:pt-[50px] pt-[30px] grid md:grid-cols-3 gap-x-5 gap-y-5 md:px-0 px-4 justify-center">
                                {serviceData.map((items, inx) => (
                                    <div
                                        className={`rounded-[10px] flex flex-col gap-3 px-[30px] py-[30px]bg-white service-card py-6 bg-white`}
                                        key={inx}
                                        data-aos="zoom-in-up"
                                        data-aos-easing="ease-in-out"
                                        data-aos-duration="2000"
                                        data-aos-delay="50"
                                    >
                                        <h6 className="text-[18px] font-bold capitalize">{items?.label}</h6>
                                        <ul>
                                            {
                                                items?.list?.map((lis, inxx) => (
                                                    <li className="text-[16px] font-normal leading-[26px] capitalize" >
                                                        {lis}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Services;

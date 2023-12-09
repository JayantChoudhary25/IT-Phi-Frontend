import React from "react";
import OurServices from "./our-services";

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
            <section className="py-[60px]">
                <div className=" bg-[#f4fbfe] py-[70px]">
                    <div className="container mx-auto">
                        <div className="">
                            <div className="lg:pt-[50px] pt-[30px] grid md:grid-cols-3 gap-x-5 gap-y-5 md:px-0 px-4 justify-center">
                                {serviceData.map((items, inx) => (
                                    <div
                                        className={`rounded-[10px] flex flex-col gap-3 px-[30px] py-[30px] bg-white service-card `}
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

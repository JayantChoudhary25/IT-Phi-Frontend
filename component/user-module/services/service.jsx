import React from "react";
import OurServices from "./our-services";
import Svg1 from "./svg/svg1";
import Svg2 from "./svg/svg2";
import Svg3 from "./svg/svg3";

const Services = () => {

    const cardItems = [
        1, 2, 3, 4, 5, 6
    ]
    const serviceData = [
        {
            label: "POS (Point of sell software)",
            list: ["small shops etc"],
            icon: <Svg1 />,
            bg_color : "#5B72EE"
        },
        {
            label: "Marketing Software",
            list: ["whatsapp marketing", "email marketing", "bulk brocast", "sms marketing", "telecaller marketing"],
            icon: <Svg2 />,
            bg_color : "#F48C06"
        },
        {
            label: "ERP (Enterprise Management Software) ",
            list: ["Big companies"],
            icon: <Svg3 />,
            bg_color : "#29B9E7"
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
             <div className="container mx-auto">
             <h3
                        className="text-[24px] md:text-[35px] font-bold leading:[30px] md:leading-[45px] text-center px-4 uppercase"
                    >
                        SERVICES WE PROVIDE
                    </h3>
                    <div className="bg-[#54A3F2] w-[142px] mx-auto h-[3px] mt-[15px]"></div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 pt-10">
                    {
                        serviceData.map((items, index) => (
                            <div
                             data-aos="fade-up" 
                            className="bg-white shadow-xl p-6 text-center rounded-2xl border border-[#f3f3f3] hover:border-theme-color shadow-2xl" key={index}>
                                {/* <div  className={`rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12 bg-[#de8d4a] `}>
                                    {items.icon}
                                </div> */}
                                <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken capitalize">{items.label}</h1>
                                <ul class="about_list pt-3">
                                {items?.list?.map((list,inx)=>(
                                    <li class="flex mt-5" key={inx}>
                                    <div class="about_check">
                                        <i class="lni lni-checkmark-circle"></i>
                                    </div>
                                    <div class="about_list_content pl-5 pr-2">
                                        <p>{list}</p>
                                    </div>
                                </li>
                                ))}
                               </ul>
                            </div>
                        ))
                    }
                </div>
             </div>
            </section>

        </>
    );
};

export default Services;

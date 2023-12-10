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
             <div data-aos="flip-up" className="max-w-xl mx-auto text-center">
                    <h1 className="font-bold text-darken my-3 text-2xl">All-In-One <span className="text-yellow-500">Cloud Software.</span></h1>
                    <p className="leading-relaxed text-gray-500">Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-x-10 gap-y-16 ">
                    {
                        serviceData.map((items, index) => (
                            <div
                            //  data-aos="fade-up" 
                            className="bg-white shadow-xl p-6 text-center rounded-xl border border-theme-color" key={index}>
                                {/* <div  className={`rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12 bg-[#de8d4a] `}>
                                    {items.icon}
                                </div> */}
                                <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">{items.label}</h1>
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

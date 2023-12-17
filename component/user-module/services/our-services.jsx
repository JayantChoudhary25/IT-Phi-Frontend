import React from 'react'

const OurServices = () => {

    const ourServices = [
        {
            id: 1,
            icon: "lni lni-layout",
            service: "Web Design",
            description: "Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores"
        },
        {
            id: 1,
            icon: "lni lni-bullhorn",
            service: "Digital Marketing",
            description: "Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores"
        },
        {
            id: 1,
            icon: "lni lni-mobile",
            service: "Mobile Apps",
            description: "Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores"
        },
        {
            id: 1,
            icon: "lni lni-seo",
            service: "SEO Consultancy",
            description: "Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores"
        },
        {
            id: 1,
            icon: "lni lni-layers",
            service: "Graphic Design",
            description: "Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores"
        },
        {
            id: 1,
            icon: "lni lni-briefcase",
            service: "Business Consultancy",
            description: "Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores"
        },
    ]
    return (
        <>
        <section id="services" className="services_area pt-[170px] pb-[60px]">
            <div className="container mx-auto">
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
            </div>
            <div className="bg-[#f4fbfe] py-[80px]">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center">
                        {
                            ourServices.map((items, index) => (
                                <div className="w-full ">
                                    <div className="single_services text-center mt-8 mx-3 bg-white">
                                        <div className="services_icon">
                                            <i className={items.icon}></i>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="94" height="92" viewBox="0 0 94 92">
                                                <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                                            </svg>
                                        </div>
                                        <div className="services_content mt-5 xl:mt-10">
                                            <h3 className="services_title text-black font-semibold text-xl md:text-2xl lg:text-xl xl:text-3xl">{items.service}</h3>
                                            <p className="mt-4"> {items.description} </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section >
            <div className="py-[70px] bg-primary text-main mb-10">
                <div className=" w-full md:w-[70%] mx-auto flex flex-col gap-5 items-center justify-center">
                    <h3
                        className="text-[24px] md:text-[34px] font-semibold leading:[30px] md:leading-[45px] text-center px-4 capitalize"
                    >
                        We Deliver Work with Perfection
                    </h3>
                    <p className=" text-[16px] font-normal leading-[26px] text-center capitalize">
                        Our Dedication and Quality of services provided to our Clients takes them towards successful Business Model and that it self tells our Success Story. We provide Best Solutions to Retain each and every customer associated with IT Phi Pvt. Ltd.
                    </p>
                </div>
            </div>
        </>
        
    )
}

export default OurServices
import Image from 'next/image';
import React from 'react'

const Ourcapabilities = () => {

    const cardItems = [
        {
            id: 1,
            head: "Software Development",
            para: " Harness the power of cutting-edge technology with our bespoke software development services. We create robust and scalable solutions tailored to meet the unique needs of your business",
            image : "/images/hero/content.png"
        },
        {
            id: 2,
            head: "Web Development",
            para: "Transform your online presence with our expert web development services. From responsive websites to dynamic web applications, we bring your vision to life on the digital canvas.",
            image : "/images/hero/app-development.png"
        },
        {
            id: 3,
            head: "Digital Transformation",
            para: "Stay ahead in the fast-paced digital landscape. Our digital transformation strategies empower businesses to adapt, thrive, and lead in the age of technology.",
            image : "/images/hero/data-transformation.png"
        },
        {
            id: 4,
            head: "Data Analytics",
            para: "Uncover valuable insights and make data-driven decisions. Our data analytics solutions help you extract meaningful information from your data, driving strategic growth.",
            image : "/images/hero/analysis.png"
        },

    ]
    return (
        <>
            <section className="py-[100px] lg:py-[200px] bg-primary text-main">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h3 className="text-main font-['Red_Hat_Display'] text-[24px] md:text-[35px] leading:[30px] md:leading-[45px] font-bold leading-[45px] text-center px-4 capitalize"
                        >
                            Our Expertise
                        </h3>
                        <div className="bg-[#54A3F2] w-[142px] mx-auto h-[3px] mt-[15px]"></div>
                        <p className="my-4 text-[18px] font-normsl leading-[26px]">We love what we do. Our primary objective is to achieve the ultimate user satisfaction.<br /> We believe in transparent work with a professional approach.</p>
                        <div className=" lg:pt-[50px] pt-[30px] grid md:grid-cols-2 gap-x-8 gap-y-8 md:px-0 px-4 justify-center ">
                            {cardItems.map((items) => (
                                <div
                                    className={`rounded-[10px] flex flex-row md:flex-col gap-3 px-[40px]  py-[30px] 
                  bg-white service-card text-left text-black
                  `}
                                    key={items.id}

                                    data-aos="zoom-in-up"
                                    data-aos-easing="ease-in-out"
                                    data-aos-duration="2000"
                                    data-aos-delay="50"
                                >
                                    <div className="">
                                    <Image src={items.image} alt="icon" className="support-icon" width={70} height={70} />
                                    </div>
                                    <div className="">
                                        <h6 className="text-[20px] font-bold">{items.head}</h6>

                                        <p className=" text-[16px] font-normal leading-[26px]">
                                            {items.para}
                                        </p>
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

export default Ourcapabilities;


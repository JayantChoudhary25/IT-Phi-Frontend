import React from 'react'
import Image from 'next/image'
import StickToVision from './stick-to-our-vision'

const Herosection2 = () => {
    return (
        <section className="bg-[#f9f9f9] default-padding">
            <div className="container mx-auto ">

                <div className="flex lg:flex-row flex-col lg:justify-center lg:items-center text-center lg:text-left gap-x-20 gap-y-10  pb-[30px]">
                    <div
                        className="w-full lg:w-[50%] "
                        data-aos="fade-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    >
                        <Image src="/images/hero/hero-vector2.jpg" alt="hero-img" height={500} width={600} />
                    </div>
                    <div
                        className="flex flex-col gap-5 justify-center z-[99] w-full lg:w-[50%] sal-example"
                        data-aos="fade-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    >
                        <h1 className="font-bold text-[30px] lg:text-[42px] leading-[36px] lg:leading-[56px] uppercase text-black">
                            Unleash Digital Excellence with IT Phi Pvt. Ltd
                        </h1>

                        <p className="font-medium text-[16px] lg:text-[18px] leading-[32px] text-black ">
                            Take your website and business to unprecedented heights with IT Phi Pvt. Ltd. If you're
                            tired of a lackluster online presence and aspire to transform it into something vibrant,
                            impactful, and digitally dynamic, look no further. We are the go-to choice for businesses
                            seeking a remarkable digital transformation. Try us today, and let's embark on this
                            exciting journey together!

                        </p>
                        {/* <div className="mx-auto md:mx-0">

                            <button className="btn-primary"> Read more </button>

                        </div> */}
                    </div>
                </div>
            </div>

            <StickToVision />

            <div className="container mx-auto ">

                <div className="flex lg:flex-row flex-col-reverse lg:justify-center lg:items-center text-center lg:text-left gap-x-20 gap-y-10 pt-[50px] lg:pt-[100px] ">

                    <div
                        className="flex flex-col gap-5 justify-center z-[99] w-full lg:w-[50%] sal-example"
                        data-aos="fade-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    >
                        <h1 className="font-bold text-[30px] lg:text-[42px] leading-[36px] lg:leading-[56px] uppercase text-black">
                            Elevate Your Digital Presence with IT Phi Pvt. Ltd
                        </h1>

                        <p className="font-medium text-[16px] lg:text-[18px] leading-[32px] text-black ">
                            IT Phi Pvt. Ltd is your gateway to digital excellence. Elevate your business operations
                            with our state-of-the-art IT solutions. We bring innovation, efficiency, and reliability
                            to every project, ensuring your success in the digital realm.
                        </p>
                        {/* <div className="mx-auto md:mx-0">

        <button className="btn-primary"> read more </button>

    </div> */}
                    </div>
                    <div
                        className="w-full lg:w-[50%] "
                        data-aos="fade-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    >
                        <Image src="/images/hero/hero-vector1.jpg" alt="hero-img" height={500} width={600} />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Herosection2
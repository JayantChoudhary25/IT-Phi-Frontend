import React from 'react'
import Image from 'next/image'

const Herosection2 = () => {
    return (
        <section className="bg-[#f9f9f9] default-padding">
            <div className="container mx-auto ">

                <div className="flex lg:flex-row flex-col lg:justify-center lg:items-center text-center lg:text-left gap-x-20 gap-y-10  ">
                    <div
                        className="w-full lg:w-[50%] "
                        data-aos="fade-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    >
                        <Image src="/images/hero/hero-img2.png" alt="hero-img" height={500} width={600} />
                    </div>
                    <div
                        className="flex flex-col gap-5 justify-center z-[99] w-full lg:w-[50%] sal-example"
                        data-aos="fade-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    >
                        <h1 className="font-bold text-[30px] lg:text-[42px] leading-[36px] lg:leading-[56px] uppercase text-black">
                            Bring Your Website To The Table of IT-Geeks
                        </h1>

                        <p className="font-medium text-[16px] lg:text-[18px] leading-[32px] text-black ">
                            Scale up your website (Business) to new heights. If you are planning to turn your business from dull, paltry and unattractive to sparkling, worthy and digitally dynamic, here is the best choice, try us!
                        </p>
                        <div className="mx-auto md:mx-0">

                            <button className="btn-primary"> Read more </button>

                        </div>
                    </div>

                </div>

                <div className="flex lg:flex-row flex-col-reverse lg:justify-center lg:items-center text-center lg:text-left gap-x-20 gap-y-10 pt-[50px] lg:pt-[100px] ">
            
                    <div
                        className="flex flex-col gap-5 justify-center z-[99] w-full lg:w-[50%] sal-example"
                        data-aos="fade-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    >
                        <h1 className="font-bold text-[30px] lg:text-[42px] leading-[36px] lg:leading-[56px] uppercase text-black">
                            Take Your Digital Marketing to the Next Level!
                        </h1>

                        <p className="font-medium text-[16px] lg:text-[18px] leading-[32px] text-black ">
                            The core essence of E-Commerce is Digital Marketing and people forget to consider it many a times. We are there for you to Digitalize you Business so that you can reach to your Target Audience 24*7 to take your Business at Next Level.
                        </p>
                        <div className="mx-auto md:mx-0">

                            <button className="btn-primary"> read more </button>

                        </div>
                    </div>
                    <div
                        className="w-full lg:w-[50%] "
                        data-aos="fade-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    >
                        <Image src="/images/hero/hero-img1.jpg" alt="hero-img" height={500} width={600} />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Herosection2
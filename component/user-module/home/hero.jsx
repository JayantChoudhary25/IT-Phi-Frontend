import React from 'react'
import Image from 'next/image'

const Herosection = () => {
  return (
    <section className="py-[200px] text-white hero-section">
      <div className="container mx-auto ">
        <div className="flex lg:flex-row flex-col-reverse lg:justify-center lg:items-center text-center lg:text-left gap-x-20 gap-y-10 pt-1 lg:pt-[100px] ">

          <div
            className="flex flex-col gap-5 justify-center z-[99] w-full lg:w-[50%] sal-example"
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <h1 className="font-bold text-[30px] lg:text-[42px] leading-[36px] lg:leading-[56px] uppercase">
            Welcome to <span className="text-[#d97d31]">IT Phi Pvt. Ltd</span> - Where Mission Meets Vision
            </h1>

            {/* <p className="font-medium text-[16px] lg:text-[18px] leading-[32px] ">
            At IT Phi Pvt. Ltd, we are dedicated to unwaveringly sticking to our mission: [Briefly articulate your mission statement]. Our relentless commitment to this mission serves as the driving force behind every aspect of our operations. We firmly believe that by staying true to our mission, we can actively contribute to the realization of your business vision.
            </p> */}
            <p className="font-medium text-[16px] lg:text-[18px] leading-[32px] ">
            At IT PHI PVT. LTD, we transcend boundaries to deliver innovative and tailored IT solutions that propel your business into the digital future. As a leading technology partner, we specialize in providing a comprehensive suite of services that optimize and elevate your digital presence.
            </p>
            <div className="mx-auto md:mx-0">

              <button className="btn-secondary hover:border-white"> Get Started </button>

            </div>
          </div>
          <div
            className="w-full lg:w-[50%] "
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <Image src="/images/hero/hero-img.png" alt="hero-img" height={500} width={600} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Herosection
import React from 'react'
import Button from '../button/Button'
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
              CREATING WEBSITES THAT MAKE YOU STOP & STARE
            </h1>

            <p className="font-medium text-[16px] lg:text-[18px] leading-[32px] ">Accusantium quam, aliquam ultricies eget tempor id, aliquam eget nibh et. Maecen aliquam, risus at semper. Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum</p>
            <div className="mx-auto md:mx-0">

              <button className="btn-secondary"> Get Started </button>

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
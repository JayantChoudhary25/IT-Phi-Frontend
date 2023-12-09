"use client";

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { BASE_URL } from '@/utils/config';
import Image from 'next/image';
import Link from 'next/link';


const AboutPage = () => {


  return (
    <>
      <div className='pt-[170px]'>

        {/*----------- section 1----------- */}
        <div className="text-black pb-[30px]">
          <h3
            className="text-[24px] md:text-[35px] font-bold leading:[30px] md:leading-[45px] text-center px-4 uppercase"
          >
            about us
          </h3>
          <div className="bg-[#54A3F2] w-[142px] mx-auto h-[3px] mt-[15px]"></div>
          <p className="my-4 text-[16px] md:text-[18px] font-normal leading-[26px] text-center capitalize">
            IT Phi Pvt. Ltd complete range of digitally enabled services drives your global digital transformation!
          </p>
        </div>

        {/*----------- section 2----------- */}
        <div className="py-[70px] bg-[#f0fbff] text-black ">
          <div className="container mx-auto">

            <div className="flex lg:flex-row flex-col-reverse text-center lg:text-left gap-x-20 gap-y-10 pt-1 lg:pt-[70px] ">

              <div
                className="flex flex-col gap-5  z-[99] w-full lg:w-[50%] sal-example"
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <h1 className="font-bold text-[30px] lg:text-[42px] leading-[36px] lg:leading-[56px] uppercase">
                  About IT Phi Pvt. Ltd
                </h1>

                <p className="font-normal text-[16px] leading-[32px] ">
                  At IT PHI Pvt. Ltd., we are passionate about harnessing the power of technology to drive innovation and empower businesses. Established with a vision to redefine the digital landscape, we strive to deliver cutting-edge solutions that transform challenges into opportunities.
                </p>
                <p className="font-normal text-[16px] leading-[32px] ">
                  IT PHI Pvt. Ltd. has evolved into a dynamic and client-centric technology firm. With a team of skilled professionals, we specialize in [Web Design, Digital Marketing, Mobile Apps ]. Our commitment to excellence and client satisfaction has been the cornerstone of our journey.
                </p>
                <div className="mx-auto md:mx-0">
                  <Link href="/contact-us">
                    <button className="btn-primary"> Contact us</button>
                  </Link>
                </div>
              </div>
              <div
                className="w-full lg:w-[50%] "
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <Image src="/images/about/about-us.jpg" alt="hero-img" height={500} width={600} />

              </div>
            </div>

          </div>
        </div>

        {/*----------- section 4----------- */}

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

        {/*----------- section 3----------- */}
        <div className="container mx-auto py-[70px] ">
          <div className="flex lg:flex-row flex-col text-center lg:text-left gap-x-10 gap-y-10 justify-center md:justify-between items-center ">

            <div
              className="w-full lg:w-[40%] "
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <Image src="/images/about/our-goals.jpg" alt="hero-img" height={200} width={550} />
            </div>
            <div
              className="flex flex-col z-[99] w-full lg:w-[50%]"
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <h1 className="font-bold text-[30px] lg:text-[42px] leading-[36px] lg:leading-[56px] uppercase mb-5">
                Our Goal
              </h1>
              <p className="font-normal text-[16px] leading-[32px]">
                <strong> Expertise : </strong> Our team comprises seasoned professionals with a deep understanding of the latest technologies.
              </p>
              <p className="font-normal text-[16px] leading-[32px]">
              <strong>Innovation : </strong>  We embrace creativity and strive to stay ahead of the curve in a rapidly evolving tech landscape.
              </p>
              <p className="font-normal text-[16px] leading-[32px]">
              <strong>Integrity : </strong>  Trust is the foundation of our relationships. We operate with transparency, honesty, and a commitment to ethical business practices.
              </p>
              <p className="font-normal text-[16px] leading-[32px]">
              <strong> Client-Centric Approach : </strong>  Your success is our priority. We work closely with clients to understand their unique needs and deliver tailored solutions.
              </p>
            </div>
          </div>
        </div>



      </div>
    </>
  )
}

export default dynamic(() => Promise.resolve(AboutPage), { ssr: false });

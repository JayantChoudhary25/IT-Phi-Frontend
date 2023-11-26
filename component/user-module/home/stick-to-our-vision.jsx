import Link from 'next/link'
import React from 'react'

const StickToVision = () => {
  return (
  <section className="bg-primary py-[30px]">
    <div className="container mx-auto">
        <div className="flex gap-x-8 gap-y-5 justify-center items-center flex-col md:flex-row">
            <p className="font-medium text-[16px] lg:text-[18px] leading-[32px] text-main">We stick to our Mission to Accomplish your business Vision</p>
            <Link href="/contact-us">
            <button className="btn-secondary hover:bg-lightBlue-500">contact us</button>
            </Link>
        </div>
    </div>
  </section>
  )
}

export default StickToVision
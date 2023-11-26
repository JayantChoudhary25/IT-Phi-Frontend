import React, { useState } from 'react'

"use client";

const ContactPage = () => {

  const [contactDetails, setContactDetails] = useState({
    fName: "",
    lName: "",
    email: "",
    number: "",
    message: "",
  })

  const inputHandler = () => {
    setContactDetails({ ...contactDetails, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className="bg-#f0fbff] py-[30px">
        <section className="pt-[80px] lg:pt-[130px] pb-[7  0px] bg-[#f0fbff]">
          <div className=" text-black py-[30px] px-20px md:px-1">
            <div className="">
              <h3
                className="text-[24px] md:text-[35px] font-bold leading:[30px] md:leading-[45px] text-center px-4 uppercase"
              >
                contact us
              </h3>
              <div className="bg-[#54A3F2] w-[142px] mx-auto h-[3px] mt-[15px]"></div>
              <p className="my-4 text-[16px] md:text-[18px] font-normal leading-[26px] text-center capitalize">
                We’re here to help. get in touch with us.
              </p>
            </div>
            <div className="flex gap-x-20  gap-y-5 justify-center items-center flex-col md:flex-row pt-4">
              <p className="text-16px md:text-[18px] font-normal leading-[26px] text-center">
                Call us at : +91-700000000
              </p>
              <div className=" bg-[#b0c8d0] rounded w-[100px] md:w-[1px] h-[1px] md:h-[40px]"></div>
              <p className=" text-16px md:text-[18px] font-normal leading-[26px] text-center">
                Email us : support@phi.com
              </p>
            </div>
          </div>
          <div className="container mx-auto">
            <div className="bg-[#fff] py-[20px] lg:py-[30px]">
              <form >
                <div className="md:grid md:grid-cols-2 flex flex-col first-letter justify-center md:gap-x-10  xl:gap-x-20 gap-y-5 lg:gap-y-10 items-center pt-[50px] w-full md:w-[80%] mx-auto px-[20px] md:px-1">
                  <div className="w-full">
                    <input type="text" placeholder='First name' value={contactDetails.fName} onChange={inputHandler} className='custom-input capitalize' required maxLength={64}/>
                  </div>
                  <div className="w-full">
                    <input type="text" placeholder='Last name' value={contactDetails.lName} onChange={inputHandler} className='custom-input capitalize' required  maxLength={64}/>
                  </div>
                  <div className="w-full">
                    <input type="text" placeholder='Email' value={contactDetails.email} onChange={inputHandler} className='custom-input' required />
                  </div>
                  <div className="w-full">
                    <input type="text" placeholder='Number' value={contactDetails.number} onChange={inputHandler} className='custom-input' required maxLength={10} minLength={10} />
                  </div>
                  <div className="col-span-2 w-full">
                    <textarea type="text" placeholder='Message' rows="10" value={contactDetails.message} onChange={inputHandler} className='custom-input capitalize' required maxLength={500}>
                    </textarea>
                  </div>
                  <div className="col-span-2 ml-auto">
                    <button className='btn-primary'>send message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default ContactPage
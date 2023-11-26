"use client";
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { BASE_URL } from '@/utils/config';
import axios from 'axios';

const ContactPage = () => {

  const [contactDetails, setContactDetails] = useState({
    fName: "",
    lName: "",
    email: "",
    number: "",
    message: "",
  })
  const [isLoading, setLoading] = useState(false)

  const refreshData = () => {
    setContactDetails({
      fName: "",
      lName: "",
      email: "",
      number: "",
      message: "",
    })
  }

  const inputHandler = (e) => {
    setContactDetails({ ...contactDetails, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await axios.post(`${BASE_URL}/post-endpoint`, contactDetails);

      console.log('POST request successful:', response);
      setLoading(false)
      refreshData()
    } catch (error) {
      console.error('There was a problem with the POST request:', error);
      setLoading(false)
    }
  }

  return (
    <>
      <div className="bg-#f0fbff] py-[30px">
        <div className="pt-[80px] lg:pt-[130px] pb-[7  0px] bg-[#f0fbff]">
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
              <form onSubmit={handleSubmit} >
                <div className="md:grid md:grid-cols-2 flex flex-col first-letter justify-center md:gap-x-10  xl:gap-x-20 gap-y-5 lg:gap-y-10 items-center pt-[50px] w-full md:w-[80%] mx-auto px-[20px] md:px-1">
                  <div className="w-full">
                    <input type="text" name="fName" placeholder='First name' value={contactDetails.fName} onChange={inputHandler} className='custom-input capitalize' required maxLength={64} />
                  </div>
                  <div className="w-full">
                    <input type="text" name="lName" placeholder='Last name' value={contactDetails.lName} onChange={inputHandler} className='custom-input capitalize' required maxLength={64} />
                  </div>
                  <div className="w-full">
                    <input type="email" name="email" placeholder='Email' value={contactDetails.email} onChange={inputHandler} className='custom-input' required />
                  </div>
                  <div className="w-full">
                    <input type='text' name="number" placeholder='Number' value={contactDetails.number} onChange={inputHandler} className='custom-input' required  pattern="[6789][0-9]{9}"  
                      title="Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9"/>
                  </div>
                  <div className="col-span-2 w-full">
                    <textarea type="text" name="message" placeholder='Message' rows="10" value={contactDetails.message} onChange={inputHandler} className='custom-input capitalize' required maxLength={500}>
                    </textarea>
                  </div>
                  <div className="col-span-2 ml-auto">
                    <button className='btn-primary' type='submit' disabled={isLoading}> {isLoading ? "Loading ..." :  "send message" }</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default dynamic(() => Promise.resolve(ContactPage), { ssr: false });

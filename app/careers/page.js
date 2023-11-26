"use client";
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { BASE_URL } from '@/utils/config';
import axios from 'axios';

const CareersPage = () => {

  const [applicatinDetails, setApplicatinDetails] = useState({
    fName: "",
    city: "",
    email: "",
    linkedin: "",
    jobs: "",
  })
  const [isLoading, setLoading] = useState(false)

  const refreshData = () => {
    setApplicatinDetails({
      fName: "",
      city: "",
      email: "",
      linkedin: "",
      jobs: "",
    })
  }

  const inputHandler = (e) => {
    setApplicatinDetails({ ...applicatinDetails, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await axios.post(`${BASE_URL}/post-endpoint`, applicatinDetails);

      console.log('POST request successful:', response);
      setLoading(false)
      refreshData()
    } catch (error) {
      console.error('There was a problem with the POST request:', error);
      setLoading(false)
    }
  }

  const jobsOptons = ["front end developer", "junior developer" , "designer", "tech lead", "software developer", "marketing manager"]

  return (
    <>
      <section className="bg-#f0fbff] py-[100px] lg:py-[170px]">
        <div className="container mx-auto">
          <h3
            className="text-[24px] md:text-[35px] font-bold leading:[30px] md:leading-[45px] text-center px-4 uppercase"
          >
            careers
          </h3>
          <div className="bg-[#54A3F2] w-[142px] mx-auto h-[3px] mt-[15px]"></div>
          <p className="my-4 text-[16px] md:text-[18px] font-normal leading-[26px] text-center capitalize">
            Join Our Team
          </p>
        </div>
        <div className="flex gap-x-10 bg-[#f4fbfe] gap-y-5 justify-center items-center flex-col md:flex-row my-8 py-[30px]">
          <p className="text-16px md:text-[18px] font-normal leading-[26px] text-center">
            Are you interested in working with us?
          </p>
          <div className=" bg-[#b0c8d0] rounded w-[100px] md:w-[1px] h-[1px] md:h-[40px]"></div>
          <button className='btn-primary'> Apply now</button>
        </div>
        <div className=" pb-[70px] text-black">

          <div className="container mx-auto">
            <div className="bg-primary text-main py-[50px] rounded">
              <form onSubmit={handleSubmit} >
                <div className="md:grid md:grid-cols-2 flex flex-col first-letter justify-center md:gap-x-10  xl:gap-x-20 gap-y-5 lg:gap-y-10 items-center pt-[50px] w-full md:w-[80%] mx-auto px-[20px] md:px-1">
                  <div className="col-span-2 w-full pb-[20px]">
                    <h4
                      className="text-[22px] md:text-[30px] font-semibold leading:[42px] uppercase"
                    >
                      Application Form
                    </h4>
                    <p className="text-16px md:text-[18x] font-medium leading-[26px] mt-1">
                    Thank you for your interest in joining the It Phi Pvt. ltd. Lean team!
                    </p>
                  </div>
                  <div className="w-full">
                    <input type="text" name="fName" placeholder='First name' value={applicatinDetails.fName} onChange={inputHandler} className='user-input capitalize' required maxLength={64} />
                  </div>
                  <div className="w-full">
                    <input type="text" name="city" placeholder='City' value={applicatinDetails.city} onChange={inputHandler} className='user-input capitalize' required maxLength={64} />
                  </div>
                  <div className="w-full">
                    <input type="email" name="email" placeholder='Email' value={applicatinDetails.email} onChange={inputHandler} className='user-input' required />
                  </div>
                  <div className="w-full">
                    <input type='text' name="number" placeholder='Number' value={applicatinDetails.number} onChange={inputHandler} className='user-input' required pattern="[6789][0-9]{9}"
                      title="Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9" />
                  </div>
                  <div className="w-full">
                    <input type='text' name="linkedin" placeholder='Linkedin user or url' value={applicatinDetails.linkedin} onChange={inputHandler} className='user-input' required />
                  </div>
                  <div className="w-full">
                    <select className='user-input capitalize' name="jobs" value={applicatinDetails.jobs} onChange={inputHandler} >
                      <option className='text-gray'> select jobs </option>
                      {jobsOptons.map((jobs)=>(
                      <option value={jobs}> {jobs}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-2 ml-auto">
                    <button className='btn-secondary hover:bg-[#3cc1df] hover:border-white' type='submit' disabled={isLoading}> {isLoading ? "Loading ..." : "submit"}</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default dynamic(() => Promise.resolve(CareersPage), { ssr: false });

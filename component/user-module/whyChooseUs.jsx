import Image from 'next/image'
import React from 'react'

const WhyChooseUs = () => {
    return (
        <section id="why" class="about_area py-[50px]">
            <div class="container">
                <div class="grid grid-cols-2 justify-end gap-x-20">
                    <div class="w-full ">
                        <div class="about_content mx-4 pt-11 lg:pt-15 lg:pb-15">
                            <div class="section_title pb-9">
                                <h5 class="text-base md:text-xl font-semibold text-theme-color">Why Choose Us</h5>
                                <h4 class="text-2xl md:text-4xl font-bold mt-4">Your Goal is Our Achievement</h4>
                            </div>
                            <p>We are dedicated to making your goals a reality, ensuring that your journey is seamless and successful. </p>
                            <ul class="about_list pt-3">
                                <li class="flex mt-5">
                                    <div class="about_check">
                                        <i class="lni lni-checkmark-circle"></i>
                                    </div>
                                    <div class="about_list_content pl-5 pr-2">
                                        <p>With a team of experienced professionals, we bring a wealth of knowledge and expertise to the table. Our commitment to excellence is evident in every project we undertake. Trust us to navigate the complexities of the digital landscape with precision.</p>
                                    </div>
                                </li>
                                <li class="flex mt-5">
                                    <div class="about_check">
                                        <i class="lni lni-checkmark-circle"></i>
                                    </div>
                                    <div class="about_list_content pl-5 pr-2">
                                        <p> Your satisfaction is at the heart of everything we do. We prioritize your unique needs and tailor solutions that align perfectly with your objectives. </p>
                                    </div>
                                </li>
                                <li class="flex mt-5">
                                    <div class="about_check">
                                        <i class="lni lni-checkmark-circle"></i>
                                    </div>
                                    <div class="about_list_content pl-5 pr-2">
                                        <p>  Our commitment to innovation ensures that you benefit from cutting-edge solutions, keeping you at the forefront of technological advancements. </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="about_image flex items-end justify-end">
                        <div class="image lg:pr-13">
                            <Image src="/images/about/why-choose.jpg" alt="about" height={500} width={500} />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default WhyChooseUs
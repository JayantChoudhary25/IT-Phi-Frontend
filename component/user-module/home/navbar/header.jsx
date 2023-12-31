"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'
import Link from "next/link";
import Image from "next/image";

const Header = () => {

  const router = useRouter();
  const pathname = usePathname()
  const [isShow, setShow] = useState(false);
  const handleShow = ({ value }) => {
    setShow(value);
  };
  console.log(pathname)

  const navItems = [
    {
      id: 0,
      menu: "home",
      path: "/"
    },
    {
      id: 1,
      menu: "about us",
      path: "/about-us"
    },
    {
      id: 2,
      menu: "services",
      path: "/services"
    },
    {
      id: 3,
      menu: "careers",
      path: "/careers"
    },
    // {
    //   id: 4,
    //   menu: "contact us",
    //   path: "/contact-us"
    // },
    ,
  ];

  const handleClick = (path) => {
     router.push(path);
    setShow(false);
  }

  return (
    <>
      <main className="h-auto flex flex-col justify-center items-center bg-main fixed top-0 left-0 right-0" id="header">
        <div className=" w-full">
          <div className="container mx-auto">
            <div className="lg:flex justify-between items-center hidden py-[15px]">
              <div className="md:w-[120px] xl:w-auto z-[999]">
                <Link href="/">
                  <Image src="/svg/logo/logo-black.svg" alt="Logo." className="" 
                   width={150}
                   height={70} />
                </Link>
              </div>
              <div className="flex lg:gap-x-10  xl:gap-x-20  items-center">
                <ul className="md:flex flex-row gap-14  lg:gap-x-10  xl:gap-x-10 hidden z-[999]">
                  {navItems.map((nav) => (
                    <Link href={nav.path}>
                      <li
                        className={`text-black text-[15px] font-semibold leading-normal menu-list  uppercase cursor-pointer ${ pathname === nav.path ? "isActive" : ""}`}
                      >
                        {nav.menu}
                      </li>
                    </Link>
                  ))}
                </ul>
                <div className="">
                  <Link href="#contact">
                    <button className="btn-primary">contact us</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*------------------ mobile start ------------------*/}
        <div className="container mx-auto md:absolute md:top-0 ">
          <div className="lg:hidden flex justify-between items-center w-full px-4 py-4 z-[999] ">
            <div className="w-[100px] ">
              <Link href="/">
                <Image src="/svg/logo/logo-black.svg" alt="Logo."
                 width={150}
                   height={70}  />
              </Link>
              {/* <h1 className="text-primary text-[30px] font-bold whitespace-nowrap">IT Phi Pvt. Ltd</h1> */}
            </div>
            <div
              className=" h-[35px] w-[35px] cursor-pointer z-[999]"
              onClick={() => handleShow({ value: true })}
            >
              <Image src="/svg/menu.svg" alt="menu"  width={50}
                   height={50}/>
            </div>
          </div>
          {isShow && (
            <div className="absolute  left-0 top-0 w-full h-auto  bg-[#f4fbfe] lg:hidden  z-[999]">
              <div
                className=" h-[35px] w-[35px]  cursor-pointer pt-4 mr-5 ml-auto z-[999]"
                onClick={() => handleShow({ value: false })}
              >
                <Image src="/svg/close.svg" alt="close"  width={50}
                   height={50}/>
              </div>
              <ul className="flex flex-col gap-x-10 gap-y-8  px-[40px] py-8">
                {navItems.map((nav) => (
                  // <Link href={nav.path}>
                    <li className="text-black  text-[16px] font-semibold leading-normal uppercase  cursor-pointer hover:text-primary "
                    onClick={() => handleClick(nav.path)}>
                      {nav.menu}
                    </li>
                  // </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
        {/*------------------ mobile end ------------------*/}

      </main>
    </>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });

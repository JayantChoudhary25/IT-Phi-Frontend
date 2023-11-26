'use client'
import {forwardRef, useState } from "react";
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import Enquiry from "../dashboard-component/enquiry";
import ApplyJobs from "../dashboard-component/apply-jobs";


const menuList = [
    {
        id: 1,
        label: "Dashboard",
        component: "",
        icon: `fa fa-home`,
        path: "/admin-dashboard",
    },
    {
        id: 5,
        label: "apply for job",
        component: <ApplyJobs/>,
    },
    {
        id: 8,
        label: "Enquiry",
        component: <Enquiry />
    },
];

const SideBar = forwardRef(({ showNav }, ref) => {
    const router = useRouter();
    const [show, setShow] = useState("Dashboard");
    const [labelId, setLabelId] = useState(1);
    const [activeSubMenuId, setActiveSubMenuId] = useState(null);
    const pathname = usePathname()

    const handleClick = (label, id) => {
        setShow(label);
        setLabelId(id);
    };

    const handleSubMenuToggle = (id) => {
        if (activeSubMenuId === id) {
            setActiveSubMenuId(null);
        } else {
            setActiveSubMenuId(id);
        }
    };

    const handleSignout = () => {
        router.push("/admin/sign-in");
    };

    return (
        <>
            <div className="flex ">
                <div ref={ref} className="h-screen w-[270px] bg-[#1e2433] py-[20px] text-main">
                    <div className="">
                        <img
                            src="/svg/logo/logo-white.svg"
                            width={150}
                            height={100}
                            alt="login_img"
                            className="mx-auto"
                        />
                    </div>

                    <div className="flex justify-center items-center whitespace-pre-wrap py-[30px]">
                        <h1 className="text-xl font-semibold ">
                            Admin Dashboard
                        </h1>
                    </div>
                    <div className="bg-white h-[1px] w-[70%] mx-auto"></div>

                    <div className="flex flex-col pt-[60px] gap-5">

                        {menuList.map((items, inx) => (
                            // <Link href={items.path ? items.path : "#"} key={inx}>
                            <div
                                className={`pl-6 py-3 mx-5 rounded-md justify-center cursor-pointer  flex items-center   transition-colors font-semibold
                 ${items?.id === labelId
                                        ? "bg-[#343a47] "
                                        : "hover:bg-[#343a47] hover:text-white hover:rounded-md "
                                    }`}
                                onClick={() => handleClick(items.label, items.id)}
                            >
                                <div className="w-full">
                                    {items.submenu ? (
                                        <p
                                            className=" capitalize whitespace-nowrap flex gap-8 "
                                            onClick={() => handleSubMenuToggle(items.id)}
                                        >
                                            {items.label}
                                            <span className="submenu-toggle ">
                                            </span>
                                        </p>
                                    ) : (
                                        <p className=" capitalize whitespace-nowrap ">
                                            {items.label}
                                        </p>
                                    )}
                                </div>
                            </div>
                            // </Link>
                        ))}

                        <div className="bg-white h-[1px] w-[70%] mx-auto mt-[140px]"></div>

                        <div
                            className={` pl-6 py-3 mx-5 rounded text-center cursor-pointer my-3 flex items-center transition-colors  font-semibold 
            ${pathname == "admin/sign-in"
                                    ? "bg-[#343a47] "
                                    : "hover:bg-[#343a47] hover:text-white hover:rounded-md"
                                }`}
                            onClick={handleSignout}
                        >
                            <div className="mr-2">
                                {/* <CreditCardIcon className="h-5 w-5" /> */}
                            </div>
                            <div>
                                <p>Log Out</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container mx-auto py-[20px]">
                    {
                        menuList.map((dashboardPage, inx) => (
                            <>
                                {labelId === dashboardPage.id &&
                                        dashboardPage.component
                                }
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    );
});

SideBar.displayName = "SideBar";

export default SideBar;

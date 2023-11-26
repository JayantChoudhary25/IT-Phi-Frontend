"use client";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

import {
    MagnifyingGlassPlusIcon,
    TrashIcon,
    PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { BASE_URL } from "@/utils/config";
import axios from "axios";


const headItems = ["S. No", "Full Name", "email", "number", "message", "action"];

const ApplyJobs = () => {

    const [jobREquest, setJobREquest] = useState([]);
    const [isRefresh, setRefresh] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const refreshData = () => {
        setRefresh(!isRefresh)
    }
    useEffect(() => {
        getAllData()
    }, [isRefresh])

    const getAllData = async (e) => {
        setLoading(true)
        try {
            const response = await axios.get(`${BASE_URL}/post-endpoint`);
            if (response.status === 200) {
                setJobREquest(response?.data)
                setLoading(false)
            }
            else {
                setLoading(false)
                return
            }
        } catch (error) {
            console.error('There was a problem with the POST request:', error);
            setLoading(false)
        }
    }

    return (
        <>
            <div className="flex justify-between items-center pt-4 px-10 border border-[#f3f3f3] rounded-lg bg-[#f3f3f3] h-[100px] ">
                <h2 className="text-2xl font-semibold pb-4">Enquiry List </h2>
                <h2>Welcome Back, Admin</h2>
            </div>

            <table class="table-auto bg-[#f3f3f3] rounded-md mt-5  relative  w-full">
                <thead className="">
                    <tr className="bg-[#f3f3f3] text-gray-400 text-sm text-start flex gap-20 items-center ">
                        {headItems.map((items, inx) => (
                            <th
                                className="text-start py-5 text-[16px] font-medium px-5 capitalize text-black"
                                key={inx}
                            >
                                {items}
                            </th>
                        ))}
                    </tr>
                </thead>

                {jobREquest.map((items, index) => {
                    return (
                        <tbody>
                            <label>
                                <tr
                                    className="flex gap-48 cursor-pointer"
                                >
                                    <td className="py-5 text-[18px]">
                                    </td>
                                    <td className="py-5 text-[18px] ">
                                        <p className=" bg-primary p-1 text-center rounded-xl text-green-700 w-20">
                                            selling
                                        </p>
                                    </td>
                                    <td className=" flex">
                                        <button className="flex">
                                            <MagnifyingGlassPlusIcon className="cursor-pointer h-6 w-6 text-gray-500 m-2" />

                                            <button >
                                                <PencilSquareIcon className="cursor-pointer h-6 w-6  text-sky-600 m-2 " />
                                            </button>
                                            <button
                                                type="button"
                                                className="rounded-md bg-gray-300 bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                                            >
                                                <TrashIcon className="cursor-pointer h-6 w-6 text-red-800   " />
                                            </button>
                                        </button>
                                    </td>
                                </tr>
                            </label>
                        </tbody>
                    );
                })}
            </table>
        </>
    );
};

export default dynamic(() => Promise.resolve(ApplyJobs), { ssr: false });


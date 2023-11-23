"use client";
import FollowUs from "@/component/followUs";
import Herosection from "@/component/hero";
import NewProduct from "@/component/new-product/newProduct";
import NewProduct2 from "@/component/new-product/newProduct2";
import Reviews from "@/component/reviews";
import Section2 from "@/component/section2";

import React, { useState } from "react";

export default function Home() {
  const [isShow, setShow] = useState(false);

  const handleShow = ({ value }) => {
    setShow(value);
  };

  const newProductItems = [
    {
      id: 1,
      url: "/images/watch1.png",
      color: "brown",
    },
    {
      id: 2,
      url: "/images/watch2.png",
      color: "blue",
    },
    {
      id: 3,
      url: "/images/watch3.png",
      color: "black",
    },
    {
      id: 3,
      url: "/images/watch4.png",
      color: "orange",
    },
  ];

  const bestSellersItems = [
    {
      id: 1,
      url: "/images/watch3.png",
      color: "black",
    },
    {
      id: 2,
      url: "/images/watch7.png",
      color: "red",
    },
    {
      id: 3,
      url: "/images/watch6.png",
      color: "green",
    },
    {
      id: 3,
      url: "/images/watch2.png",
      color: "blue",
    },
  ];

  return (
    <>
      <Herosection handleShow={handleShow} isShow={isShow} />
      <Section2 />
      <NewProduct cardItems={newProductItems}  title="new products"/>
      <NewProduct2 />
      <NewProduct cardItems={bestSellersItems} title="best Sellers" />
      <Reviews />
      <FollowUs/>
    </>
  );
}


"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import 'aos/dist/aos.css';
import Header from "@/component/navbar/header";
const inter = Inter({ subsets: ["latin"] });

import  {metadata}  from './metadata';


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/svg/logo.svg" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />

<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>

      </head>
      <body className={inter.className}>
      <Header />
        {children}
      </body>
    </html>
  );
}

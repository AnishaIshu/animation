"use client";

import Image from "next/image";
import React from "react";

// icon
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='px-10 py-3 select-none'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center tracking-widest gap-2'>
          <Image width={40} height={200} src='/images/navbar/logo.svg' alt='' />
          <h1 className='text-xl font-medium text-[#ffffff] tracking-widest'>
            SQUARESPACE
          </h1>
        </div>

        <div className='text-[#ffffff] text-[15px] tracking-normal font-semibold flex gap-8'>
          <div className='flex items-center'>
            <span>PRODUCTS</span>
            <IoIosArrowDown className='text-base' />
          </div>
          <span>TEMPLATES</span>

          <div className='flex items-center'>
            <span>RESOURCES</span>
            <IoIosArrowDown className='text-base' />
          </div>
        </div>

        <div className='flex items-center gap-10'>
          <div className='text-[#ffffff] text-[14.5px] font-semibold cursor-pointer'>
            LOG IN
          </div>
          <div className='px-5 py-5 text-[14.5px] font-bold cursor-pointer text-[#363636] text-center bg-[#ffffff] hover:bg-[#f8f7f7] w-[170px]'>
            GET STARTED
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

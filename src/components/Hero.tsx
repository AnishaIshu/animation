import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-between mx-10">
      <div className='text-[#ffffff] mt-48'>
        <h6 className='font-semibold text-[18px]'>CREATE YOUR WEBSITE</h6>
        <h1 className='font-semibold text-[5.5rem] leading-[82px] mt-3'>
          The leader in <br /> website design
        </h1>

        <p className='leading-6 font-semibold text-[21px] mt-10'>
          Stand out online with a professional website,
          <br /> online store, or portfolio. With Squarespace,
          <br /> you can turn any idea into a reality.
        </p>

        <div className='px-5 py-5 text-[14.5px] mt-10 font-bold cursor-pointer text-[#363636] text-center bg-[#ffffff] hover:bg-[#f8f7f7] w-[170px]'>
          GET STARTED
        </div>
      </div>

      <div className="h-[600px] mt-20 overflow-auto mr-12">
        <Image src="/images/heroSection/heroImg.png" width={980} height={0} alt="" />
      </div>
    </div>
  );
};

export default Hero;

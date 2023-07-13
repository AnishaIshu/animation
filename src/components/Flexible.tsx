import Image from 'next/image'
import React from 'react'

const Flexible = () => {
  return (
    <div className='w-[100%] py-24'>
      <div>
        <h1 className='text-[#fff] text-6xl font-semibold text-center'>Flexible portfolios</h1>
        <p className='text-[#fff] text-center text-xl font-semibold mt-5'>Present your work using Squarespace’s professional portfolio <br/> designs. Display projects in customizable galleries and add <br/> password-protected pages to share private work with clients.</p>
        <h2 className='text-[#fff] text-xl mt-7 hoverUnderline font-semibold w-60 cursor-pointer hoverUnderlineFlex m-auto text-center'>CREATE A PORTFOLIO</h2>
      </div>



      <div className='mx-40 my-16'>
        <Image src="/images/flexible/bgFlexible.jpg" width={200} height={10} className='w-[100%] h-[850px]' alt="" />

        <div>
     
            <video src="/imager/flexible/flexible.mp4"  width={300} height={200}></video>
        </div>
      </div>
    </div>
  )
}

export default Flexible

"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';



// ICON
import { ImArrowRight2 } from 'react-icons/im';
import Image from 'next/image';

const AwardWinning = () => {
    const SlideImages = [
        {
            id:1,
          img1 : "/images/slier/slieOne.jpg"
        },
        {
            id:2,
            img2 : "/images/slier/slieOne.jpg"
          },
          {
            id:3,
            img3 : "/images/slier/slieOne.jpg"
          },
          {
            id:4,
            img4 : "/images/slier/slieOne.jpg"
          },
          {
            id:5,
            img5 : "/images/slier/slieOne.jpg"
          },
          {
            id:6,
            img6 : "/images/slier/slieOne.jpg"
          }
    ]
  return (
    <div className='m-auto w-[100%] py-20 select-none'>
        <div className='text-center'>
            <h1 className='font-semibold text-6xl text-center'>Award-winning<br/>web designs</h1>
            <h3  className='font-medium text-2xl text-center my-8' >Choose from an unrivaled set of best-in-class website <br/> templates. Customize the design to fit your personal <br/> style and professional needs.</h3>

            <div className='flex items-center justify-center gap-14'>
                <div className='gap-2 flex items-center justify-center'>
                    <h1 className='font-semibold text-xl hoverUnderline cursor-pointer'>BROWSE TEMPLATES</h1>
                    <ImArrowRight2 />
                </div>
                <h1 className='font-semibold text-xl hoverUnderline cursor-pointer'>LEARN MORE</h1>
            </div>
        </div>


<div className='my-14'>
<Swiper
    modules={[ Autoplay, Scrollbar, A11y]}
    spaceBetween={20}
    slidesPerView={3}
    centeredSlides={true}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >
    <SwiperSlide>
        <div>
        <Image className='border cursor-grab' src="/images/slider/slideOne.jpg" width={1000} height={500} alt="" />
        <h1 className='hoverUnderline text-[#000] my-5 w-32 text-center font-medium text-xl'>BEAUMONT</h1>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <Image className='border cursor-grab' src="/images/slider/slideTwo.jpg" width={1000} height={500} alt="" />
        <h1 className='hoverUnderline text-[#000] my-5 w-32 text-center font-medium text-xl'>MARU</h1>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <Image className='border cursor-grab' src="/images/slider/slideThree.jpg" width={800} height={500} alt="" />
        <h1 className='hoverUnderline text-[#000] my-5 w-32 text-center font-medium text-xl'>SOUTO</h1>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <Image className='border cursor-grab' src="/images/slider/slideFour.jpg" width={800} height={500} alt="" />
        <h1 className='hoverUnderline text-[#000] my-5 w-32 text-center font-medium text-xl'>CROSBY</h1>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <Image className='border cursor-grab' src="/images/slider/slideFive.jpg" width={800} height={500} alt="" />
        <h1 className='hoverUnderline text-[#000] my-5 w-32 text-center font-medium text-xl'>MATSUYA</h1>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <Image className='border cursor-grab' src="/images/slider/slideSix.jpg" width={800} height={500} alt="" />
        <h1 className='hoverUnderline text-[#000] my-5 w-32 text-center font-medium text-xl'>VANCE</h1>
        </div>
    </SwiperSlide>
    </Swiper>

</div>

      
    </div>
  )
}

export default AwardWinning

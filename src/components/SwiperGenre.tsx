import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from 'react-router'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import {Navigation } from 'swiper/modules';


interface SwiperProps {
  data: string[]
  type: string
}

export default function SwiperGenre({data, type}: SwiperProps) {
  return (
      <div className="lg:mx-[-3rem] mx-[-0.8rem]">
        <Swiper
        breakpoints={{
            0: { slidesPerView: 3.5, slidesOffsetBefore: 5, slidesOffsetAfter:5 },
            640: { slidesPerView: 4.5, slidesOffsetBefore: 5, slidesOffsetAfter:5 },
            1024: { slidesPerView: 6, slidesOffsetBefore: 48, slidesOffsetAfter:48 },
            1440: { slidesPerView:9, slidesOffsetBefore: 48, slidesOffsetAfter:48  },
            }}
          navigation={{nextEl:'.swiper-button-next', prevEl:'.swiper-button-prev'}}
          slidesPerGroup={5}
          spaceBetween={5}
          pagination={{
            clickable: false,
          }}
          modules={[Navigation]}
          className=""
        >
            {data.map((d) => (

              <SwiperSlide>
                <Link to={`/${type}/genre/${d.toLowerCase()}`}>
                <div className=" flex items-center justify-center lg:p-3 p-1  border border-[var(--red)] hover:text-[var(--redhover)] rounded-full">
                  <p className="lg:text-[1em] text-[0.8em] text-center">{d}</p>
                </div>
                </Link>
              </SwiperSlide>
            ))}
             <div className=" invisible lg:visible swiper-button-next">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d70c38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            </div>
            <div className=" invisible lg:visible swiper-button-prev">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d70c38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
            </div>
        </Swiper>

      </div>

  );
}

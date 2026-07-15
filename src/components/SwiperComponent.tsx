import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';
import {Link} from 'react-router'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import {Navigation } from 'swiper/modules';

interface data {
  type: string,
  thumbnail: string,
  slug:string
}

interface SwiperProps {
  data: data[],
  orientation:string
  perview?: number
}



export default function SwiperComponent({data, orientation, perview}: SwiperProps) {
  return (
      <div className="lg:mx-[-3rem] mx-[-0.8rem] ">
        <Swiper
          breakpoints={{
            0: { slidesPerView: perview ? 1 : orientation === 'paysage' ? 2 : 3, slidesOffsetBefore: 0, slidesOffsetAfter:0, slidesPerGroup: perview ? 1 : 2 },
            640: { slidesPerView: perview ? 2 : orientation === 'paysage' ? 2 : 3, slidesOffsetBefore: 10, slidesOffsetAfter:10, slidesPerGroup: perview ? 2 : 2  },
            1024: { slidesPerView: perview ? perview : orientation === 'paysage' ? 6.5 : 8.5, slidesOffsetBefore: 48, slidesOffsetAfter:48, slidesPerGroup: perview ? perview  : 6 },
            1440: { slidesPerView:perview ? perview : orientation === 'paysage' ? 6.5 : 8.5, slidesOffsetBefore: 48, slidesOffsetAfter:48, slidesPerGroup: perview ? perview : 6 },
            }}
          navigation={{nextEl:'.swiper-button-next', prevEl:'.swiper-button-prev'}}
          spaceBetween={5}
          pagination={{
            clickable: false,
          }}
          modules={[Navigation]}
          className=""
        >
            {data.map((d) => (

              <SwiperSlide>
                <Link to={`/details/${d.type}/${d.slug}`} className="w-full">
                  <img loading='lazy' src={`${d.thumbnail}`} alt="" className={`  object-cover rounded-sm max-w-full h-auto  ${orientation === 'portrait' ? 'aspect-3/4' : 'aspect-16/9'}`} />
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

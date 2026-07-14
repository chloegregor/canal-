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
      <div className="mx-[-3rem]">
        <Swiper
          breakpoints={{
            0: { slidesPerView: perview ? 1 : orientation === 'paysage' ? 2 : 3 },
            640: { slidesPerView: perview ? 2 : orientation === 'paysage' ? 2 : 3 },
            1024: { slidesPerView: perview ? perview : orientation === 'paysage' ? 6.5 : 8.5 },
            1440: { slidesPerView:perview ? perview : orientation === 'paysage' ? 6.5 : 8.5 },
            }}
          navigation={true}
          slidesOffsetBefore={48}
          slidesOffsetAfter={48}
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
                <Link to={`/${d.type}/${d.slug}`} className="">
                  <img loading='lazy' src={`${d.thumbnail}`} alt="" className={`  object-cover rounded-sm w-full h-auto  ${orientation === 'portrait' ? 'aspect-3/4' : 'aspect-16/9'}`} />
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>

      </div>

  );
}

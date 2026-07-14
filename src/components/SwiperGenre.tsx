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
      <div className="mx-[-3rem]">
        <Swiper
        breakpoints={{
            0: { slidesPerView: 3},
            640: { slidesPerView: 4},
            1024: { slidesPerView: 6},
            1440: { slidesPerView:9 },
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
                <Link to={`/${type}/genre/${d.toLowerCase()}`}>
                <div className=" flex items-center justify-center lg:p-3 p-1  border border-[var(--red)] hover:text-[var(--redhover)] rounded-full">
                  <p className="lg:text-[1em] text-[0.8em] text-center">{d}</p>
                </div>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>

      </div>

  );
}

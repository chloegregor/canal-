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
          navigation={true}
          slidesOffsetBefore={48}
          slidesOffsetAfter={48}
          slidesPerView={9}
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
                <div className=" flex items-center justify-center p-3  border border-[var(--red)] hover:text-[var(--redhover)] rounded-full">
                  <p className="text-[1.2em]  text-center">{d}</p>
                </div>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>

      </div>

  );
}

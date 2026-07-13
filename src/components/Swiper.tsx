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
}

export default function SwiperComponent({data, orientation}: SwiperProps) {
  return (
      <div className="mx-[-3rem]">
        <Swiper
          navigation={true}
          slidesOffsetBefore={48}
          slidesOffsetAfter={48}
          slidesPerView={orientation === 'paysage' ? 6.5 : 8.5}
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
                <Link to={`/${d.type}/${d.slug}`}>
                  <img src={`${d.thumbnail}`} alt="" className={`  w-full h-auto  ${orientation === 'portrait' ? 'aspect-3/4' : 'aspect-16/9'}`} />
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>

      </div>

  );
}

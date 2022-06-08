import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { dataPesawat } from '../assets';
const SwiperComp = () => {
    return (
        <Swiper
            // install Swiper modules

            modules={[Navigation, Pagination, Scrollbar, A11y,]}
            spaceBetween={0}
            slidesPerView={2}
            autoplay={true}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >

            {
                dataPesawat.map((item, i) => (
                    <SwiperSlide>
                        <div className='SwiperContentMain overflow-hidden flex items-center cursor-pointer  relative rounded-3xl scale-[.8] h-[400px] w-[650px] shadow-lg flex-col justify-between '>
                            <div className='w-full h-full flex items-center justify-center '>

                                <img src={item.img} className={'  duration-200'} alt={item.title} />
                            </div>

                            <div className='bg-white w-full bottom-0 rounded-b-3xl py-8 flex items-center justify-center text-3xl font-bold'>
                                {item.title}
                            </div>

                        </div>
                    </SwiperSlide>
                ))
            }






        </Swiper>
    )
}

export default SwiperComp
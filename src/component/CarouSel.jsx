import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export default function CarouSel() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div
                        className='w-full bg-center bg-cover h-[38rem]'
                        style={{
                            backgroundImage: `url("https://cache.marriott.com/content/dam/marriott-renditions/DACSI/dacsi-frontsesk-reception-3251-hor-pano.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1920px")`,
                        }}
                    >
                        <div className='flex items-center justify-center w-full h-full'>
                            <div className='text-center'>
                                <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
                                    Build your new <span class='text-blue-400'>Saas</span> Project
                                </h1>
                                <br />

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className='w-full bg-center bg-cover h-[38rem]'
                        style={{
                            backgroundImage: `url("https://cache.marriott.com/content/dam/marriott-renditions/DACSI/dacsi-garden-kitchen-3240-hor-pano.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1920px")`,
                        }}
                    >
                        <div className='flex items-center justify-center w-full h-full '>
                            <div className='text-center'>
                                <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
                                    Build your new <span class='text-blue-400'>Saas</span> Project
                                </h1>
                                <br />

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className='w-full bg-center bg-cover h-[38rem]'
                        style={{
                            backgroundImage: `url("https://cache.marriott.com/content/dam/marriott-renditions/DACSI/dacsi-king-premier-guestroom-3248-hor-pano.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1920px:*")`,
                        }}
                    >
                        <div className='flex items-center justify-center w-full h-full '>
                            <div className='text-center'>
                                <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
                                    Build your new <span class='text-blue-400'>Saas</span> Project
                                </h1>
                                <br />

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className='w-full bg-center bg-cover h-[38rem]'
                        style={{
                            backgroundImage: `url("https://i.ibb.co/z20zjSC/hammocks-near-pool.jpg")`,
                        }}
                    >
                        <div className='flex items-center justify-center w-full h-full '>
                            <div className='text-center'>
                                <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
                                    Build your new <span class='text-blue-400'>Saas</span> Project
                                </h1>
                                <br />

                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}

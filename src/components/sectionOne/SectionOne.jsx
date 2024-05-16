import React from 'react'
import './SectionOne.css'
import Slider from '../slider/Slider'
import 'swiper/css/pagination';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const SectionOne = () => {
    return (
        <>
            <section className="section-one">
                <div className="wrap">
                    <div className="section-one-inner">
                        <div className="section-one-content">
                            <p className="content-title">Зимняя распродажа</p>
                            <p className="content-price">СКИДКИ ДО 90%</p>
                            <button className="content-btn">СМОТРЕТЬ МОДЕЛИ</button>
                        </div>

                    <div className="swiper-inner">
                        <Swiper
                        className='swipe'
                            // install Swiper modules
                            modules={[ Pagination]}
                            spaceBetween={50}
                            slidesPerView={1}
                            autoplay={true}
                            loop={true}

                            pagination={{ clickable: true, width: 10}}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            >
                            <SwiperSlide>
                                <Slider/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Slider/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Slider/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Slider/>
                            </SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionOne
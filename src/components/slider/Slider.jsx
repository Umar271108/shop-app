import React from 'react'
import './Slider.css'
import { useSwiper } from 'swiper/react';
import { useSwiperSlide } from 'swiper/react';
import Shoes from '../../assets/images/running_shoes_PNG5823.png'

const Slider = () => {
    const swiper = useSwiper();
    const swiperSlide = useSwiperSlide();

    return (
        <>
            <div className="slider">
                 <img src={Shoes} alt="" />
                 <div className="slider-text-inner">
                    <div className="slider-text">9 900 ₽ </div>
                    <div className="slider-price">1 900 ₽ </div>
                 </div>
            </div>
        </>
    )
}

export default Slider
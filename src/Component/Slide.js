import React, { useState } from 'react';
import { SlideContainer  } from '../style/SlideStyle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../style/Slide.css';
import img1 from "../img/background.jpg";


function ThirdSection(props) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleWheel = (event) => {
        const direction = event.deltaY > 0 ? 1 : -1;

        setCurrentSlide((prevSlide) => {
            const newSlide = prevSlide + direction;
            return Math.min(Math.max(newSlide, 0), 8);
        });
    };

    return (
        <SlideContainer>
            <Swiper
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper"
                onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
                onWheel={handleWheel}
            >
                <SwiperSlide>
                    <img src={img1} alt='img1'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt='img1'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt='img1'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt='img1'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt='img1'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt='img1'/>
                </SwiperSlide>
            
            </Swiper>
            {/* <span>텍스트{currentSlide + 1}</span> */}
        </SlideContainer>
    );
}

export default ThirdSection;

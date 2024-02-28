import React, { useState } from 'react';
import { ThirdContainer } from '../style/ThirdStyle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../style/Third.css';
import img1 from "../img/background.jpg";
import img2 from "../img/hand.jpg";
import img3 from "../img/post.jpg";

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
        <ThirdContainer>
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
                    <img src={img2} alt='img1'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt='img1'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt='img1'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt='img1'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt='img1'/>
                </SwiperSlide>
            
            </Swiper>
            <span>텍스트{currentSlide + 1}</span>
        </ThirdContainer>
    );
}

export default ThirdSection;

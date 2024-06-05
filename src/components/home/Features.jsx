import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import TutorialCard from '../common/TutorialCard';
import { tutorials } from '../../constant';

const Features = () => {

    return (
        <>
            <div className="container padding-equal">
                <div className="feature-d">
                    <div className="heading-d text-center mb-5">
                        <span className="title">Quality features</span>
                        <h2 className="sub-heading">Tutorials that people love most</h2>
                    </div>
                    <div className="content-d">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            className="mySwiper"
                        >
                            {tutorials && tutorials?.map((tutorial, index) => (
                                <SwiperSlide key={index}>
                                    <TutorialCard data={tutorial} />
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features
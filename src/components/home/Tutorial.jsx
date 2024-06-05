import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';
import TutorialCard from "../common/TutorialCard";
import { tutorials } from "../../constant";
tutorials

const Tutorial = () => {
  return (
    <>
      <div className="container padding-equal">
        <div className="row m-0">
          <div className="col-lg-6 col-12">
            <Swiper
              grabCursor={true}
              effect={'creative'}
              slidesPerView={1.25}
              spaceBetween={30}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ['100%', 0, 0],
                },
              }}
              modules={[EffectCreative]}
              className="mySwiper"
            >
              {tutorials && tutorials?.map((tutorial, index) => (
                <SwiperSlide key={index}>
                  <TutorialCard data={tutorial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-lg-6 col-12">
            <div className="heading-d">
              <span className="title">Free Tutorial</span>
              <h1 className="heading">
                More than thousand of free tutorial upload every weeks
              </h1>
              <p>
                Get your tests delivered at let home collect sample from the
                victory of the managements that supplies best design system
                guidelines ever. Get your tests delivered at let home collect
                sample.
              </p>
              <button className="default-btn primary-btn">
                Explore Design
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tutorial;

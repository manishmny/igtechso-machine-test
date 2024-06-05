import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import TutorialCard from "../common/TutorialCard";
import { tutorials } from "../../constant";

const Tutorial = () => {
  return (
    <>
      <div className="container padding-equal">
        <div className="tutorial-d default-85">
          <div className="row m-0 align-items-center">
            <div className="col-lg-7 col-12 position-relative">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1.25}
                loop={true}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2,
                  slideShadows: true,
                }}
                // creativeEffect={{
                //   prev: {
                //     shadow: true,
                //     translate: [0, 0, -400],
                //   },
                //   next: {
                //     translate: ["100%", 0, 0],
                //   },
                // }}
                modules={[EffectCoverflow]}
                className="mySwiper mr-5"
              >
                {tutorials &&
                  tutorials?.map((tutorial, index) => (
                    <SwiperSlide key={index}>
                      <TutorialCard data={tutorial} />
                    </SwiperSlide>
                  ))}
              </Swiper>
              <div className="btn-d">
                <button className="default-btn secondary-btn">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.99996 0C4.48608 0 0 4.48548 0 9.99999C0 15.514 4.48608 20 9.99996 20C15.5138 20 20 15.514 20 9.99999C20 4.48548 15.5138 0 9.99996 0ZM15.575 6.66453L9.42112 13.5876C9.2696 13.7586 9.05846 13.8462 8.84571 13.8462C8.67691 13.8462 8.50731 13.7908 8.3654 13.6774L4.51916 10.6005C4.18761 10.3355 4.13384 9.85161 4.39921 9.51936C4.66426 9.1871 5.1488 9.13388 5.48035 9.39946L8.7561 12.0193L14.4249 5.64248C14.7066 5.32473 15.1934 5.29623 15.5107 5.57849C15.8284 5.8613 15.8573 6.34678 15.575 6.66453Z"
                      fill="white"
                    />
                  </svg>
                  <span style={{ marginLeft: "5px" }}>Free tutorial</span>
                </button>
              </div>
            </div>
            <div className="col-lg-5 col-12">
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
      </div>
    </>
  );
};

export default Tutorial;

import M1 from "../images/model/m1.png";
import M2 from "../images/model/m2.png";
import M3 from "../images/model/m3.png";
import M4 from "../images/model/m4.png";
import M5 from "../images/model/m5.png";
import Heart from "../images/Heart.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Slider.css";
import { styled } from "styled-components";

const HorizontalImageScroll = () => {
  const imageArray = [M1, M2, M3, M4, M5];
  return (
    <div className="carousel">
      <HeartImage src={Heart} alt="" />

      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        speed={700}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        style={{ alignItems: "center", alignContent: "center" }}
      >
        {imageArray.map((item, index) => (
          <SwiperSlide key={index} className="swiperSlide">
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                padding: "16px",
                alignSelf: "center",
              }}
            >
              <img
                src={item}
                alt=""
                style={{
                  alignSelf: "center",
                  height: "400px",
                  objectFit: "contain",
                  marginBottom: "10px",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HorizontalImageScroll;

const HeartImage = styled.img`
  position: absolute;
  top: 20px;
  right: 30px;
  z-index: 4;
`;

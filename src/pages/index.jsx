import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Card from "@/components/Card";

const slides = Array(6).fill(
  <Card title="Cuota" num="#1" category="#0069F5" />
);

const renderSwiper = (slidesPerView) => (
  <Swiper
    style={{
      "--swiper-navigation-color": "#0069F5",
      "--swiper-pagination-bottom": "0px",
    }}
    slidesPerView={slidesPerView}
    spaceBetween={0}
    navigation={true}
    modules={[Navigation]}
    className="mySwiper"
  >
    {slides.map((slide, index) => (
      <SwiperSlide key={index}>{slide}</SwiperSlide>
    ))}
  </Swiper>
);

const renderSwiperMobile = (slidesPerView) => (
  <Swiper
    style={{
      "--swiper-navigation-color": "#0069F5",
      "--swiper-pagination-bottom": "0px",
    }}
    pagination={{
      clickable: true,
    }}
    slidesPerView={slidesPerView}
    modules={[Pagination]}
    spaceBetween={0}
    className="mySwiper"
  >
    {slides.map((slide, index) => (
      <SwiperSlide key={index}>{slide}</SwiperSlide>
    ))}
  </Swiper>
);

const Home = () => {
  return (
    <main className="inter">
      <div className="desktop sm:flex hidden">
        <div className="top">
          <div className="background-design">
            <div className="top-content">
              <div className="header">Paga tus cuotas fácil y rápido</div>
              <div className="totals-container">
                <div>
                  <div className="totals-title">Total</div>
                  <div className="totals-subtitle">$544.62</div>
                </div>
                <div>
                  <div className="totals-title">Subtotal</div>
                  <div className="totals-subtitle">$508.99</div>
                </div>
                <div>
                  <div className="totals-title">ITBMS</div>
                  <div className="totals-subtitle">$35.63</div>
                </div>
              </div>
              <div className="yappy-desktop">
                <div className="yappy-btn-img"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="center">
          <div className="cards-container fixedCenterXnY hidden lg:flex">
            {renderSwiper(4)}
          </div>
          <div className="cards-container fixedCenterXnY hidden md:flex lg:hidden">
            {renderSwiper(3)}
          </div>
          <div className="cards-container fixedCenterXnY hidden sm:flex md:hidden">
            {renderSwiper(2)}
          </div>
        </div>

        <div className="bottom">
          <div className="background-design"></div>
        </div>
      </div>

      <div className="mobile sm:hidden flex">
        <div className="top-mobile">
          <div className="background-design">
            <div className="header-mobile">Paga tus cuotas fácil y rápido</div>
            <div className="totals-container-mobile">
              <div>
                <div className="totals-title-mobile">Total</div>
                <div className="totals-subtitle-mobile">$544.62</div>
              </div>
              <div>
                <div className="totals-title-mobile">Subtotal</div>
                <div className="totals-subtitle-mobile">$508.99</div>
              </div>
              <div>
                <div className="totals-title-mobile">ITBMS</div>
                <div className="totals-subtitle-mobile">$35.63</div>
              </div>
            </div>
          </div>
        </div>

        <div className="center-mobile">
          <div className="cards-container-mobile fixedCenterXnY">
            {renderSwiperMobile(1)}
          </div>
        </div>

        <div className="bottom-mobile">
          <div className="background-design">
            <div className=" w-8 h-fit aspect-square bg-white"></div>
            <div className="yappy-mobile">
              <div className="yappy-btn-img"></div>
            </div>
            <div className=" w-8 h-fit aspect-square bg-white"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

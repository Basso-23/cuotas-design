import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@/components/Card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Arrow from "@/components/Arrow";

const Home = () => {
  return (
    <main className="inter">
      {/*//* Header */}
      <section className="bg-[#0069F5] h-[350px] ">
        <div
          style={{
            backgroundImage: "url(https://i.imgur.com/5INhM0k.png)",
          }}
          className="h-full w-full bg-cover bg-top bg-no-repeat px-10 text-white flex items-center relative "
        >
          <div className="w-full -mt-20 max-w-[1485px] mx-auto relative">
            <h1 className="text-[50px] font-semibold tracking-tight">
              Paga tus cuotas fácil y rápido
            </h1>

            <div className=" flex justify-between mt-2">
              <div className="flex gap-10 items-center font-medium  text-[20px]">
                <div>
                  <div className="opacity-80">Total</div>
                  <div className="text-[26px] font-bold">$544.62</div>
                </div>
                <div>
                  <div className="opacity-80">Subtotal</div>
                  <div className="text-[26px] font-bold">$508.99</div>
                </div>
                <div>
                  <div className="opacity-80">ITBMS</div>
                  <div className="text-[26px] font-bold">$35.63</div>
                </div>
              </div>

              {/*//* Yappy btn */}
              <div className=" h-[50px] w-[200px] bg-white rounded-lg overflow-hidden p-1 btnActive">
                <div
                  style={{
                    backgroundImage: "url(https://i.imgur.com/6hILaHB.png)",
                  }}
                  className="h-full w-full bg-contain bg-center bg-no-repeat"
                ></div>
              </div>
            </div>

            <div className="w-[100%] bottom-[-80px] absolute flex justify-between fixedCenterX font-medium text-[14px]">
              <div>Tus pagos pendientes: 6</div>
              <div></div>
            </div>
          </div>
        </div>
      </section>

      {/*//* Cards */}
      <section className="px-10 h-[500px] relative">
        <div className="h-[600px] w-[95%] p-[30px] bg-white sombra rounded-xl absolute fixedCenterXnY z-40 max-w-[1500px]">
          <Swiper
            style={{
              "--swiper-navigation-color": "#0069F5",
              " --swiper-navigation-sides-offset": "-2px",
            }}
            slidePrevClass=".prevArrow"
            cssMode={true}
            navigation={true}
            spaceBetween={0}
            slidesPerView={3}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Card title={"Cuota"} num={"#1"} category={"#0069F5"} />
            </SwiperSlide>
            <SwiperSlide>
              <Card title={"Cotización"} num={"#1"} category={"#55BE00"} />
            </SwiperSlide>
            <SwiperSlide>
              <Card title={"Cuota"} num={"#2"} category={"#0069F5"} />
            </SwiperSlide>
            <SwiperSlide>
              <Card title={"Pedido"} num={"#1"} category={"#C852C2"} />
            </SwiperSlide>
            <SwiperSlide>
              <Card title={"Factura"} num={"#1"} category={"#FFA500"} />
            </SwiperSlide>
            <SwiperSlide>
              <Card title={"Cuota"} num={"#3"} category={"#0069F5"} />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/*//* Footer */}
      <section className="bg-[#0069F5] h-[150px]">
        <div
          style={{
            backgroundImage: "url(https://i.imgur.com/5INhM0k.png)",
          }}
          className="h-full w-full bg-cover bg-top bg-no-repeat relative"
        ></div>
      </section>

      {/*//* Help btn */}
      <section className=" aspect-square w-14 bg-[#FF973B] rounded-full fixed bottom-5 right-5 z-50 text-white justify-center items-center flex btnActive">
        <Arrow />
      </section>
    </main>
  );
};

export default Home;

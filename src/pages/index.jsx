import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@/components/Card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  FreeMode,
} from "swiper/modules";
import Arrow from "@/components/Arrow";

const Home = () => {
  return (
    <main className="inter min-h-screen flex flex-col">
      {/*//* Header */}
      <section className="bg-[#0069F5] md:h-[250px]">
        <div
          style={{
            backgroundImage: "url(https://i.imgur.com/5INhM0k.png)",
          }}
          className="h-full w-full bg-cover bg-top bg-no-repeat md:px-10 text-white flex items-center relative md:py-0 py-8"
        >
          <div className="w-full md:-mt-10 max-w-[1485px] mx-auto relative">
            <h1 className="md:text-[50px] text-[25px] font-semibold tracking-tight md:text-start text-center">
              Paga tus cuotas fácil y rápido
            </h1>

            <div className="flex md:justify-between justify-center mt-2">
              <div className="flex gap-10 items-center font-medium  md:text-[20px] text-[14px]">
                <div>
                  <div className="opacity-80">Total</div>
                  <div className="md:text-[26px] text-[20px] font-bold">
                    $544.62
                  </div>
                </div>
                <div>
                  <div className="opacity-80">Subtotal</div>
                  <div className="md:text-[26px] text-[20px] font-bold">
                    $508.99
                  </div>
                </div>
                <div>
                  <div className="opacity-80">ITBMS</div>
                  <div className="md:text-[26px] text-[20px] font-bold">
                    $35.63
                  </div>
                </div>
              </div>

              {/*//* Yappy btn */}
              <div className="md:block hidden h-[50px] w-[200px] bg-white rounded-lg overflow-hidden p-1 btnActive">
                <div
                  style={{
                    backgroundImage: "url(https://i.imgur.com/6hILaHB.png)",
                  }}
                  className="h-full w-full bg-contain bg-center bg-no-repeat"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*//* Cards Desktop BIG */}
      <section className="px-10 h-[500px] relative xl:block hidden">
        <div className="h-[550px] w-[95%] p-[30px] bg-white sombra rounded-xl absolute fixedCenterXnY z-40 max-w-[1500px]">
          <Swiper
            style={{
              "--swiper-navigation-color": "#0069F5",
              " --swiper-navigation-sides-offset": "-2px",
            }}
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

      {/*//* Cards Desktop MEDIUM */}
      <section className="px-10 h-[500px] relative md:block xl:hidden hidden">
        <div className="h-[550px] w-[95%] p-[30px] bg-white sombra rounded-xl absolute fixedCenterXnY z-40 max-w-[1500px]">
          <Swiper
            style={{
              "--swiper-navigation-color": "#0069F5",
              " --swiper-navigation-sides-offset": "-2px",
            }}
            cssMode={true}
            navigation={true}
            spaceBetween={0}
            slidesPerView={2}
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

      {/*//* Cards Mobile*/}
      <section className="flex md:hidden">
        <div className="w-[100%] bg-white sombra rounded-xl z-40 py-3">
          <Swiper
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Pagination, FreeMode]}
            cssMode={true}
            freeMode={true}
            spaceBetween={0}
            slidesPerView={1}
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
      <section className="bg-[#0069F5] flex-1">
        <div
          style={{
            backgroundImage: "url(https://i.imgur.com/5INhM0k.png)",
          }}
          className="h-full w-full bg-cover bg-top bg-no-repeat relative"
        >
          {/*//* Yappy btn */}
          <div className="md:hidden block h-[50px] w-[90%] bg-white rounded-lg overflow-hidden p-1 btnActive mx-auto my-2">
            <div
              style={{
                backgroundImage: "url(https://i.imgur.com/6hILaHB.png)",
              }}
              className="h-full w-full bg-contain bg-center bg-no-repeat"
            ></div>
          </div>
        </div>
      </section>

      {/*//* Help btn */}
      <section className="hidden aspect-square w-14 bg-[#FF973B] rounded-full fixed bottom-5 right-5 z-50 text-white justify-center items-center flex btnActive">
        <Arrow />
      </section>
    </main>
  );
};

export default Home;

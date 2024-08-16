import React from "react";
import { cuotas } from "@/json/cuotas";

const Home = () => {
  return (
    <main>
      <div className="bg-[#1776D8] h-[450px] w-full">
        <div
          style={{
            backgroundImage: "url(https://i.imgur.com/5INhM0k.png)",
          }}
          className="w-full h-full bg-cover bg-top bg-no-repeat flex justify-center items-center"
        >
          <div className="mt-[-150px] max-w-[1596px] w-full text-white px-12 relative">
            <div className="inter font-bold text-[55px] mb-4">
              Paga tus cuotas fácil y rápido
            </div>

            <div className="nunito font-bold flex justify-between items-center">
              <div className="flex gap-20">
                <div>
                  <div className="text-[20px] opacity-80">Subtotal</div>
                  <div className="text-[30px]">$508.99</div>
                </div>
                <div>
                  <div className="text-[20px] opacity-80">ITBMS</div>
                  <div className="text-[30px]">$35.63</div>
                </div>
                <div>
                  <div className="text-[20px] opacity-80">Total</div>
                  <div className="text-[30px]">$544.62</div>
                </div>
              </div>

              <div
                style={{
                  backgroundImage: "url(https://i.imgur.com/eL5Ub7y.png)",
                }}
                className="w-[200px] h-[50px] bg-contain bg-top bg-no-repeat my-auto rounded-lg"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1500px] h-[650px] w-full bg-white mx-auto rounded-tr-[30px] rounded-tl-[30px] sombra mt-[-150px] flex items-center  relative">
        <div className="w-full h-full flex items-center overflow-auto">
          <div className="all-facturas ml-16 mr-16 nunito">
            {cuotas.map((item, index) => (
              <div
                className="factura-container my-auto rounded-md overflow-hidden"
                key={index}
              >
                <div className="text-center !bg-[#1776D8] text-white font-bold py-3">
                  {item.title}
                </div>

                {Array.from({ length: 10 }).map((_, i) => (
                  <div className="factura-line" key={i}>
                    <div className="grid grid-cols-3  border-r col-span-3">
                      <div className="flex gap-3 col-span-2 text-[#0B223C] font-bold">
                        <div
                          style={{
                            backgroundImage:
                              "url(https://i.imgur.com/27GVE5B.png)",
                          }}
                          className="w-5 aspect-square bg-contain bg-top bg-no-repeat my-auto"
                        ></div>
                        {item.letras.label}
                        {item.letras.numero + i}
                      </div>
                      <div className="col-span-1 text-[#1776D8] font-bold -ml-2">
                        ${item.letras.dinero.toFixed(2)}
                      </div>
                    </div>
                    <div className="flex justify-end gap-3 col-span-2 pl-4">
                      <div className="bg-[#F73838] text-white font-medium text-[13px] leading-none my-auto py-[5px] rounded-[3px] px-2">
                        {item.letras.fecha}
                      </div>
                      <div className="w-5 h-5 my-auto border-[#0B223C] border-2 rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="shadowCarouselLeft fixedCenterY hidden"></div>
        <div className="shadowCarouselRight fixedCenterY right-0 hidden"></div>
      </div>

      <div className="fixed bottom-0 w-full border-t border-[#d1d1d1] bg-white ">
        <div className="max-w-[1596px] mx-auto py-4 inter font-light text-[#b8b8b8] text-sm px-12">
          Copyright © 2024 por RAENCO | Todos los derechos reservados
        </div>
      </div>
    </main>
  );
};

export default Home;

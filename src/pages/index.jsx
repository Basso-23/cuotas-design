import React, { useState, useEffect } from "react";
import { cuotas } from "@/json/cuotas";

const Home = () => {
  const [tempKey, setTempKey] = useState(3);

  return (
    <main>
      <div className="lg:h-[100vh] h-[100dvh] flex w-full flex-col bg-[#1778D9]">
        {/*//* Header section */}
        <section className="lg:h-[35%] h-[28%] bg-[#1778D9] w-full text-center text-white">
          <div
            style={{
              backgroundImage: "url(https://i.imgur.com/5INhM0k.png)",
            }}
            className="w-full h-full bg-cover bg-top bg-no-repeat flex"
          >
            <div className="m-auto h-fit flex flex-col gap-[min(4vw,20px)]">
              {/*//* Titulo */}
              <h1 className="inter font-bold text-[min(6vw,40px)] leading-none">
                Paga tus cuotas fácil y rápido
              </h1>

              {/*//* Montos */}
              <div className="flex gap-[min(10vw,50px)] nunito font-bold mx-auto w-fit items-center">
                <div>
                  <div className="text-[min(3.8vw,18px)] opacity-80">
                    Subtotal
                  </div>
                  <div className="text-[min(4.5vw,25px)]">$508.99</div>
                </div>
                <div>
                  <div className="text-[min(3.8vw,18px)] opacity-80">ITBMS</div>
                  <div className="text-[min(4.5vw,25px)]">$35.63</div>
                </div>
                <div>
                  <div className="text-[min(3.8vw,18px)] opacity-80">Total</div>
                  <div className="text-[min(4.5vw,25px)]">$544.62</div>
                </div>
              </div>

              {/*//* Yappy btn */}
              <div className="h-[min(12vw,50px)] aspect-[2/4] w-full max-w-[572px] bg-white rounded-md flex mt-1 cursor-pointer hover:opacity-80 active:scale-[98%]">
                <div
                  style={{
                    backgroundImage: "url(https://i.imgur.com/eL5Ub7y.png)",
                  }}
                  className="w-full h-full bg-contain bg-top bg-no-repeat m-auto"
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/*//* Cuotas section */}
        <section className="bg-[#ffffff] flex-1 rounded-tr-[30px] rounded-tl-[30px] px-5 py-4 flex">
          {/*//* All cuotas */}
          <div className="w-fill h-[475.75px] m-auto flex overflow-auto gap-11 max-w-[1500px]">
            {/*//* Cuotas container */}
            {cuotas.map((item, index) => (
              <div
                className="min-w-[320px] nunito rounded-[10px] factura-container"
                key={index}
              >
                <div
                  className={`text-center !bg-[#1776D8] text-white font-bold py-3 rounded-tr-[10px] rounded-tl-[10px] ${
                    item.id === tempKey ? "!bg-[#FF923C]" : "!bg-[#1776D8]"
                  }`}
                >
                  {item.title}
                </div>

                {Array.from({ length: 9 }).map((_, i) => (
                  <div className="factura-line border-r border-l">
                    <div className="grid grid-cols-3 col-span-3">
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
                    <div className=" flex justify-end gap-3 col-span-2">
                      <div className="bg-[#F73838] text-white font-medium text-[12.5px] leading-none my-auto py-[5px] rounded-[3px] px-2">
                        {item.letras.fecha}
                      </div>
                      <div className="w-5 h-5 my-auto border-[#0B223C] border-2 rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;

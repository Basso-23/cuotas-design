import React from "react";

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
          <div className="mt-[-150px] max-w-[1500px] w-full text-white px-12 relative">
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

      <div className="max-w-[1500px] h-[800px] w-full px-12 bg-white mx-auto rounded-tr-[30px] rounded-tl-[30px] sombra mt-[-150px]"></div>

      <div className="fixed bottom-0 w-full border-t border-[#d1d1d1] bg-white ">
        <div className="max-w-[1596px] mx-auto py-4 inter font-light text-[#b8b8b8] text-sm px-12">
          Copyright © 2024 por RAENCO | Todos los derechos reservados
        </div>
      </div>
    </main>
  );
};

export default Home;

import React, { useState, useEffect, useRef } from "react";
import Card from "@/components/Card";
import Arrow from "@/components/Arrow";

const Home = () => {
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    const container = containerRef.current;
    container.style.cursor = "grabbing";
    container.style.userSelect = "none";

    const startX = e.pageX - container.offsetLeft;
    const scrollLeft = container.scrollLeft;

    const handleMouseMove = (eMove) => {
      const x = eMove.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; // Multiplied by 2 to increase the dragging speed
      container.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      container.style.cursor = "grab";
      container.style.removeProperty("user-select");
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <main className="inter">
      {/*//* Top bar */}
      <div className="sm:px-6 px-2 h-[52px] w-full bg-[#ffffff] flex justify-between items-center">
        <div className="flex gap-2 items-center">
          {/*//* Logo */}
          <div
            style={{
              backgroundImage: "url(https://i.imgur.com/pHQGK7T.jpeg)",
            }}
            className="w-8 aspect-square bg-cover bg-center bg-no-repeat m-auto rounded-full"
          ></div>

          {/*//* Company Name */}
          <div className="sm:block hidden text-[12px] mt-[1px] text-[#656875] font-medium">
            Nombre de compañia
          </div>
        </div>

        {/*//* User */}
        <div className="flex gap-2 items-center">
          <div className="text-[12px] text-[#656875] font-medium">
            Bienvenido devuelta, Carlos Baso
          </div>
        </div>
      </div>

      {/*//* Header */}
      <div className="bg-[#0069F5] h-[534px]">
        <div
          style={{
            backgroundImage: "url(https://i.imgur.com/5INhM0k.png)",
          }}
          className="h-full w-full bg-cover bg-top bg-no-repeat relative"
        >
          <div className="sm:flex hidden justify-between absolute w-full bottom-[160px] px-6">
            <div className="text-[13px] text-[#ffffff] font-medium flex items-center gap-1">
              <span className="rotate-180">
                <Arrow />
              </span>
              Deslice hacia la izquierda
            </div>
            <div className="text-[13px] text-[#ffffff] font-medium flex items-center gap-1">
              Deslice hacia la derecha
              <span>
                <Arrow />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full sm:px-6 bg-[#ffffff] flex relative">
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          className="custom-scrollbar sm:p-8 sm:w-[95%] w-full fixedCenterX flex overflow-auto gap-4 cursor-grab bg-white sm:rounded-tr-xl sm:rounded-tl-xl sm:-mt-[140px] mt-6 sombra sm:absolute"
        >
          <Card title={"Cuota"} num={"#1"} category={"#0069F5"} />
          <Card title={"Cotización"} num={"#1"} category={"#55BE00"} />
          <Card title={"Cuota"} num={"#2"} category={"#0069F5"} />
          <Card title={"Pedido"} num={"#1"} category={"#C852C2"} />
          <Card title={"Factura"} num={"#1"} category={"#FFA500"} />
          <Card title={"Cuota"} num={"#3"} category={"#0069F5"} />
        </div>
      </div>
    </main>
  );
};

export default Home;

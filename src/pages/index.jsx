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
      <div className="px-6 h-[52px] w-full bg-[#ffffff] flex justify-between items-center">
        <div className="flex gap-2 items-center">
          {/*//* Logo */}
          <div
            style={{
              backgroundImage: "url(https://i.imgur.com/pHQGK7T.jpeg)",
            }}
            className="w-8 aspect-square bg-cover bg-center bg-no-repeat m-auto rounded-full"
          ></div>

          {/*//* Company Name */}
          <div className="text-[12px] mt-[1px] text-[#656875] font-medium">
            Nombre de compañia
          </div>
        </div>

        {/*//* User */}
        <div className="flex gap-2 items-center">
          <div className="text-[12px] text-[#656875] font-medium">
            Bienvenido devuelta, Carlos Baso!
          </div>
        </div>
      </div>

      {/*//* Header */}
      <div className="bg-[#0069F5] h-[534px]">
        <div
          style={{
            backgroundImage: "url(https://i.imgur.com/5INhM0k.png)",
          }}
          className="h-full w-full bg-cover bg-top bg-no-repeat"
        ></div>
      </div>

      <div className="flex justify-between mx-6 mt-6 hidden">
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

      <div className="w-full px-6 bg-[#ffffff] flex">
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          className="custom-scrollbar p-8 flex overflow-auto gap-4 cursor-grab bg-white rounded-xl -mt-[150px] sombra"
        >
          <Card title={"Cuota"} num={"#1"} category={"#0069F5"} />
          <Card title={"Cotización"} num={"#1"} category={"#55BE00"} />
          <Card title={"Cuota"} num={"#2"} category={"#0069F5"} />
          <Card title={"Pedido"} num={"#1"} category={"#C852C2"} />
          <Card title={"Factura"} num={"#1"} category={"#FFA500"} />
          <Card title={"Cuota"} num={"#3"} category={"#0069F5"} />
        </div>
      </div>

      <footer className="bg-white border-t p-3 text-[#7d7d7d] text-[12px] mt-10">
        Copyright © 2024 por Company | Todos los derechos reservados
      </footer>
    </main>
  );
};

export default Home;

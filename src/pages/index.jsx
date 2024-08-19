import React, { useState, useEffect } from "react";
import Card from "@/components/Card";

const Home = () => {
  return (
    <main className="inter ">
      <div className=" h-10 w-full bg-[#F5F9FA] border-b"></div>

      <div className="sm:px-10 pageSize">
        <div className=" font-bold text-[26px] tracking-tight mt-8">
          Pagos Pendientes
        </div>

        <div className="w-full border-b border-[#D5DBE0] my-4">
          <div className="flex gap-3 pb-1">
            <div className="w-[200px] text-[12px] font-bold text-[#4678FD] relative">
              Total
              <div className="w-full absolute -bottom-[6px] bg-[#4678FD] h-[2px]"></div>
            </div>
            <div className="w-[200px] text-[12px] font-bold ">Subtotal</div>
            <div className="w-[200px] text-[12px] font-bold ">ITBMS</div>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="w-[200px] h-10 border rounded-md flex items-center px-2 font-medium border-[#4678FD] text-[#4678FD]">
            $1605.00
          </div>
          <div className="w-[200px] h-10 border rounded-md flex items-center px-2 text-sm font-medium">
            $105.00
          </div>
          <div className="w-[200px] h-10 border rounded-md flex items-center px-2 text-sm font-medium">
            $1500.00
          </div>
        </div>

        <div className="w-full border-b border-[#D5DBE0] flex gap-2 py-3 mt-2">
          <div className="border border-dashed border-[#4678FD] text-[#4678FD] rounded-full py-[2px] px-4 text-[12px] font-medium">
            Cuotas
          </div>
          <div className="border border-dashed border-[#55BE00] text-[#55BE00] rounded-full py-[2px] px-4 text-[12px] font-medium">
            Cotizaciones
          </div>
          <div className="border border-dashed border-[#FFA500] text-[#FFA500] rounded-full py-[2px] px-4 text-[12px] font-medium">
            Facturas
          </div>
          <div className="border border-dashed border-[#C852C2] text-[#C852C2] rounded-full py-[2px] px-4 text-[12px] font-medium">
            Pedidos
          </div>
        </div>

        <div className="pb-10 pt-6 all-cards">
          <Card title={"Cuota #1"} category={"#4678FD"} />
          <Card title={"Cotización #1"} category={"#55BE00"} />
          <Card title={"Factura #1"} category={"#FFA500"} />
          <Card title={"Pedido #1"} category={"#C852C2"} />
          <Card title={"Factura #2"} category={"#FFA500"} />
          <Card title={"Cuota #2"} category={"#4678FD"} />
        </div>
      </div>

      <footer className="bg-white border-t p-4 text-[#7d7d7d] text-[13px]">
        Copyright © 2024 por Company | Todos los derechos reservados
      </footer>
    </main>
  );
};

export default Home;

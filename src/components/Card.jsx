import React, { useState } from "react";

const Card = () => {
  const [checkedStates, setCheckedStates] = useState(Array(10).fill(true));

  const handleCheck = (index) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    setCheckedStates(newCheckedStates);
  };

  const Line = ({ i, price, isChecked, onCheck }) => {
    return (
      <div className="factura-line grid grid-cols-9 leading-none border-b border-[#dfe3e3] py-2 px-[14px] w-[360px] items-center">
        <div
          onClick={onCheck}
          className={`w-[18px] aspect-square rounded-[5px] border-[#d5dbe0] border cursor-pointer ${
            isChecked ? "bg-transparent" : "bg-[#d5dbe0]"
          }`}
        ></div>

        <div className="col-span-6 flex justify-between items-center">
          <div className="text-[12px] text-[#697789] font-medium">
            Letra #{i}
          </div>

          <div
            className={`text-[12px] font-semibold border-[1px] py-[3px] px-[6px] rounded-[4px] ${
              isChecked
                ? "text-[#D52B5F] bg-[#FFE6F1] border-[#FFC8E1]"
                : "text-[#046C05] bg-[#CEF9BD] border-[#a6ea82]"
            }`}
          >
            {isChecked ? <div>Pendiente</div> : <div>Pagado</div>}
          </div>

          <div className="text-[12px] text-[#697789] font-medium">
            2024-04-01
          </div>
        </div>

        <div className="flex items-center col-span-2 justify-end">
          <div className="text-[12px] text-[#222d2a] font-bold">${price}</div>
        </div>
      </div>
    );
  };

  return (
    <section className="mx-auto bg-white rounded-[8px] overflow-hidden factura-container">
      <div className="border-b text-center bg-[#1776D8] text-white font-medium text-[14px] py-[9px]">
        Factura 50y6 #357
      </div>

      {checkedStates.map((isChecked, index) => (
        <Line
          key={index}
          i={index + 1}
          price={"150.00"}
          isChecked={isChecked}
          onCheck={() => handleCheck(index)}
        />
      ))}

      <div className="py-2 px-[14px] bg-white mt-3 text-[#222d2a]">
        <div className="font-bold text-[16px]">RESUMEN DE CUOTA</div>
        <div className="grid grid-cols-2 text-[14px] mt-2">
          <div className="font-medium">Subtotal</div>
          <div className="font-medium text-end">$1500.00</div>
          <div className="font-medium">ITBMS</div>
          <div className="font-medium text-end">$105.00</div>

          <div className="mt-2 font-bold text-[16px]">Total</div>
          <div className="mt-2 font-bold text-[16px] text-end">$1605.00</div>
        </div>

        <div className="w-full h-11 bg-[#1776D8] rounded-[5px] mt-4 mb-2 p-2 cursor-pointer hover:opacity-80 transition-all">
          <div
            style={{
              backgroundImage: "url(https://i.imgur.com/MuQ9sUA.png)",
            }}
            className="w-full h-full bg-contain bg-top bg-no-repeat"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Card;

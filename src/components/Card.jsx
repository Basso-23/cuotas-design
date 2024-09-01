import React, { useState } from "react";

const Card = ({ title, num, category }) => {
  const [checkedStates, setCheckedStates] = useState(Array(12).fill(true));

  const handleCheck = (index) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    setCheckedStates(newCheckedStates);
  };

  const Line = ({ i, price, isChecked, onCheck }) => {
    return (
      <div className="card-line grid grid-cols-9 leading-none py-2 px-[14px] w-full items-center border-l border-r border-b">
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
            {isChecked ? <div>Pendiente</div> : <div>Agregado</div>}
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
    <div className="card">
      <section className="w-full m-auto">
        <div className="rounded-tl-md rounded-tr-md bg-[#0069F5]">
          <div className="px-[14px] flex py-2 items-center gap-3 justify-center relative">
            <div className="text-[13px] text-[#ffffff] font-medium">
              Descripción de pago
            </div>
            <div className="text-[13px] text-[#ffffff] opacity-90 absolute right-4">
              {num}
            </div>
          </div>
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

        <div className="relative w-full flex justify-between px-[14px] bg-white text-[#222d2a] border-b border-r border-l py-4 rounded-bl-md rounded-br-md">
          <div className="flex items-center">
            <div className="text-[#222d2a] font-bold text-[13px] py-[2px] mr-2">
              Tipo:
            </div>
            {title === "Cuota" && (
              <div className="border border-dashed border-[#0069F5] text-[#0069F5] rounded-full py-[2px] px-4 text-[12px] font-medium leading-none flex items-center">
                Cuota
              </div>
            )}
            {title === "Cotización" && (
              <div className="border border-dashed border-[#55BE00] text-[#55BE00] rounded-full py-[2px] px-4 text-[12px] font-medium leading-none flex items-center">
                Cotización
              </div>
            )}
            {title === "Factura" && (
              <div className="border border-dashed border-[#FFA500] text-[#FFA500] rounded-full py-[2px] px-4 text-[12px] font-medium leading-none flex items-center">
                Factura
              </div>
            )}
            {title === "Pedido" && (
              <div className="border border-dashed border-[#C852C2] text-[#C852C2] rounded-full py-[2px] px-4 text-[12px] font-medium leading-none flex items-center">
                Pedido
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 text-[14px] text-left items-center">
            <div className="text-[#222d2a] font-bold text-[13px] mr-2 text-end">
              Total:
            </div>
            <div className=" font-bold text-[16px] text-end">$1605.00</div>
          </div>
          <div className="w-full h-1 bg-[#0069F5] bottom-0 absolute fixedCenterX rounded-bl-md rounded-br-md"></div>
        </div>
      </section>
    </div>
  );
};

export default Card;

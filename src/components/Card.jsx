import React, { useState } from "react";

const Card = ({ title, num, category }) => {
  const [checkedStates, setCheckedStates] = useState(Array(10).fill(true));

  const handleCheck = (index) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    setCheckedStates(newCheckedStates);
  };

  const Line = ({ i, price, isChecked, onCheck }) => {
    return (
      <div className="card-line grid grid-cols-9 leading-none py-2 px-[14px] w-[360px] items-center">
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
    <div className="h-full w-full ">
      <div className="w-[370px] bg-white h-full flex flex-col gap-36 overflow-auto mx-auto custom-scrollbar rounded-lg">
        <section className="mx-auto bg-white card-container rounded-lg border">
          <div className="rounded-tl-md rounded-tr-md bg-[#0069F5]">
            <div className="px-[14px] flex py-2 items-center gap-3 justify-between">
              <div className="text-[13px] text-[#ffffff] font-medium">
                Descripción de pago
              </div>
              <div className="text-[13px] text-[#ffffff] opacity-90">{num}</div>
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

          <div className="py-2 px-[14px] bg-white text-[#222d2a]">
            <div className="pt-1 pb-3 flex justify-between border-b">
              <div className="text-[#222d2a] font-bold text-[13px] py-[2px]">
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

            <div className="grid grid-cols-2 text-[14px] mb-1 text-left">
              <div className="mt-2 font-bold text-[16px]">Total</div>
              <div className="mt-2 font-bold text-[16px] text-end">
                $1605.00
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Card;

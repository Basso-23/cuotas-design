import React, { useState } from "react";

const Card = ({ title, category }) => {
  const [checkedStates, setCheckedStates] = useState(Array(10).fill(true));

  const handleCheck = (index) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    setCheckedStates(newCheckedStates);
  };

  const Line = ({ i, price, isChecked, onCheck }) => {
    return (
      <div className="card-line grid grid-cols-9 leading-none border-b border-r border-l border-[#dfe3e3] py-2 px-[14px] w-[360px] items-center">
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
    <section className="mx-auto bg-white card-container">
      <div className=" border relative rounded-tl-md rounded-tr-md">
        <div className="px-[14px] flex py-2 items-center gap-4">
          <div
            style={{ backgroundColor: category }}
            className="w-[16px] aspect-square rounded-full"
          ></div>
          <div className="text-[12px] text-[#222d2a] font-bold">{title}</div>
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
    </section>
  );
};

export default Card;

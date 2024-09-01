import React from "react";
import { CardBrands } from "../assets/images/assets"; // Corrected import to use the CardBrands array

const Card = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-8 px-3">
        {CardBrands.map((data) => (
          <div
            className="p-2 rounded cursor-pointer hover:bg-[#ffffff26] w-56 max-w-full" // added max-w-full to control overflow
            key={data.id}
          >
            <img src={data.image} alt="" className="rounded-2xl object-cover" />
            <p className="font-bold text-2xl mt-2 mb-1">{data.name}</p>
            <h1 className="text-slate-200 text-2xl text-blue-600 font-bold">
              {data.desc}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;

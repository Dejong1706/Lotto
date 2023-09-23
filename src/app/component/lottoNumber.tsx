import React from "react";

type Props = {
  lottoNumber: number[];
};

export default function LottoNumber({ lottoNumber }: Props) {
  const number = lottoNumber;
  const color = [
    "bg-orange-500",
    "bg-red-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-emerald-400",
    "bg-blue-500",
    "bg-indigo-500",
  ];
  return (
    <div className="grid lg:grid-cols-6 lg:gap-8 grid-cols-2 gap-2">
      {number.map((item, index) => (
        <p
          key={index}
          className={`flex justify-center items-center mx-4 lg:w-32 lg:h-32 w-16 h-16 lg:text-5xl text-3xl font-bold p-2 ${
            color[Math.floor(Math.random() * 6) + 1]
          } rounded-full shadow-lg shadow-gray-700`}
        >
          {item}
        </p>
      ))}
    </div>
  );
}

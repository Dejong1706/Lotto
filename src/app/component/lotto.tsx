"use client";

import React, { useEffect, useState } from "react";
import LottoNumber from "./lottoNumber";
import LottoNumberFuction from "../logic/lottoNumberFuction";

type Props = {
  username: string | undefined;
};

export default function Lotto({ username }: Props) {
  useEffect(() => {
    if (username === "/mather") {
      setBackgroundColor(`bg-sky-500`);
    } else if (username === "/me") {
      setBackgroundColor("bg-violet-500");
    } else if (username === "/sister") {
      setBackgroundColor("bg-orange-300");
    }
  }, [username]);
  const [lottoNumber, setLottoNumber] = useState<number[]>([]);

  const [backgroundColor, setBackgroundColor] =
    useState<string>(`bg-green-800`);

  const onClick = () => {
    const number: number[] = LottoNumberFuction();
    setLottoNumber(number);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center space-y-12">
      <button
        onClick={onClick}
        className="w-64 h-16 bg-yellow-400 text-black text-xl font-bold p-2 rounded-md shadow-md shadow-yellow-700"
      >
        Lotto 번호 생성기
      </button>
      <div
        className={`w-2/3 h-[400px] ${backgroundColor} border-b-8 border-white flex justify-center items-center shadow-lg shadow-black`}
      >
        <LottoNumber lottoNumber={lottoNumber} />
      </div>
    </div>
  );
}

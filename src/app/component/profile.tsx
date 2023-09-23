import React from "react";
import Image from "next/image";

type Props = {
  name: string;
};

export default function Profile({ name }: Props) {
  return (
    <li className="flex-col border-2 border-blue-300">
      <Image src={`/${name}.png`} width={300} height={300} alt="fatherImage" />
      {name == "father" && (
        <p className="text-center font-bold text-xl bg-green-300">아빠</p>
      )}
      {name == "mather" && (
        <p className="text-center font-bold text-xl bg-green-300">엄마</p>
      )}
      {name == "me" && (
        <p className="text-center font-bold text-xl bg-green-300">병근</p>
      )}
      {name == "sister" && (
        <p className="text-center font-bold text-xl bg-green-300">진희</p>
      )}
    </li>
  );
}

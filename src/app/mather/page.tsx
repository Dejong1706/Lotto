"use client";
import React, { useEffect, useState } from "react";
import Lotto from "../component/lotto";
import Link from "next/link";
import HomeButton from "../component/homeButton";

export default function FatherPage() {
  useEffect(() => {
    const user = window.location.pathname;
    setUserName(user);
  }, []);

  const [userName, setUserName] = useState<string>();

  return (
    <div className="w-full h-full ">
      <HomeButton />
      <Lotto username={userName} />
      <div className="text-xl text-center bg-sky-300 font-bold mt-16 p-4">
        <p>우리 엄마 1등 기원 😊❤️😍</p>
      </div>
    </div>
  );
}

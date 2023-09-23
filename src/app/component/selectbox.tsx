import React from "react";
import Image from "next/image";
import Profile from "./profile";
import Link from "next/link";

export default function Selectbox() {
  return (
    <div className="w-full h-full flex justify-center">
      <ul className="grid inline-grid lg:grid-cols-4 grid-cols-2 gap-4 lg:gap-8 justify-center items-center p-8 mt-[150px]">
        <Link href="/father">
          <Profile name={"father"} />
        </Link>
        <Link href="/mather">
          <Profile name={"mather"} />
        </Link>
        <Link href="/me">
          <Profile name={"me"} />
        </Link>
        <Link href="/sister">
          <Profile name={"sister"} />
        </Link>
      </ul>
    </div>
  );
}

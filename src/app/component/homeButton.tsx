import Link from "next/link";
import React from "react";

export default function HomeButton() {
  return (
    <Link href="/">
      <button className="bg-orange-100 lg:text-3xl text-xl font-bold lg:p-6 p-2 mb-4 bg-light-900 shadow-md shadow-gray-500">
        Home
      </button>
    </Link>
  );
}

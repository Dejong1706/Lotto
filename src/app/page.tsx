import Image from "next/image";
import Selectbox from "./component/selectbox";

export default function Home() {
  return (
    <main>
      <div className="text-black-400 text-center mt-20 font-bold lg:text-3xl text-xl">
        병근이의
        <b className="lg:text-4xl text-2xl rounded-full bg-blue-600 text-white px-2 py-1">
          L
        </b>
        <b className="lg:text-4xl text-2xl rounded-full bg-blue-400 text-white px-2 py-1">
          O
        </b>
        <b className="lg:text-4xl text-2xl rounded-full bg-blue-600 text-white px-2 py-1">
          T
        </b>
        <b className="lg:text-4xl text-2xl rounded-full bg-blue-600 text-white px-2 py-1">
          T
        </b>
        <b className="lg:text-4xl text-2xl rounded-full bg-green-600 text-white px-2 py-1">
          O
        </b>{" "}
        번호 생성기
      </div>
      <Selectbox />
    </main>
  );
}

import React from "react";

import tryImage from "../assets/poster_404.png";
import { IoIosStar } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import Title from "./Title";

export default function ResultCard() {
  return (
    <div
      className={`bg-white shadow-xl flex flex-col gap-2 h-max overflow-hidden rounded-md p-2`}
    >
      <img src={tryImage} alt="restoranimage" className="object-cover w-full h-[10rem]" />
      <Title title={"Restorannn"} size={"text-lg font-semibold"} />
      <div className="flex items-center text-blue-1">
        <IoIosStar size={'1rem'}/>
        <IoIosStar size={'1rem'}/>
        <IoIosStar size={'1rem'}/>
        <IoIosStar size={'1rem'}/>
      </div>
      <div className="flex w-full items-center text-[0.7rem] text-gray-500 justify-between">
        <p>AMERICAN-$$</p>

        <div className="flex gap-1 items-center">
            <FaCircle size={'0.5rem'} className="text-emerald-500"/>
            <p>OPEN NOW</p>
        </div>
      </div>

      <button
        type={"submit"}
        className="rounded-sm bg-blue-1 text-sm text-white px-4 py-2 hover:bg-blue-4"
      >
        LEARN MORE
      </button>
    </div>
  );
}

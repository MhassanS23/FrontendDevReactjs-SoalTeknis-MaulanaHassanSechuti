import React from "react";
import Title from "../components/Title";
import FilterCard from "../components/FilterCard";
import ResultCard from "../components/ResultCard";

function Homepages() {
  return (
    <>
      <div className="font-sans px-[5rem] py-[3rem] flex flex-col gap-3">
        <Title title={"Restaurants"} size={"text-5xl"} />
        <p className="w-[50%] text-left text-gray-500">
          establishment where refreshments or meals may be procured by the public.
          The public dining room that ultimately came to be known as the
          restaurant originated in France, and the French have continued to make
          major contributions to the restaurant’s development.
        </p>
      </div>
      <FilterCard/>
      <div className="font-sans px-[5rem] py-[3rem] flex flex-col gap-3">
        <Title title={"All Restaurants"} size={"text-2xl"} />
        <div className="grid grid-cols-4 gap-8">
          <ResultCard/>
          <ResultCard/>
          <ResultCard/>
          <ResultCard/>
          <ResultCard/>
          <ResultCard/>
          <ResultCard/>
        </div>
      </div>
    </>


  );
}

export default Homepages;

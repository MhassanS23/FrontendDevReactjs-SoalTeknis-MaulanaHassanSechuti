import React, { useEffect, useState } from "react";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants, searchRestaurants } from "../features/restaurant/restaurantSlice";

import Title from "../components/Title";
import FilterCard from "../components/FilterCard";
import ResultCard from "../components/ResultCard";

function Homepages() {
  const [rating, setRating] = useState("");
  const [category, setCategory] = useState("");
  const listResult = useSelector(state => state.resto.resto);
  const categoryResult = useSelector(state => state.resto.search);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const rate = e.target.value;
    setRating(rate);
  };

  const handleChangeCategory = (e) => {
    const category = e.target.value;
    setCategory(category);
  };

  const reset = () => {
    setRating("");
    setCategory("");
  };

  useEffect(()=>{
    dispatch(fetchRestaurants());
    dispatch(searchRestaurants(category));
  },[category]);

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
      <FilterCard rating={rating} handleChange={handleChange} reset={reset} category={category} handleChangeCategory={handleChangeCategory}/>
      <div className="font-sans px-[5rem] py-[3rem] flex flex-col gap-3">
        <Title title={"All Restaurants"} size={"text-2xl"} />
        <div className="grid grid-cols-4 gap-8">
          {category === '' ? (listResult.length > 0 ? (
            listResult
            .filter((res) => res.rating >= rating)
            .map(res => {
              return<ResultCard key={res.id} data={res}/>;
            })
          ) : (
              <div>
                <h1>Restaurant Tidak Ditemukan</h1>
              </div>
          )) : (
            categoryResult.length > 0 ? (
              categoryResult
              .filter((res) => res.rating >= rating)
              .map(res => {
                return<ResultCard key={res.id} data={res}/>;
              })
            ) : (
                <div>
                  <h1>Restaurant Tidak Ditemukan</h1>
                </div>
            )
          )}
        </div>
      </div>
    </>


  );
}

export default Homepages;

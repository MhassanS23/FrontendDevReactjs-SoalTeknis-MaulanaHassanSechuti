import React from "react";

export default function FilterCard() {
  return (
    <div className="w-full flex justify-between border-y border-gray-300 px-[5rem] py-[1rem] font-sans">
      <div className="w-[85%] flex gap-6 items-center">
        <p className="text-sm text-gray-600">Filter By: </p>

        <div className="flex items-center gap-2 border-b border-blue-1 py-1 px-1">
            <input type="radio" id="radio-1" />
            <label for="radio-1" className="text-sm text-blue-1 font-semibold">Open Now</label>
        </div>

        <select
          id="price"
          className="border-b border-blue-1 py-1 px-1 text-sm text-blue-1 font-semibold"
        >
          <option selected>Price</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>

        <select
          id="categories"
          className="border-b border-blue-1 py-1 px-1 text-sm text-blue-1 font-semibold"
        >
          <option selected>Categories</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
      <button className="w-[15%] py-[0.5rem] text-sm text-gray-300 border border-gray-300">CLEAR ALL</button>
    </div>
  );
}

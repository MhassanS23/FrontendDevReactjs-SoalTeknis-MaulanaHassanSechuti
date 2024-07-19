import React from "react";

export default function FilterCard({ rating, handleChange, reset, category, handleChangeCategory }) {
  return (
    <div className="w-full flex justify-between border-y border-gray-300 px-[5rem] py-[1rem] font-sans">
      <div className="w-[85%] flex gap-6 items-center">
        <p className="text-sm text-gray-600">Filter By: </p>

        <div className="flex items-center gap-2 border-b border-blue-1 py-1 px-1">
            <input type="radio" id="radio-1" />
            <label htmlFor="radio-1" className="text-sm text-blue-1 font-semibold">Open Now</label>
        </div>

        <select
          id="rating"
          value={rating}
          onChange={handleChange}
          className="border-b border-blue-1 py-1 px-1 text-sm text-blue-1 font-semibold"
        >
          <option value="">Rating</option>
          <option value="5">5 star</option>
          <option value="4">more than 4</option>
          <option value="3">more than 3</option>
        </select>

        <select
          id="categories"
          value={category}
          onChange={handleChangeCategory}
          className="border-b border-blue-1 py-1 px-1 text-sm text-blue-1 font-semibold"
        >
          <option value="">Categories</option>
          <option value="Italia">Italia</option>
          <option value="Modern">Modern</option>
          <option value="Sop">Sop</option>
          <option value="Jawa">Jawa</option>
          <option value="Bali">Bali</option>
          <option value="Spanyol">Spanyol</option>
          <option value="Sunda">Sunda</option>
        </select>
      </div>
      <button onClick={reset} className="w-[15%] py-[0.5rem] text-sm text-gray-300 border border-gray-300 hover:bg-blue-1 hover:text-white">CLEAR ALL</button>
    </div>
  );
}

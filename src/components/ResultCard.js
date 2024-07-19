import React, { useEffect } from "react";

// import tryImage from "../assets/poster_404.png";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import Title from "./Title";

// REDUX
// import { useDispatch, useSelector } from "react-redux";
// import { detailRestaurants } from "../features/restaurant/restaurantSlice";

const img_url = process.env.REACT_APP_BASE_IMGURL;

export default function ResultCard({data}) {
//   const detailResto = useSelector(state => state.resto.detail);
//   const dispatch = useDispatch();

//   useEffect(()=>{
//     dispatch(detailRestaurants(data.id));
//   },[data.id]);

const displayStar = (rating) => {
    const stars = [];
    const fullStar = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const star = 5 - fullStar - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStar; i++) {
        stars.push(<IoIosStar key={`fullstar-${i}}`} size="1rem" />);
      }
  
      if (halfStar) {
        stars.push(<IoIosStarHalf key={'halfStar'} size="1rem" />);
      }
  
      for (let i = 0; i < star; i++) {
        stars.push(<IoIosStarOutline key={`star-${i}}`} size="1rem" />);
      }
  
      return stars;
}

  return (
    <div
    key={data.id}
      className={`bg-white shadow-xl flex flex-col gap-2 h-max overflow-hidden rounded-md p-2`}
    >
      <img src={`${img_url}/${data.pictureId}`} alt="restoranimage" className="object-cover w-full h-[10rem]" />
      <Title title={data.name} size={"text-lg font-semibold"} />
      <div className="flex items-center text-blue-1">
        {displayStar(data.rating)} 
        <p className="text-sm">{data.rating}</p>
      </div>
      <div className="flex w-full items-center text-[0.7rem] text-gray-500 justify-between">
        <p>{data.city}</p>

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

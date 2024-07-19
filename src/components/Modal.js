import React, { Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";

// COMPONENTS
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { detailRestaurants } from "../features/restaurant/restaurantSlice";

export default function Modal(props) {
  const img_url = process.env.REACT_APP_BASE_IMGURL;
  const { isOpen, closeModal, id } = props;

  const detailResto = useSelector(state => state.resto.detail);
  const dispatch = useDispatch();

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

  useEffect(()=>{
    dispatch(detailRestaurants(id));
  },[id, dispatch]);

  return (
    <>
      {/* MODALS DELETE */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden shadow-lg rounded-2xl bg-white text-left align-middle transition-all">
                  <div className="flex flex-col gap-4 py-6 px-6 ">

                    <img src={`${img_url}/${detailResto.pictureId}`} alt="restoranimage" className="shadow-lg rounded-2xl object-cover w-full h-[20rem]" />
                    
                    <div className="flex flex-col gap-2">
                        <h1 className="text-center border-b border-blue-1 text-blue-1 mb-1 font-bold text-md">
                            {detailResto.name}
                        </h1>
                        <div className="flex justify-between items-center font-semibold text-sm items-center">
                            <p>{detailResto.city}</p>
                            <p>{detailResto.address}</p>
                        </div>
                        <div className="flex items-center font-bold text-sm text-blue-1">
                            Rating: {displayStar(detailResto.rating)} 
                            <p className="text-sm">{detailResto.rating}</p>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <p className="font-bold text-sm text-blue-1">Categories: </p>
                            {detailResto && detailResto.categories && detailResto.categories.length > 0 ? (detailResto.categories.map((res) =>{
                                return <div key={res.id}>
                                    <p className="rounded-full bg-blue-1 text-[0.7rem] text-white px-4 py-1">{res.name}</p>
                                </div>;
                            })) : (
                                <p className="rounded-full bg-blue-1 text-[0.7rem] text-white px-4 py-1">not found</p>
                            )}
                        </div>
                        <p className="text-blue-1 text-center font-normal text-sm py-2">
                            {detailResto.description}
                        </p>

                        <p className="font-bold text-sm text-blue-1">Foods: </p>
                        <div className="grid grid-cols-3">
                            {detailResto && detailResto.menus && detailResto.menus.foods.length > 0 ? (detailResto.menus.foods.map((res) =>{
                                return <div key={res.id}>
                                    <p className="text-sm text-blue-1">- {res.name}</p>
                                </div>;
                            })) : (
                                <p className="text-sm text-blue-1">not found</p>
                            )}
                        </div>
                        <p className="font-bold text-sm text-blue-1">Drinks: </p>
                        <div className="grid grid-cols-3">
                            {detailResto && detailResto.menus && detailResto.menus.drinks.length > 0 ? (detailResto.menus.drinks.map((res) =>{
                                return <div key={res.id}>
                                    <p className="text-sm text-blue-1">- {res.name}</p>
                                </div>;
                            })) : (
                                <p className="text-sm text-blue-1">not found</p>
                            )}
                        </div>

                        <button
                        onClick={closeModal}
                        className="rounded-lg bg-blue-1 text-sm text-white px-4 py-2 hover:bg-blue-4"
                        >
                        CLOSE DETAIL
                        </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

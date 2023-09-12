import React, { useContext } from "react";
import { StoreContext } from "../../Store/provider";
import { BsPlus } from "react-icons/bs";
import { GrFormSubtract } from "react-icons/gr";
import { MdClose } from "react-icons/md";

const CartItem = ({ item }) => {
  const { removeFromCart, addToCart, increaseAmount } =
    useContext(StoreContext);
  return (
    <div className="">
      <div className="w-full font-light lg:px-6 min-h-[150px] items-center gap-x-4 flex max-w-full border-b border-gray-200 py-2">
        <div className="">
          <img className=" max-w-[80px]" src={item.image} alt="" />
        </div>
        <div className="flex-1">
          <h3 className="text-white text-lg">{item?.title}</h3>
          <h3 className="text-white text-lg">${item?.price}</h3>
          <div className="flex items-center justify-around  ">
            <div
              onClick={() => addToCart(item)}
              className="text-black text-sm rounded-full py-2 px-5 bg-blue-100 cursor-pointer"
            >
              <BsPlus />
            </div>
            <span className="text-black text-sm rounded-full p-3 px-4 font-bold bg-white ">
              {item?.qty ?? 0}
            </span>
            <div
              onClick={() => removeFromCart(item)}
              className="text-pink-600 text-sm rounded-full py-2 px-5  bg-blue-100 cursor-pointer"
            >
              <GrFormSubtract />
            </div>
            <span
              onClick={() => removeFromCart(item)}
              className="text-black-800 text-sm rounded-full py-2 px-5 bg-blue-400 cursor-pointer"
            >
              <MdClose />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

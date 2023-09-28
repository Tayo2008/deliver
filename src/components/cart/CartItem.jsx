import React, { useContext } from "react";
import { StoreContext } from "../../Store/provider";

const CartItem = ({ item }) => {
  const { removeFromCart, addToCart, increaseAmount } =
    useContext(StoreContext);
  return (
    <div className="">
      <div className="w-full font-light lg:px-6 min-h-[150px] items-center gap-x-4 flex max-w-full border-b border-gray-200 py-2">
        <div className="">
          <img className=" max-w-[70px]" src={item.image} alt={item?.title} />
        </div>
        <div className="flex-1">
          <h3 className="text-base md:text-base">{item?.title}</h3>
          <h3 className=" text-lg">${item?.price}</h3>
          <h3 className=" text-lg">
            Total: ${parseFloat(item?.price * item?.qty).toFixed(2)}
          </h3>
          <div className="flex items-center gap-x-2">
            <div
              onClick={() => removeFromCart(item)}
              className="text-white text-base font-bold rounded-full py-1 px-3 bg-black cursor-pointer"
            >
              -
            </div>
            <span className="text-black text-sm rounded-full p-1 px-2 font-bold bg-white ">
              {item?.qty ?? 0}
            </span>
            <div
              onClick={() => addToCart(item)}
              className="text-white text-base font-bold rounded-full py-1 px-3 bg-black cursor-pointer"
            >
              +
            </div>
            <span
              onClick={() => removeFromCart(item)}
              className="text-white text-base font-bold  rounded-full py-1 px-3 bg-red-600 cursor-pointer"
            >
              x
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

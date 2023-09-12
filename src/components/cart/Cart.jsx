import React, { useContext } from "react";

import { IoMdArrowForward } from "react-icons/io";

import CartItem from "./CartItem";
import { StoreContext } from "../../Store/provider";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, handleCloseCart, clearCart } = useContext(StoreContext);

  return (
    <div
      className={`
    w-full bg-pink-300 right-0 fixed top-20 h-full 
    md:w-[28vw] xl:max-w-[28vw] transition-all 
    duration-500 z-10 px-4 lg:px-[20px]`}
    >
      <div className="flex items-center text-white justify-between py-3 border-b">
        <div className="uppercase text-2xl font-semibold">
          Shopping Bag{" "}
          <span className="text-white text-sm rounded-2xl py-1 px-2 mt-2 bg-red-500 cursor-pointer">
            {cart?.length > 0 ? cart?.length : 0}
          </span>
        </div>

        <div
          onClick={clearCart}
          className="py-4 cursor-pointer bg-red-400 text-white text-2xl hover:text-black pt-3 w-12 h-12 flex justify-center"
        >
          <BsTrash />
        </div>
        <div
          onClick={handleCloseCart}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>

      <div className="flex flex-col gap-y-2 h-[440px] lg:h-[450px] overflow-y-auto">
        <section>
          {cart.map((item, index) => {
            return <CartItem item={item} key={index} />;
          })}
        </section>
      </div>
      <div>
        <div className="bg-pink-200 flex pl-4 pt-0 w-full justify-between items-center">
          {/*total */}
          <div>
            <span>Total: </span>$12.56
          </div>
          {/*clear cart item */}
        </div>
        <Link
          to="/"
          className="bg-gray-400 flex px-4 p-2 my-1 justify-center items-center text-red-900 w-full font-medium text-lg"
        >
          View Cart
        </Link>
        <Link
          to="/"
          className="bg-blue-800 flex px-4 p-2 my-1 justify-center items-center text-white w-full font-medium text-lg"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;

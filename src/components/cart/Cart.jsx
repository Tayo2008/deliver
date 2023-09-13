import React, { useContext, useMemo } from "react";

import { IoMdArrowForward } from "react-icons/io";

import CartItem from "./CartItem";
import { StoreContext } from "../../Store/provider";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, handleCloseCart, clearCart } = useContext(StoreContext);

  // console.log(
  //   "============== cart Iteems ============\n",
  //   JSON.stringify(cart, null, 3)
  // );

  const Total_qty = useMemo(
    () => cart?.reduce((accumulator, current) => accumulator + current?.qty, 0),
    [cart]
  );

  const Grand_Total = useMemo(
    () =>
      cart?.reduce((accumulator, current) => {
        const totalPrice = current?.qty * current?.price;

        return accumulator + totalPrice;
      }, 0),
    [cart]
  );

  return (
    <div
      className={`
     bg-white right-0 fixed top-0 h-full 
    md:w-[28vw] xl:max-w-[28vw] transition-all 
    duration-500 z-10 px-4 lg:px-[20px] border-l-2 border-l-gray-200`}
    >
      <div className="relative w-full h-full">
        <div className="w-full flex items-center justify-between py-3">
          <div className="uppercase text-black text-xl md:text-2xl font-semibold flex flex-row items-center justify-center gap-2">
            <p>Shopping Bag</p>
            <span className="text-white text-sm rounded-full h-6 w-6 text-center bg-black cursor-pointer">
              {cart?.length > 0 ? cart?.length : 0}
            </span>
          </div>

          <div
            onClick={handleCloseCart}
            className="cursor-pointer w-8 h-8 flex justify-center items-center"
          >
            <IoMdArrowForward className="text-2xl" />
          </div>
        </div>

        <div className="flex flex-col gap-y-2 max-h-[70%] overflow-y-auto">
          <section>
            {cart.map((item, index) => {
              return <CartItem item={item} key={index} />;
            })}
          </section>
        </div>
        <div className="absolute bottom-4 left-0 right-0">
          <div className=" flex flex-col gap-y-1 pl-4 pt-0 w-full">
            {/*total */}
            <div className="flex gap-x-2 my-2 border-b border-b-black">
              <p>Total Qty: </p>
              <p>
                {Total_qty} <span>items</span>
              </p>
            </div>
            <div className="flex gap-x-2 my-2 border-b border-b-black">
              <p>Grand Total: </p>
              <p>${parseFloat(Grand_Total).toFixed(2)}</p>
            </div>
            {/*clear cart item */}
          </div>
          <button
            onClick={clearCart}
            className="bg-black w-full flex px-4 p-2 my-1 justify-center items-center text-white  font-medium text-lg"
          >
            Clear Cart
            <span className="pl-2">
              <BsTrash className="" />
            </span>
          </button>
          <Link
            to="/"
            className="bg-blue-800 flex px-4 p-2 my-1 justify-center items-center text-white font-medium text-lg"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { StoreContext } from "../../Store/provider";

const Product = ({ item }) => {
  const { addToCart } = useContext(StoreContext);
  const { id, image, category, title, price } = item;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
            />
          </div>
          <div className="absolute top-1 right-0 group-hover:right-1 bg-red-500/20 p-1.5 flex flex-col justify-center items-center gap-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button onClick={() => addToCart(item)}>
              <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500 ">
                <BsPlus className="text-3xl" />
              </div>
            </button>
            <Link
              to="/view"
              className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl "
            >
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      {/* category & title & price */}
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to="/">
          <h2 className="font-semibold mb-1">{title}</h2>
          <div className="font-semibold"> ${price}</div>
        </Link>
      </div>
    </div>
  );
};

export default Product;

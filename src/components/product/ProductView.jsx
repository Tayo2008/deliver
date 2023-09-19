import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../Store/provider";
import { useParams } from "react-router-dom";

const ProductView = () => {
  const { id } = useParams();
  const { addToCart } = useContext(StoreContext);

  const [product, setProduct] = useState({});

  const [isLoading, setisLoading] = useState(false);

  const fetchProducts = async () => {
    setisLoading(true);
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    const subs = fetchProducts();
    return () => subs;
  }, [id]);

  // console.log("========  Product =======\n", JSON.stringify(product, null, 3));

  return (
    <div className="w-3/5 mx-auto pt-10 h-screen mt-10">
      {isLoading ? (
        <h3 className="text-4xl font-bold text-center">
          Fetching Product details...
        </h3>
      ) : (
        <div className="grid md:grid-cols-2 gap-x-1 g px-4 items-center justify-center justify-items-center">
          <div className="flex items-center justify-center">
            <img
              src={product?.image}
              className="max-w-[70%] hover:scale-110 transition duration-300"
              alt={product?.title}
              srcSet=""
            />
          </div>
          <div>
            <div>
              <h2>{product?.title}</h2>
              <h4>${product?.price}</h4>
              <div className="flex gap-x-3">
                <span>{product?.rating?.count} in stock</span>
                <span>⭐ {product?.rating?.rate}</span>
              </div>
              <p>Category: {product?.category}</p>
              <p>{product?.description}</p>
            </div>
            <div className="mt-4">
              <button
                className="bg-black text-white px-4 py-1 rounded-md hover:scale-105 transition duration-300"
                type="button"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
            <div className="mt-4">
              <p>Available colors</p>
              <div className="flex gap-x-2">
                <span className="h-5 w-5 rounded-full bg-black  cursor-pointer hover:scale-110 transition duration-300"></span>
                <span className="h-5 w-5 rounded-full bg-red-300 cursor-pointer hover:scale-110 duration-300"></span>
                <span className="h-5 w-5 rounded-full bg-blue-400 cursor-pointer hover:scale-110 duration-300"></span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductView;

import React, { useState, useEffect } from "react";
import Product from "./Product";
import { BeatLoader } from "react-spinners";

const Products = () => {
  const [products, setProducts] = useState([]);

  const [isLoading, setisLoading] = useState(false);

  const fetchProducts = async () => {
    setisLoading(true);
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <h2 className="flex mb-6 font-sans justify-center items-center py-8 font-bold text-gray-900 sm:text-4xl md:mx-auto">
        quick, brown fox jumps over
      </h2>
      <div className="grid px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]">
        {isLoading ? (
          <span className="flex justify-center items-center ">
            <BeatLoader color="#36d7b7" />

            <BeatLoader color="#36d7b7" />

            <BeatLoader color="#36d7b7" />
          </span>
        ) : (
          <>
            {products?.length === 0 ? (
              <h1 className="text-1 text-lg">Product is currently empty</h1>
            ) : (
              products?.map((item, index) => {
                return (
                  <>
                    <Product key={index} item={item} />
                  </>
                );
              })
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Products;

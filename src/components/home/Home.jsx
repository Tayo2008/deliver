import React, { useContext } from "react";
import Products from "../product/Products";
import Hero from "../hero/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <section className="py-10 px-5 relative flex flex-col-reverse lg:flex-col lg:pb-4 lg:px-12 lg:py-12">
        <div className="">
          <Products />
        </div>
      </section>
    </>
  );
};

export default Home;

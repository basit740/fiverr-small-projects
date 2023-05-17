import React from "react";
//components
import Categories from "../websiteComponents/Categories";
import FilterCategories from "../websiteComponents/FilterCategories";
import HomeCarousel from "../websiteComponents/HomeCarousel";
const Home = () => {
  return (
    <>
      <HomeCarousel />
      <div className="container mx-auto relative">
        <div className=" bg-accent/20 mt-4 p-4 lg:shadow-xl lg:absolute  lg:left-0 lg:right-0 lg:p-0 lg:z-30 lg:-top-12">
          <FilterCategories />
        </div>
      </div>
      <Categories />
    </>
  );
};

export default Home;

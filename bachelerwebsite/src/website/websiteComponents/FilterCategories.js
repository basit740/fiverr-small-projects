import React from "react";
import Arrival from "../websiteComponents/Arrival";
import Departure from "../websiteComponents/Departure";
import CategoryType from "../websiteComponents/CategoryType";
import { useNavigate } from "react-router-dom";
const FilterCategories = () => {
  const navigate = useNavigate();

  return (
    <form className="h-[300px] w-full lg:h-[70px]">
      <div className="flex flex-col w-full h-full lg:flex-row">
        <div className="flex-1 border border-r">
          <Arrival />
        </div>
        <div className="flex-1 border border-r">
          <Departure />
        </div>
        <div className="flex-1 border border-r">
          <CategoryType />
        </div>
        <button
          onClick={() => {
            navigate("/BachelorWebApp/bookaroom");
          }}
          className={`btn btn-primary`}
        >
          Book now
        </button>
      </div>
    </form>
  );
};

export default FilterCategories;

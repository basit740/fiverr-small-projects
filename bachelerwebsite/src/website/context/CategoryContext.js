import React, { createContext, useEffect, useState } from "react";
//data
import { categoryData } from "../data/CategoryData"
//create context
export const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState(categoryData);
  const [arrival, setArrival] = useState("Arrival");
  const [departure, setDeparture] = useState("Departure");
  const [categoryType, setCategoryType] = useState("Category");

  return (
    <CategoryContext.Provider
      value={{
        categories,
        arrival,
        setArrival,
        departure,
        setDeparture,
        categoryType,
        setCategoryType,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;

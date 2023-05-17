import React, { useState, useEffect } from "react";
import { Select, Option } from "@material-tailwind/react";
import {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../../api/categories";
const CategoryDataComponent = () => {
  const [categories, setCategories] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropDown = (event) => {
    setSelectedOption(event.target.value);
  };
  const fetchCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div style={{ maxHeight: "500px" }}>
      <div className="min-h-screen">
        <div className="flex items-center justify-center ">
          <div className="mx-auto w-full max-w-[550px]">
            <div className="w-full px-3 ">
              <div className="mb-5">
                <label
                  className="mb-3 block text-base font-medium text-[#07074D]"
                  htmlFor="roomCategoryDropDown"
                >
                  Room Category
                </label>
                <div
                  className="w-full border "
                  name="roomCategoryDropDown"
                  id="roomCategoryDropDown"
                >
                  <Select size="lg" label="Select Room Category">
                    {categories.map((category) => (
                      <Option key={category.id} value={category.categoryName}>
                        {category.categoryName}
                      </Option>
                    ))}
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDataComponent;

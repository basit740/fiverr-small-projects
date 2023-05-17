import React, { useContext } from "react";
import { Menu } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { categoryData } from "../data/CategoryData";
import { CategoryContext } from "../context/CategoryContext";

const CategoryType = () => {
  const { categoryType, setCategoryType } = useContext(CategoryContext);
  return (
    <Menu as="div" className="w-full h-full bg-white relative">
      <Menu.Button className="w-full h-full flex items-center justify-between px-8 ">
        {categoryType}
        <BsChevronDown className="text-base text-accent-hover" />
      </Menu.Button>
      <Menu.Items
        as="ul"
        className="bg-white absolute w-full flex flex-col z-40"
      >
        {categoryData.map((li) => {
          return (
            <Menu.Item
              as="li"
              className="border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer"
              key={li.id}
              onClick={() => setCategoryType(li.name)}
            >
              {li.name}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default CategoryType;

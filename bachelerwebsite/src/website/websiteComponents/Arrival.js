import React, { useContext } from "react";
import { BsCalendar } from "react-icons/bs";
import { Menu } from "@headlessui/react";
import { CategoryContext } from "../context/CategoryContext";

export function getArrivalDates() {
  const availableMonths = [2, 8];
  const now = new Date();
  const currentYear = now.getFullYear();

  const arrivalDates = [];
  for (let year = currentYear; year <= currentYear + 2; year++) {
    availableMonths.forEach((month) => {
      const arrivalDay = month === 2 ? 3 : 1; // Set the arrival day based on the month
      const arrivalDate = new Date(year, month - 1, arrivalDay);
      if (arrivalDate >= now) {
        // Add the arrival date only if it's in the future
        arrivalDates.push(arrivalDate);
      }
    });
  }
  return arrivalDates;
}

export const arrivalList = getArrivalDates().map((date) => ({
  name: date.toLocaleDateString("en-GB"),
  value: date,
}));

export default function Arrival() {
  const { arrival, setArrival } = useContext(CategoryContext);

  return (
    <Menu as="div" className="w-full h-full bg-white relative">
      <Menu.Button className="w-full h-full flex items-center justify-between px-8 ">
        {arrival}
        <BsCalendar className=" text-accent text-base" />
      </Menu.Button>
      <Menu.Items
        as="ul"
        className="bg-white absolute w-full flex flex-col z-40"
      >
        {arrivalList.map((li, index) => {
          return (
            <Menu.Item
              as="li"
              className="border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer"
              key={index}
              onClick={() => setArrival(li.name)}
            >
              {li.name}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}

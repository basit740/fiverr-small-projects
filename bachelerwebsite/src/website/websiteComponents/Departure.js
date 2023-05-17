import React, { useContext } from "react";
import { BsCalendar } from "react-icons/bs";
import { Menu } from "@headlessui/react";
import { CategoryContext } from "../context/CategoryContext";

export function getDepartureDates() {
  const availableMonths = [2, 8];
  const now = new Date();
  const currentYear = now.getFullYear();

  const departureDates = [];
  for (let year = currentYear; year <= currentYear + 3; year++) {
    // changed from 2 to 3
    availableMonths.forEach((month) => {
      const departureDay = month === 2 ? 3 : 1; // Set the departure day based on the month
      const departureDate = new Date(year, month - 1, departureDay);
      if (departureDate >= now) {
        // Add the departure date only if it's in the future
        departureDates.push(departureDate);
      }
    });
  }
  return departureDates;
}

export const departureList = getDepartureDates().map((date) => ({
  name: date.toLocaleDateString("en-GB"),
  value: date,
}));

export default function Departure() {
  const { departure, setDeparture } = useContext(CategoryContext);

  return (
    <Menu as="div" className="w-full h-full bg-white relative">
      <Menu.Button className="w-full h-full flex items-center justify-between px-8 ">
        {departure}
        <BsCalendar className=" text-accent text-base" />
      </Menu.Button>
      <Menu.Items
        as="ul"
        className="bg-white absolute w-full flex flex-col z-40"
      >
        {departureList.map((li, index) => {
          return (
            <Menu.Item
              as="li"
              className="border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer"
              key={index}
              onClick={() => setDeparture(li.name)}
            >
              {li.name}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}

import React, { useState, useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";

const TopAppBar = ({ currentPage }) => {
  const [topAppBar, setTopAppBar] = useState(false);
  const [hideTopAppBar, setHideTopAppBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setTopAppBar(true) : setTopAppBar(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (currentPage === "/BachelorWebApp/checkoutform") {
      setHideTopAppBar(true);
    } else {
      setHideTopAppBar(false);
    }
  }, [currentPage]);

  const headerBgColor = useMemo(() => {
    if (
      currentPage === "/BachelorWebApp/contact" ||
      currentPage === "/BachelorWebApp/bookaroom"
    ) {
      return "bg-black py-6 shadow-lg";
    } else {
      return "bg-transparent py-8";
    }
  }, [currentPage]);

  const Links = [
    {
      name: "Home",
      link: "/BachelorWebApp",
    },
    {
      name: "Rooms & Categories",
      link: "/",
    },
    {
      name: "Book a room",
      link: "/BachelorWebApp/bookaroom",
    },
    {
      name: "Contact",
      link: "/BachelorWebApp/contact",
    },
    {
      name: "Administration",
      link: "/BachelorWebApp/adminsignin",
    },
  ];

  return hideTopAppBar ? null : (
    <header
      className={`${
        topAppBar ? "bg-white py-6 shadow-lg" : headerBgColor
      } fixed z-50 w-full transition-all duration-500`}
    >
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
        <button href="/" className=""></button>
        <ul
          className={`${
            topAppBar ? "text-primary" : "text-white"
          } flex gap-x-4 font-tertiary tracking-[3px] text-[15px] items-center uppercase lg:gap-x-8`}
        >
          {Links.map((link) => (
            <li key={link.name} className="hover:text-accent transition">
              <NavLink to={link.link}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default TopAppBar;

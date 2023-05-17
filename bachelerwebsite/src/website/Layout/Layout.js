import React from "react";

import TopAppBar from "../Navbar/TopAppbar";
import BottomAppBar from "../Navbar/BottomAppBar";

const Layout = ({ children, currentPage }) => {
  return (
    <>
      <TopAppBar currentPage={currentPage} />
      {children}
      <BottomAppBar />
    </>
  );
};

export default Layout;

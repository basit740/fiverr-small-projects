import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { logout } from "../../store/reducers/authSlice";
import { useDispatch, useSelector } from "react-redux";

const SideBarAdministration = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const handleSignout = (e) => {
    e.preventDefault();

    // console.log(window.location.href);

    localStorage.setItem("lastPage", window.location.href);

    // signout using redux
    dispatch(logout());

    window.location.href = "/BachelorWebApp/adminsignin";
  };
  return (
    <aside
      id="sidebar-multi-level-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {user && user.roleId !== 3 && (
            <li>
              <NavLink
                to="/BachelorWebApp"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="ml-3">Dashboard</span>
              </NavLink>
            </li>
          )}

          <li>
            <NavLink
              to="/BachelorWebApp/admin/tenants"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Tenants</span>
            </NavLink>
          </li>
          {user && user.roleId !== 3 && (
            <li>
              <NavLink
                to="/BachelorWebApp/admin/invoices"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">Invoices</span>
              </NavLink>
            </li>
          )}
          {user && user.roleId !== 3 && (
            <li>
              <NavLink
                to="/BachelorWebApp/admin/finances"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">Finances</span>
              </NavLink>
            </li>
          )}
          <li>
            <NavLink
              to="/BachelorWebApp/admin/profile"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/BachelorWebApp/admin/administrators"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Employees</span>
            </NavLink>
          </li>
          {user && user.roleId !== 3 && (
            <li>
              <NavLink
                to="/BachelorWebApp/admin/categories"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Categories
                </span>
              </NavLink>
            </li>
          )}
          <li>
            <NavLink
              to="/BachelorWebApp/admin/signout"
              onClick={(e) => handleSignout(e)}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBarAdministration;

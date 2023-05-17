import React, { useState, useEffect } from "react";
import Signin from "../administrationComponents/Signin";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdministrationSignin = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const navigate = useNavigate();

  // Check if the user is not logged in, redirect to the login page

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/BachelorWebApp/admin");
      return;
    }
  });
  return (
    <div>
      <Signin />
    </div>
  );
};

export default AdministrationSignin;

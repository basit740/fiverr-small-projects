import React from "react";

//components imports
import Layout from "./website/Layout/Layout";
import TopAppbar from "./website/Navbar/TopAppbar";
import BottomAppbar from "./website/Navbar/BottomAppBar";
import ScrollToTop from "./website/websiteComponents/ScrollToTop";
//pages imports
import Home from "./website/websitePages/Home";
import CategoryDetails from "./website/websitePages/CategoryDetails";
import Contact from "./website/websitePages/Contact";
import BookRoom from "./website/websitePages/BookRoom";
import Checkout from "./website/websitePages/Checkout";
import AdministrationSignin from "./administration/administrationPages/AdministrationSignin";
import AdministrationSignUp from "./administration/administrationPages/AdministrationSignUp";
//react router
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminLayout from "./administration/administrationPages/AdminLayout";
import Invoices from "./administration/administrationPages/Invoices";
import Tenants from "./administration/administrationPages/Tenants";
import Profile from "./administration/administrationPages/Profile";
import Calendar from "./administration/administrationPages/Calendar";
import Finances from "./administration/administrationPages/Finances";
import Index from "./administration/administrationPages/Index";
import Administrators from "./administration/administrationPages/Administrators";
import Categories from "./administration/administrationPages/Categories";

const App = () => {
  const AdminApp = () => {
    return (
      <AdminLayout>
        <Routes>
          <Route path="" element={<Index />} />
          <Route path="/tenants" element={<Tenants />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/finances" element={<Finances />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/administrators" element={<Administrators />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </AdminLayout>
    );
  };
  return (
    <div>
      <ThemeProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route
              path="/BachelorWebApp"
              element={
                <Layout currentPage={window.location.pathname}>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/BachelorWebApp/category/:id"
              element={
                <Layout currentPage={window.location.pathname}>
                  <CategoryDetails />
                </Layout>
              }
            />
            <Route
              path="/BachelorWebApp/contact"
              element={
                <Layout currentPage={window.location.pathname}>
                  <Contact />
                </Layout>
              }
            />
            <Route
              path="/BachelorWebApp/bookaroom"
              element={
                <Layout currentPage={window.location.pathname}>
                  <BookRoom />
                </Layout>
              }
            />
            <Route path="/BachelorWebApp/invoices" element={<Invoices />} />
            <Route
              path="/BachelorWebApp/checkout"
              element={
                <Layout currentPage={window.location.pathname}>
                  <Checkout />
                </Layout>
              }
            />
            <Route
              path="/BachelorWebApp/adminsignin"
              element={<AdministrationSignin />}
            />
            <Route
              path="/BachelorWebApp/adminsignup"
              element={<AdministrationSignUp />}
            />
            <Route
              path="/BachelorWebApp/admin/*"
              element={<AdminApp />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;

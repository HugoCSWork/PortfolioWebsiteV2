import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "./Layout.css";

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default Layout;

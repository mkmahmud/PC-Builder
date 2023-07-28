import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const RootLayout = ({ children }) => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div>{children}</div>
      <Footer></Footer>
    </div>
  );
};
export default RootLayout;

import React from "react";
// import Navbar from "../components/Navbar";
import { BrowserRouter } from "react-router-dom";
import NavbarTailwind from "../components/NavbarTailwind";

const AppRouter = () => {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
    <NavbarTailwind/>
  </BrowserRouter>
  )
 
};

export default AppRouter;

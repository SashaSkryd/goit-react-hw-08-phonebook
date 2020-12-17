import React from "react";
// import { Container, CssBaseline } from "@material-ui/core";

import Navbar from "../Navbar/Navbar.js";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* <CssBaseline /> */}
      {/* <Container component="section" maxWidth="xl"> */}
        {children}
      {/* </Container> */}
    </>
  );
};

export default Layout;

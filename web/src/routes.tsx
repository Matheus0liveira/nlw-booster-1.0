import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Createpoint from "./Pages/CreatePoint";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact component={Home} path="/" />
      <Route component={Createpoint} path="/create-point" />
    </BrowserRouter>
  );
};

export default Routes;

import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RootRoute } from "@/routing/RootRoute";

export const Layout = () => (
  <BrowserRouter>
    <RootRoute />
  </BrowserRouter>
);

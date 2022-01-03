import React, { useContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export const Routes = () => {
  const token = localStorage.getItem("Authorization");

  return (
    <BrowserRouter>{token ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
};

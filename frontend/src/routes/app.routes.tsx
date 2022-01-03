import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "../pages/login";
import { Table } from "../pages/tableUser";
import { NotAdministrator } from "../pages/commomUser";
import { Home } from "../pages/dashboard";

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/dashboard" component={Home} />
      <Redirect to="/dashboard" />
    </Switch>
  );
};

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "../pages/login";

export const AuthRoutes = () => {
  return (
    <Switch>
      <Route path="/" component={Login} />
      <Redirect to="/" />
    </Switch>
  );
};

import React from "react";
import { Route, Redirect } from "react-router-dom";
import withAuth from "../hocs/withAuth";

const PublicRoute = ({ component: Component, loginIn, ...routeProps }) => {
  return (
    <Route
      {...routeProps}
      render={(props) => {
        return loginIn && routeProps.restricted ? (
          <Redirect to="/contacts" />
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
};

export default withAuth(PublicRoute);

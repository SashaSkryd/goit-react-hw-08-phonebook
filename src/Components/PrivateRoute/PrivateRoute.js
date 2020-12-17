import React from "react";
import { Route, Redirect } from "react-router-dom";
import withAuth from "../hocs/withAuth";

const PrivateRoute = ({ component: Component, loginIn, ...routeProps }) => {
  return (
    <Route
      {...routeProps}
      render={(props) =>
        loginIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default withAuth(PrivateRoute);
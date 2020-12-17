import React from "react";
import { NavLink } from "react-router-dom";
import { routesPath } from "../../services/routes.js";

const AuthNavigation = () => {
  return (
    <>
      <li className="nav-item">
        <NavLink
          exact
          to={routesPath.LOGIN}
          className="nav-link"
          activeClassName="active"
        >
          Login
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          exact
          to={routesPath.REGISTER}
          className="nav-link"
          activeClassName="active"
        >
          Register
        </NavLink>
      </li>
    </>
  );
};

export default AuthNavigation;
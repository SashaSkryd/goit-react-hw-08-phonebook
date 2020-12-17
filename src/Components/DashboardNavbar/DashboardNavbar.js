import React from "react";
import { NavLink } from "react-router-dom";
import { routesPath } from "../../services/routes.js";

const DashboardNavigation = () => {
  return (
    <li className="nav-item">
      <NavLink
        exact
        to={routesPath.CONTACTS}
        className="nav-link"
        activeClassName="active"
      >
        Contacts
      </NavLink>
    </li>
  );
};

export default DashboardNavigation;

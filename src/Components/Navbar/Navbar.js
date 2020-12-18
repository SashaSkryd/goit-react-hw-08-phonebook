import React from "react"
import { NavLink } from "react-router-dom"

import { routesPath } from "../../services/routes.js"
import UserProfile from "../UserProfile/UserProfile.js"
import withAuth from "../hocs/withAuth"
import AuthNavigation from "../AuthNavbar/AuthNavbar.js"
import DashboardNavigation from "../DashboardNavbar/DashboardNavbar.js"

const Navbar = ({ loginIn }) => {
  const authNavigation = !loginIn && <AuthNavigation />
  const dashboardNavigation = loginIn && <DashboardNavigation />

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact to={routesPath.HOME} className="nav-link" activeClassName="active">
              Home
            </NavLink>
          </li>
          {authNavigation}
          {dashboardNavigation}
        </ul>
        <UserProfile />
      </div>
    </nav>
  )
}

export default withAuth(Navbar)

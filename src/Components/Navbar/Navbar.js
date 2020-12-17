import React from "react";
import { NavLink } from "react-router-dom";

import { routesPath } from "../../services/routes.js";
import UserProfile from "../UserProfile/UserProfile.js";
import withAuth from "../hocs/withAuth";
import AuthNavigation from "../AuthNavbar/AuthNavbar.js";
import DashboardNavigation from "../DashboardNavbar/DashboardNavbar.js";

// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import { Link } from "@material-ui/core";
//
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
//   link: {
//     color: "red",
//     fontSize: "2rem",
//     transition: ".3s",
//     "&:hover": {
//       color: "green",
//       fontSize: "3rem",
//       textDecoration: "none",
//     },
//   },
// }));

// const LinkRouter = (props) => <Link component={NavLink} {...props} />;

const Navbar = ({ loginIn }) => {
  // const classes = useStyles();

  const authNavigation = !loginIn && <AuthNavigation />;
  const dashboardNavigation = loginIn && <DashboardNavigation />;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              exact
              to={routesPath.HOME}
              className="nav-link"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          {authNavigation} 
         {dashboardNavigation}
        </ul>
        <UserProfile />
      </div>
    </nav>
    // <AppBar position="static">
    //   <Toolbar>
    //     <IconButton
    //       edge="start"
    //       className={classes.menuButton}
    //       color="inherit"
    //       aria-label="menu"
    //     >
    //       <MenuIcon />
    //     </IconButton>
    //     <Typography variant="h6" className={classes.title}>
    //       <LinkRouter to={routesPath.HOME}>Home</LinkRouter>
    //     </Typography>
    //   </Toolbar>
    //   <LinkRouter className={classes.link} to={routesPath.LOGIN}>
    //     Home
    //   </LinkRouter>
    // </AppBar>
  );
};

export default withAuth(Navbar);
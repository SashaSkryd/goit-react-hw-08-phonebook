import { lazy } from "react";

const HomePage = lazy(() => import("../pages/Home/HomaPage"));
const LoginPage = lazy(() => import("../pages/Login/LoginPage"));
const RegisterPage = lazy(() => import("../pages/Register/RegisterPage"));
const ContactsPage = lazy(() => import("../pages/Contacts/ContactsPage"));
const NotFoundPage = lazy(()=> import("../pages/NotFound/NotFoundPage"))

const routesPath = {
  HOME: "/",
  REGISTER: "/register",
  LOGIN: "/login",
  CONTACTS: "/contacts",
};

const routes = [
  {
    path: routesPath.HOME,
    exact: true,
    component: HomePage,
    private: false,
    restricted: false,
  },
  {
    path: routesPath.REGISTER,
    exact: true,
    component: RegisterPage,
    private: false,
    restricted: true,
  },
  {
    path: routesPath.LOGIN,
    exact: true,
    component: LoginPage,
    private: false,
    restricted: true,
  },
  {
    path: routesPath.CONTACTS,
    exact: true,
    component: ContactsPage,
    private: true,
    restricted: false,
    },
    {
    exact: true,
    component: NotFoundPage,
    private: false,
    restricted: false, 
  }
];

export { routes, routesPath };

/* ------------------------------- all routes ------------------------------- */

import Home from "../pages/home/Home";
import NewUser from "../pages/newUser/NewUser";
import Products from "../pages/products/Products";
import Users from "../pages/users/Users";

export let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <Users /> },
  { path: "/newUser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
];

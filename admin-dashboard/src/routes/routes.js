/* ------------------------------- all routes ------------------------------- */

import Home from "../pages/home/Home";
import NewUsers from "../pages/newUsers/NewUsers";
import Products from "../pages/products/Products";
import Users from "../pages/users/Users";

export let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <Users /> },
  { path: "/newUsers", element: <NewUsers /> },
  { path: "/products", element: <Products /> },
];

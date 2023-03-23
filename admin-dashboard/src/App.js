import { routes } from "./routes/routes";
import React from "react";
import { useRoutes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

function App() {
  // useRoutes(addExternalRoutes)
  let router = useRoutes(routes);
  return (
    <div>
      <Topbar/>
      <Sidebar />
      {router}
    </div>
  );
}

export default App;

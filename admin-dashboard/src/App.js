import { routes } from "./routes/routes";
import React from "react";
import { useRoutes } from "react-router-dom";

function App() {
  // useRoutes(addExternalRoutes)
  let router = useRoutes(routes);
  return (
    <div>
      <p>App</p>
      {router}
    </div>
  );
}

export default App;

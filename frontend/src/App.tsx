import React from "react";
import { AppRoutes } from "./routes/app.routes";
import { GlobalStyle } from "./Global/global";

function App() {
  return (
    <>
      <AppRoutes />
      <GlobalStyle />
    </>
  );
}

export default App;

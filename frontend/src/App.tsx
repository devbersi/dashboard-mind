import React, { useEffect } from "react";
import { GlobalStyle } from "./Global/global";
import { Routes } from "./routes";
import { AuthProvider } from "./Contexts/AuthContext";
import { UserProvider } from "./Contexts/UserContext";

function App() {
  return (
    <>
      <AuthProvider>
        <UserProvider>
          <Routes />
          <GlobalStyle />
        </UserProvider>
      </AuthProvider>
    </>
  );
}

export default App;

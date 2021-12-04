import { ChakraProvider, theme } from "@chakra-ui/react";
import { FC, useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from ".";
import { HomePage } from "./pages/Home";

import { SignInPage } from "./pages/SignIn";
import { SignUpPage } from "./pages/SignUp";

export const App: FC = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.refreshAuth();
    }
  });

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

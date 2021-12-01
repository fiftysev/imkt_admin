import { ChakraProvider, theme } from "@chakra-ui/react";
import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { SignInPage } from "./pages/SignIn";
import { SignUpPage } from "./pages/SignUp";

export const App: FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/login" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

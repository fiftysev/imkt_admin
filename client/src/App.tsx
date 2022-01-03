import { ChakraProvider, theme } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { FC, useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Context } from ".";
import { HomePage } from "./pages/Home";

import { SignInPage } from "./pages/SignIn";
import { SignUpPage } from "./pages/SignUp";

export const App: FC = observer(() => {
  const { store, dataStore } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.refreshAuth();
    }
    dataStore.updateGroupsList();
    dataStore.getGroupToUpdate("60cc55ed7e001e5b1c8810bc");
  });

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route
            path="/*"
            element={store.isAuth ? <HomePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={store.isAuth ? <Navigate to="/" /> : <SignInPage />}
          />
          <Route
            path="/signup"
            element={store.isAuth ? <Navigate to="/" /> : <SignUpPage />}
          />
        </Routes>
      </Router>
    </ChakraProvider>
  );
});

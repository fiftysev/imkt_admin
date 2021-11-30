import { ChakraProvider, theme } from "@chakra-ui/react";
import { FC } from "react";
import { SignInPage } from "./pages/SignIn";

export const App: FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <SignInPage />
    </ChakraProvider>
  );
};

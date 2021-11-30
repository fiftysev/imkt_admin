import { Flex } from "@chakra-ui/layout";
import { FC } from "react";
import { SignInForm } from "../components/forms/SignIn";

export const SignInPage: FC = () => {
  return (
    <Flex width="full" align="center" justifyContent="center">
      <SignInForm />
    </Flex>
  );
};

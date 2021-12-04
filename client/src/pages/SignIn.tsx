import { Flex } from "@chakra-ui/layout";
import { FC } from "react";
import SignInForm from "../components/SignInForm";

export const SignInPage: FC = () => {
  return (
    <Flex w="full" h="100vh" align="center" justifyContent="center">
      <SignInForm />
    </Flex>
  );
};

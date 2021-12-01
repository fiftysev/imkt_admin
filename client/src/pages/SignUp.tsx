import { Flex } from "@chakra-ui/layout";
import { FC } from "react";
import { SignUpForm } from "../components/SignUpForm";

export const SignUpPage: FC = () => {
  return (
    <Flex w="full" h="100vh" align="center" justifyContent="center">
      <SignUpForm />
    </Flex>
  );
};

import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Heading } from "@chakra-ui/layout";
import { FC } from "react";

export const SignInForm: FC = () => {
  return (
    <Box p={2}>
      <Box textAlign="center">
        <Heading size="lg">Вход в систему</Heading>
      </Box>
      <Box my={4}>
        <form>
          <FormControl>
            <FormLabel>Имя пользователя</FormLabel>
            <Input type="text" placeholder="IvanovIv23"></Input>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Пароль</FormLabel>
            <Input type="password" placeholder="*******"></Input>
          </FormControl>
          <Button mt={4} type="submit"></Button>
        </form>
      </Box>
    </Box>
  );
};

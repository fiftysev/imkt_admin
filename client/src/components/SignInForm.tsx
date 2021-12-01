import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Heading } from "@chakra-ui/layout";
import { FC } from "react";

export const SignInForm: FC = () => {
  return (
    <Box p={8} minW="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
      <Box textAlign="center">
        <Heading size="lg">Вход в систему</Heading>
      </Box>
      <Box my={4}>
        <form>
          <FormControl isRequired>
            <FormLabel>Имя пользователя</FormLabel>
            <Input type="text" placeholder="IvanovIv23"></Input>
          </FormControl>
          <FormControl mt={4} isRequired>
            <FormLabel>Пароль</FormLabel>
            <Input type="password" placeholder="*******"></Input>
          </FormControl>
          <Button colorScheme="green" w="full" mt={4} type="submit">
            Войти
          </Button>
        </form>
      </Box>
    </Box>
  );
};

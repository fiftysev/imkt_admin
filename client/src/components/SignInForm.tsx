import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Heading, VStack } from "@chakra-ui/layout";
import { FC } from "react";

export const SignInForm: FC = () => {
  return (
    <Box p={8} minW={"500px"} borderWidth={1} borderRadius={8} boxShadow={"lg"}>
      <Heading size={"lg"} textAlign={"center"} mb={4}>
        Вход в систему
      </Heading>
      <form>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Имя пользователя</FormLabel>
            <Input type="text" placeholder="IvanovIv23" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Пароль</FormLabel>
            <Input type="password" placeholder="*******" />
          </FormControl>
          <Button colorScheme={"green"} w={"full"} type="submit">
            Войти
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Heading, VStack } from "@chakra-ui/layout";
import { FC, useState } from "react";

export const SignInForm: FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Box p={8} minW={"500px"} borderWidth={1} borderRadius={8} boxShadow={"lg"}>
      <Heading size={"lg"} textAlign={"center"} mb={4}>
        Вход в систему
      </Heading>
      <form>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Имя пользователя</FormLabel>
            <Input
              type="text"
              value={username}
              placeholder="IvanovIv23"
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Пароль</FormLabel>
            <Input
              type="password"
              value={password}
              placeholder="*******"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button colorScheme={"green"} w={"full"} type="submit">
            Войти
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

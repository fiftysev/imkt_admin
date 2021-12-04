import { FC, useContext, useState } from "react";
import { observer } from "mobx-react-lite";

import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Heading, VStack } from "@chakra-ui/layout";

import { Context } from "..";

const SignInForm: FC = () => {
  const { store } = useContext(Context);

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
          <Button
            colorScheme={"green"}
            w={"full"}
            onClick={() => {
              store.login(username, password);
            }}
          >
            Войти
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default observer(SignInForm);

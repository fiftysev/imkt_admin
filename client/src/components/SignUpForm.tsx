import { Button } from "@chakra-ui/button";
import { Box, HStack, VStack } from "@chakra-ui/layout";
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Text,
  Link,
} from "@chakra-ui/react";
import { FC, useContext, useState } from "react";
import { Context } from "..";

export const SignUpForm: FC = () => {
  const { store } = useContext(Context);

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");

  return (
    <Box p={8} minW={"500px"} borderWidth={1} borderRadius={8} boxShadow={"lg"}>
      <Heading size={"lg"} textAlign={"center"} mb={4}>
        Регистрация
      </Heading>
      <form>
        <VStack spacing={4}>
          <HStack spacing={2}>
            <FormControl isRequired>
              <FormLabel>Имя</FormLabel>
              <Input
                type="text"
                value={firstName}
                placeholder="Иван"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Фамилия</FormLabel>
              <Input
                type="text"
                value={lastName}
                placeholder="Иванов"
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormControl>
          </HStack>
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
          <FormControl isRequired>
            <FormLabel>Подтверждение пароля</FormLabel>
            <Input
              type="password"
              value={passwordConfirmation}
              placeholder="*******"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </FormControl>
          <Button
            colorScheme={"green"}
            w={"full"}
            onClick={() => {
              store.register(firstName, lastName, username, password);
            }}
          >
            Войти
          </Button>
          <Box>
            <Text fontSize={"md"}>
              Уже есть аккаунт?{" "}
              <Link href="/login" color={"cyan.600"}>
                Войти
              </Link>
            </Text>
          </Box>
        </VStack>
      </form>
    </Box>
  );
};

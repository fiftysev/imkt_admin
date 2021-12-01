import { Button } from "@chakra-ui/button";
import { Box, HStack, VStack } from "@chakra-ui/layout";
import { Heading, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FC, useState } from "react";

export const SignUpForm: FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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
          <Button colorScheme={"green"} w={"full"} type="submit">
            Войти
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

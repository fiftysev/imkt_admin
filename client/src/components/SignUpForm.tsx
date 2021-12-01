import { Button } from "@chakra-ui/button";
import { Box, HStack, VStack } from "@chakra-ui/layout";
import { Heading, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FC } from "react";

export const SignUpForm: FC = () => {
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
              <Input type="text" placeholder="Иван" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Фамилия</FormLabel>
              <Input type="text" placeholder="Иванов" />
            </FormControl>
          </HStack>
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

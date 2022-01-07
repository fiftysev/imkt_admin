import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

const MasterForm = () => {
  const [name, setName] = useState<string>("");
  const [classroom, setClassroom] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contact, setContact] = useState<string>("");

  return (
    <Box flex="1" p={8}>
      <form>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Имя руководителя образовательной программы</FormLabel>
            <Input
              type="text"
              name="name"
              placeholder="Иванов А.А."
              value={name}
              onChange={(e) => setName(e.target.value)}
              isRequired
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Кабинет</FormLabel>
            <Input
              type="text"
              name="classroom"
              placeholder="D953"
              onChange={(e) => setClassroom(e.target.value)}
              value={classroom}
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Адрес электронной почты</FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="ivanov.aa@dvfu.ru"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Дополнительный контакт</FormLabel>
            <Input
              type="text"
              name="another_contact"
              placeholder="@IvanovAA"
              onChange={(e) => setContact(e.target.value)}
              value={contact}
            ></Input>
          </FormControl>
          <Button alignSelf="flex-end" colorScheme="blue" type="submit">
            Сохранить
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default MasterForm;

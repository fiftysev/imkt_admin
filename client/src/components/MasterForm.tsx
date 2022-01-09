import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { AxiosError } from "axios";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "..";
import { emptyMaster } from "../data/constants";
import { IMaster } from "../models/IMaster";

import MastersService from "../utils/masters.service";

type MasterFormProps = {
  master?: IMaster;
};

const MasterForm = ({ master }: MasterFormProps) => {
  const { dataStore } = useContext(Context);
  const params = useParams();
  const navigate = useNavigate();
  const toast = useToast();

  const masterData = params.id
    ? dataStore.masters.find((it) => it._id === params.id)
    : emptyMaster;

  const [name, setName] = useState<string>(masterData.name);
  const [classroom, setClassroom] = useState<string>(masterData.classroom);
  const [email, setEmail] = useState<string>(masterData.email);
  const [contact, setContact] = useState<string>(masterData.another_contact);

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
          <Button
            alignSelf="flex-end"
            colorScheme="blue"
            type="submit"
            onClick={async (e) => {
              e.preventDefault();
              if (masterData._id) {
                await MastersService.updateMaster({
                  name,
                  classroom,
                  email,
                  another_contact: contact,
                  _id: masterData._id,
                })
                  .then((res) => {
                    toast({
                      title: "Успешно",
                      description: `Данные успешно обновлены`,
                      status: "success",
                      duration: 5000,
                      isClosable: true,
                    });
                    dataStore.updateMastersList();
                    navigate("/masterslist");
                  })
                  .catch((e: AxiosError) =>
                    toast({
                      title: "Ошибка",
                      description: e.response.data,
                      status: "error",
                      duration: 5000,
                      isClosable: true,
                    })
                  );
              } else {
                await MastersService.createMaster({
                  name,
                  classroom,
                  email,
                  another_contact: contact,
                })
                  .then((res) => {
                    toast({
                      title: "Успешно",
                      description: `Данные успешно обновлены`,
                      status: "success",
                      duration: 5000,
                      isClosable: true,
                    });
                    dataStore.updateMastersList();
                    navigate("/masterslist");
                  })
                  .catch((e: AxiosError) => {
                    toast({
                      title: "Ошибка",
                      description: e.response.data,
                      status: "error",
                      duration: 5000,
                      isClosable: true,
                    });
                  });
              }
            }}
          >
            Сохранить
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default MasterForm;

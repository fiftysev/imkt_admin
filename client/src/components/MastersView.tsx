import {
  Table,
  Tbody,
  Tr,
  Td,
  Box,
  Icon,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { AxiosError } from "axios";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Context } from "..";
import MastersService from "../utils/masters.service";
import MasterForm from "./MasterForm";

const MastersList = observer(() => {
  const { dataStore } = useContext(Context);
  const navigate = useNavigate();
  const toast = useToast();

  let masters = dataStore.masters;
  return (
    <Box flex="1">
      <Table>
        <Tbody>
          {masters.map((v, i) => {
            return (
              <Tr key={v._id}>
                <Td w="full">{v.name}</Td>
                <Td>{v.classroom}</Td>
                <Td>
                  <IconButton
                    aria-label="Редактировать"
                    colorScheme="blue"
                    onClick={() => {
                      navigate(v._id);
                    }}
                    icon={<Icon as={FiEdit2} color="white" w={5} h={5} />}
                  />
                </Td>
                <Td>
                  <IconButton
                    aria-label="Удалить"
                    colorScheme="red"
                    onClick={async () => {
                      await MastersService.deleteMasterById(v._id)
                        .then((res) => {
                          toast({
                            title: "Успешно",
                            description: `РОП ${v.name} удален`,
                            status: "info",
                            duration: 5000,
                            isClosable: true,
                          });
                          dataStore.updateMastersList();
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
                    }}
                    icon={
                      <Icon as={AiOutlineDelete} color="white" w={5} h={5} />
                    }
                  />
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
});

const MastersView = () => {
  return (
    <Routes>
      <Route path="" element={<MastersList />} />
      <Route path=":id" element={<MasterForm />} />
      <Route />
    </Routes>
  );
};

export default MastersView;

import {
  Box,
  Icon,
  IconButton,
  Table,
  Tbody,
  Td,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Context } from "..";
import GroupForm from "./GroupForm/GroupForm";

import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import GroupsService from "../utils/groups.service";
import { AxiosError } from "axios";

const GroupsList = observer(() => {
  const { dataStore } = useContext(Context);
  const navigate = useNavigate();
  const toast = useToast();

  let groups = dataStore.groups;
  return (
    <Box flex="1">
      <Table>
        <Tbody>
          {groups.map((v, i) => {
            return (
              <Tr key={v._id}>
                <Td w="full">{v.groupNumber}</Td>
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
                      await GroupsService.deleteGroupById(v._id)
                        .then((res) => {
                          toast({
                            title: "Успешно",
                            description: `Данные о группе ${v.groupNumber} удалены`,
                            status: "info",
                            duration: 5000,
                            isClosable: true,
                          });
                          dataStore.updateGroupsList();
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

const GroupsView = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<GroupsList />} />
        <Route path=":id" element={<GroupForm />} />
      </Routes>
    </>
  );
};

export default observer(GroupsView);

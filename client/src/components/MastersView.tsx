import { Table, Tbody, Tr, Td, Box, Icon, IconButton } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Context } from "..";
import MasterForm from "./MasterForm";

const MastersList = observer(() => {
  const { dataStore } = useContext(Context);
  let navigate = useNavigate();
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
                    onClick={() => {
                      dataStore
                        .deleteGroup(v._id)
                        .then((res) => dataStore.updateMastersList());
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

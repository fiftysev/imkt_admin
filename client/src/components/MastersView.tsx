import { Table, Tbody, Tr, Td, Button, Box } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
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
                  <Button colorScheme="blue" onClick={() => navigate(v._id)}>
                    Редактировать
                  </Button>
                </Td>
                <Td>
                  <Button
                    colorScheme="red"
                    onClick={() => {
                      dataStore
                        .deleteMaster(v._id)
                        .then((res) => dataStore.updateMastersList());
                    }}
                  >
                    Удалить
                  </Button>
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

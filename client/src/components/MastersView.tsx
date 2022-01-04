import { Table, Tbody, Tr, Td, Button, Box } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "..";

const MastersView = () => {
  const { dataStore } = useContext(Context);
  let navigate = useNavigate();
  let masters = dataStore.masters;
  return (
    <Box flex="1">
      <Table>
        <Tbody>
          {masters.map((v, i) => {
            return (
              <Tr key={i}>
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
                      dataStore.deleteMaster(v._id);
                      dataStore.updateMastersList();
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
};

export default MastersView;

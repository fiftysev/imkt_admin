import { Button, Table, Tbody, Td, Tr } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "..";

const GroupsView = () => {
  const { dataStore } = useContext(Context);
  let navigate = useNavigate();
  return (
    <Table variant="striped" w="80%" ml={6}>
      <Tbody>
        {dataStore.groups.map((v, i) => {
          return (
            <Tr key={i}>
              <Td w="80%">{v.groupNumber}</Td>
              <Td>
                <Button colorScheme="blue" onClick={() => navigate(`${v._id}`)}>
                  Редактировать
                </Button>
              </Td>
              <Td>
                <Button colorScheme="red">Удалить</Button>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default observer(GroupsView);

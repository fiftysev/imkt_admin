import { Box, Button, Table, Tbody, Td, Tr } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Context } from "..";
import GroupForm from "./GroupForm/GroupForm";

const GroupsList = observer(() => {
  const { dataStore } = useContext(Context);
  let navigate = useNavigate();
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
                  <Button
                    colorScheme="blue"
                    onClick={() => {
                      navigate(v._id);
                    }}
                  >
                    Редактировать
                  </Button>
                </Td>
                <Td>
                  <Button
                    colorScheme="red"
                    onClick={() => {
                      dataStore
                        .deleteGroup(v._id)
                        .then((res) => dataStore.updateGroupsList());
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

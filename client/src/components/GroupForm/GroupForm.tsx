import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  VStack,
  Box,
  useToast,
} from "@chakra-ui/react";
import InfoBlock from "./InfoBlock";
import { emptyGroup, tabNames } from "../../data/constants";
import DisciplinesBlock from "./Disciplines/DisciplinesBlock";
import CourseWorksBlock from "./CourseWorks/CourseWorksBlock";
import PracticesBlock from "./Practices/PracticesBlock";

import { useContext } from "react";
import { Context } from "../..";
import { useNavigate, useParams } from "react-router-dom";
import GroupsService from "../../utils/groups.service";
import { observer } from "mobx-react-lite";
import { AxiosError } from "axios";

type GroupFormProps = {
  isNew?: boolean;
};

const GroupForm = ({ isNew }: GroupFormProps) => {
  const { dataStore } = useContext(Context);
  const params = useParams();
  const navigate = useNavigate();
  const toast = useToast();

  const groupData = isNew
    ? dataStore.setGroupToUpdate(emptyGroup)
    : dataStore.setGroupToUpdate(
        dataStore.groups.find((v) => v._id === params.id)
      );
  return (
    <VStack flex="1">
      <Tabs isFitted={true} w="full">
        <TabList>
          {tabNames.map((tab, i) => {
            return (
              <Tab
                _selected={{ bgColor: "gray.900", color: "white" }}
                key={tab.title}
              >
                {tab.title}
              </Tab>
            );
          })}
        </TabList>
        <TabPanels>
          <TabPanel>
            <InfoBlock
              groupNumber={groupData.groupNumber}
              master={groupData.master}
              groupName={groupData.groupName}
            />
          </TabPanel>
          <TabPanel>
            <DisciplinesBlock />
          </TabPanel>
          <TabPanel>
            <CourseWorksBlock />
          </TabPanel>
          <TabPanel>
            <PracticesBlock />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Box p={4} alignSelf="flex-end">
        <Button
          bgColor="#457b9d"
          color="white"
          onClick={async (e) => {
            isNew
              ? await GroupsService.createGroup(dataStore.groupToUpdate)
                  .then((res) => {
                    console.log(res.data);
                    toast({
                      title: "??????????????",
                      description: `???????????? ?? ???????????? ${dataStore.groupToUpdate.groupNumber} ??????????????????`,
                      status: "success",
                      duration: 5000,
                      isClosable: true,
                    });
                    dataStore.updateGroupsList();
                    navigate("/groupslist");
                  })
                  .catch((e: AxiosError) =>
                    toast({
                      title: "????????????",
                      description: e.response.data,
                      status: "error",
                      duration: 5000,
                      isClosable: true,
                    })
                  )
              : await GroupsService.updateGroup(dataStore.groupToUpdate)
                  .then((res) => {
                    toast({
                      title: "??????????????",
                      description: `???????????? ???????????? ${dataStore.groupToUpdate.groupNumber} ??????????????????`,
                      status: "success",
                      duration: 5000,
                      isClosable: true,
                    });
                    dataStore.updateGroupsList();
                    navigate("/groupslist");
                  })
                  .catch((e: AxiosError) => {
                    toast({
                      title: "????????????",
                      description: e.response.data,
                      status: "error",
                      duration: 5000,
                      isClosable: true,
                    });
                  });
          }}
        >
          ??????????????????
        </Button>
      </Box>
    </VStack>
  );
};

export default observer(GroupForm);

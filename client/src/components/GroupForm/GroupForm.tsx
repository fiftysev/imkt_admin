import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  VStack,
  Box,
} from "@chakra-ui/react";
import InfoBlock from "./InfoBlock";
import { emptyGroup, tabNames } from "../../data/constants";
import DisciplinesBlock from "./Disciplines/DisciplinesBlock";
import CourseWorksBlock from "./CourseWorks/CourseWorksBlock";
import PracticesBlock from "./Practices/PracticesBlock";
import { observer } from "mobx-react-lite";

import { useContext } from "react";
import { Context } from "../..";
import { useParams } from "react-router-dom";

type GroupFormProps = {
  isNew?: boolean;
};

const GroupForm = ({ isNew }: GroupFormProps) => {
  const { dataStore } = useContext(Context);
  const params = useParams();

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
            />
          </TabPanel>
          <TabPanel>
            <DisciplinesBlock semesters={groupData.semesters} />
          </TabPanel>
          <TabPanel>
            <CourseWorksBlock CWList={groupData.courseWorks} />
          </TabPanel>
          <TabPanel>
            <PracticesBlock />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Box p={8} alignSelf="flex-end">
        <Button
          colorScheme="blue"
          onClick={(e) => {
            console.log(dataStore.groupToUpdate.practices);
          }}
        >
          Сохранить
        </Button>
      </Box>
    </VStack>
  );
};

export default observer(GroupForm);

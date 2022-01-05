/* eslint-disable react-hooks/exhaustive-deps */

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import InfoBlock from "./InfoBlock";
import { tabNames } from "../../data/constants";
import DisciplinesBlock from "./Disciplines/DisciplinesBlock";
import CourseWorksBlock from "./CourseWorks/CourseWorksBlock";
import PracticesBlock from "./Practices/PracticesBlock";
import { IGroup } from "../../models/IGroup";
import { observer } from "mobx-react-lite";

type GroupFormProps = {
  groupData?: IGroup;
};

const GroupForm = ({ groupData }: GroupFormProps) => {
  return (
    <Tabs isFitted={true} flex="1">
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
          <InfoBlock />
        </TabPanel>
        <TabPanel>
          <DisciplinesBlock semesters={groupData.semesters} />
        </TabPanel>
        <TabPanel>
          <CourseWorksBlock />
        </TabPanel>
        <TabPanel>
          <PracticesBlock />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default observer(GroupForm);

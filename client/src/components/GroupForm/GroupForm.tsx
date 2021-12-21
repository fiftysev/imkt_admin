import { FC } from "react";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import InfoBlock from "./InfoBlock";
import { tabNames } from "../../data/constants";
import DisciplinesBlock from "./Disciplines/DisciplinesBlock";
import CourseWorksBlock from "./CourseWorks/CourseWorksBlock";
import PracticesBlock from "./Practices/PracticesBlock";

const GroupForm: FC = () => {
  return (
    <Tabs isFitted={true} flex="1">
      <TabList>
        {tabNames.map((tab, i) => {
          return (
            <Tab
              isFitted
              _selected={{ bgColor: "gray.900", color: "white" }}
              key={i}
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
  );
};

export default GroupForm;

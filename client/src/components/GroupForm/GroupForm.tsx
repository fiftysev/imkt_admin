import { FC } from "react";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import InfoBlock from "./InfoBlock";
import { tabNames } from "../../data/constants";
import DisciplinesBlock from "./Disciplines/DisciplinesBlock";

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
      </TabPanels>
    </Tabs>
  );
};

export default GroupForm;

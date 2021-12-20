import { FC } from "react";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import InfoBlock from "./InfoBlock";

const tabNames = [
  {
    title: "Информация",
  },
  {
    title: "Дисциплины",
  },
  {
    title: "Курсовые работы",
  },
  {
    title: "Практики",
  },
];

const GroupForm: FC = () => {
  return (
    <Tabs isFitted flex="1">
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
      </TabPanels>
    </Tabs>
  );
};

export default GroupForm;

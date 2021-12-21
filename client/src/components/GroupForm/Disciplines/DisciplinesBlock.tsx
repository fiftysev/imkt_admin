import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { FC, ReactNode, useState } from "react";
import DisciplinesTabPanel from "./DisciplinesTabPanel";

const DisciplinesBlock: FC = () => {
  const tabs = ["1", "2", "3", "4", "5", "6", "7", "8"];

  return (
    <Box padding={4} borderWidth={1} borderRadius={8} boxShadow={"lg"}>
      <Tabs>
        <TabList>
          {tabs.map((v, i) => {
            return <Tab key={i}>{v}</Tab>;
          })}
        </TabList>
        <TabPanels>
          {tabs.map((_v, i) => {
            return (
              <TabPanel>
                <DisciplinesTabPanel key={i} />
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default DisciplinesBlock;

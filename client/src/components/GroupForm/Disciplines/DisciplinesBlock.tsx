import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import DisciplinesTabPanel from "./DisciplinesTabPanel";

const tabs = ["1", "2", "3", "4", "5", "6", "7", "8"];

const DisciplinesBlock = () => {
  return (
    <Box>
      <Tabs>
        <TabList>
          {tabs.map((v, i) => {
            return <Tab key={i}>{v}</Tab>;
          })}
        </TabList>
        <TabPanels>
          {tabs.map((v, i) => {
            return (
              <TabPanel>
                <DisciplinesTabPanel key={i * 12} semesterNum={+v} />
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default DisciplinesBlock;

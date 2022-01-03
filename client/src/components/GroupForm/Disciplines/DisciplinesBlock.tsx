import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { ISemester } from "../../../models/IGroup";
import DisciplinesTabPanel from "./DisciplinesTabPanel";

type DBlockProps = {
  semesters?: ISemester[];
};

const DisciplinesBlock = ({ semesters }: DBlockProps) => {
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
          {semesters?.map((v, i) => {
            return (
              <TabPanel>
                <DisciplinesTabPanel key={i} info={v} />
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default DisciplinesBlock;

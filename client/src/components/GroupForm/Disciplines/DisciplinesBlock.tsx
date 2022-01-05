import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { ISemester } from "../../../models/IGroup";
import DisciplinesTabPanel from "./DisciplinesTabPanel";

type DBlockProps = {
  semesters?: ISemester[];
};

const tabs = ["1", "2", "3", "4", "5", "6", "7", "8"];

function orderTabPanels(data: ISemester[]) {
  return tabs.map((v, i) => {
    const currentSemester = data.find((item) => item.semester - 1 === i);
    const panel =
      currentSemester !== undefined ? (
        <TabPanel>
          <DisciplinesTabPanel key={i} info={currentSemester} />
        </TabPanel>
      ) : (
        <TabPanel>
          <DisciplinesTabPanel
            key={i}
            info={{ semester: i + 1, disciplines: [] }}
          />
        </TabPanel>
      );
    return panel;
  });
}

const DisciplinesBlock = ({ semesters }: DBlockProps) => {
  return (
    <Box padding={4} borderWidth={1} borderRadius={8} boxShadow={"lg"}>
      <Tabs>
        <TabList>
          {tabs.map((v, i) => {
            return <Tab key={i}>{v}</Tab>;
          })}
        </TabList>
        <TabPanels>{orderTabPanels(semesters || [])}</TabPanels>
      </Tabs>
    </Box>
  );
};

export default DisciplinesBlock;

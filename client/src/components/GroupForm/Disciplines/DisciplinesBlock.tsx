import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { ISemester } from "../../../models/IGroup";
import DisciplinesTabPanel from "./DisciplinesTabPanel";

type DBlockProps = {
  semesters?: ISemester[];
};

const tabs = ["1", "2", "3", "4", "5", "6", "7", "8"];

function orderTabPanels(data: ISemester[]) {
  return tabs.map((v, i) => {
    if (data.find((item) => item.semester === +v) !== undefined) {
      return (
        <TabPanel>
          <DisciplinesTabPanel key={i} info={data[i]} />
        </TabPanel>
      );
    } else {
      return (
        <TabPanel>
          <DisciplinesTabPanel
            key={i}
            info={{ semester: +v, disciplines: [] }}
          />
        </TabPanel>
      );
    }
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

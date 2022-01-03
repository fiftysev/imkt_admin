import { Icon, IconButton, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { HiDocumentAdd } from "react-icons/hi";
import { IDiscipline, ISemester } from "../../../models/IGroup";
import DisciplineField from "./DisciplineField";

type PanelProps = {
  info: ISemester;
};

const DisciplineTabPanel = (props: PanelProps) => {
  const [semesterData, setSemester] = useState<ISemester>(props.info);

  return (
    <VStack spacing={4}>
      {semesterData?.disciplines?.map((v, i) => {
        return <DisciplineField info={v} key={i} />;
      })}
      <IconButton
        alignSelf="flex-end"
        aria-label="Добавить дисциплину"
        icon={<Icon as={HiDocumentAdd} />}
        colorScheme="green"
        onClick={() => {
          const newData: ISemester = {
            semester: semesterData.semester,
            disciplines: semesterData.disciplines.concat({} as IDiscipline),
          };
          setSemester(newData);
        }}
      />
    </VStack>
  );
};

export default DisciplineTabPanel;

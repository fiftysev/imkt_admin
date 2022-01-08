import { Icon, IconButton, VStack } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { HiDocumentAdd } from "react-icons/hi";
import { Context } from "../../..";

import { v4 as uuid } from "uuid";

import DisciplineField from "./DisciplineField";

type DTabPanelProps = {
  semesterNum?: number;
};

const DisciplinesTabPanel = ({ semesterNum }: DTabPanelProps) => {
  const { dataStore } = useContext(Context);
  const semesterData = dataStore.groupToUpdate.semesters.find(
    (v) => v.semester === semesterNum
  );
  return (
    <VStack spacing={4}>
      {semesterData?.disciplines?.map((v, i) => {
        return (
          <DisciplineField
            discipline={v}
            key={i}
            handler={(field: string, value: string | boolean) =>
              dataStore.updateSemestersData(
                semesterNum,
                v._id || v.uid,
                field,
                value
              )
            }
          />
        );
      })}
      <IconButton
        alignSelf="flex-end"
        aria-label="Добавить дисциплину"
        icon={<Icon as={HiDocumentAdd} />}
        colorScheme="green"
        onClick={() => {
          dataStore.addNewDiscipline(semesterNum, uuid());
        }}
      />
    </VStack>
  );
};

export default observer(DisciplinesTabPanel);

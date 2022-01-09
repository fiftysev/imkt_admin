import { Icon, IconButton, VStack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { HiDocumentAdd } from "react-icons/hi";
import { Context } from "../../..";

import { v4 as uuid } from "uuid";

import DisciplineField from "./DisciplineField";
import { IDiscipline } from "../../../models/IGroup";

type DTabPanelProps = {
  semesterNum?: number;
};

const DisciplinesTabPanel = ({ semesterNum }: DTabPanelProps) => {
  const { dataStore } = useContext(Context);
  const initialState = dataStore.groupToUpdate.semesters.find(
    (v) => v.semester === semesterNum
  ).disciplines;
  const [disciplines, setDisciplines] = useState<IDiscipline[]>(initialState);
  return (
    <VStack spacing={4}>
      {disciplines?.map((v, i) => {
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
          const newDiscipline = {
            uid: uuid(),
            title: "",
            teacher: "",
            attestation_form: "",
          } as IDiscipline;
          dataStore.addNewDiscipline(semesterNum, newDiscipline);
          setDisciplines(
            dataStore.groupToUpdate.semesters.find(
              (v) => v.semester === semesterNum
            ).disciplines
          );
        }}
      />
    </VStack>
  );
};

export default DisciplinesTabPanel;

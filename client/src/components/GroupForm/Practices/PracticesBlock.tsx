import { VStack } from "@chakra-ui/react";
import { useContext, useState } from "react";

import { v4 as uuid } from "uuid";

import { Context } from "../../..";
import { IPractice } from "../../../models/IGroup";
import AddButton from "../../AddButton";
import PracticeField from "./PracticeField";

const PracticesBlock = () => {
  const { dataStore } = useContext(Context);

  const [practices, setPractices] = useState<IPractice[]>(
    dataStore.groupToUpdate.practices
  );
  return (
    <VStack spacing={4}>
      {practices.map((v, i) => {
        return (
          <PracticeField
            key={v._id ?? v.uid}
            practice={v}
            handler={(field: string, value: string) =>
              dataStore.updatePracticesOrCourseworks(
                "practices",
                v._id || v.uid,
                field,
                value
              )
            }
            deleteHandler={(id: string) => {
              const newData = practices.filter(
                (it) => it._id !== id && it.uid !== id
              );
              setPractices(newData);
              dataStore.setPractices(newData);
            }}
          />
        );
      })}
      <AddButton
        onClick={() => {
          const newPractice = {
            uid: uuid(),
            title: "",
            practice_form: "",
          } as IPractice;
          setPractices(practices.concat(newPractice));
          dataStore.addNewPractice(newPractice);
        }}
      />
    </VStack>
  );
};

export default PracticesBlock;

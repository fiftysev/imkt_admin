import { VStack, IconButton, Icon } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { HiDocumentAdd } from "react-icons/hi";

import { v4 as uuid } from "uuid";

import { Context } from "../../..";
import { IPractice } from "../../../models/IGroup";
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
            key={i}
            practice={v}
            handler={(field: string, value: string) =>
              dataStore.updatePracticesOrCourseworks(
                "practices",
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
        aria-label="Добавить курсовую работу"
        icon={<Icon as={HiDocumentAdd} />}
        colorScheme="green"
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

import { VStack, IconButton, Icon } from "@chakra-ui/react";
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
      <IconButton
        alignSelf="flex-end"
        aria-label="Добавить курсовую работу"
        icon={<Icon as={HiDocumentAdd} color="white" w={5} h={5} />}
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

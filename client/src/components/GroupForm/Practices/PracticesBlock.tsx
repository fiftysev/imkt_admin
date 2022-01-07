import { VStack, IconButton, Icon } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { HiDocumentAdd } from "react-icons/hi";

import { v4 as uuid } from "uuid";

import { Context } from "../../..";
import PracticeField from "./PracticeField";

const PracticesBlock = () => {
  const { dataStore } = useContext(Context);
  return (
    <VStack spacing={4}>
      {dataStore.groupToUpdate.practices.map((v, i) => {
        return (
          <PracticeField
            key={i}
            practice={v}
            handler={(field: string, value: string) =>
              dataStore.updatePractices(v._id || v.uid, field, value)
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
          dataStore.addNewPractice(uuid());
        }}
      />
    </VStack>
  );
};

export default observer(PracticesBlock);

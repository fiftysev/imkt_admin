import { Icon, IconButton, VStack } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { HiDocumentAdd } from "react-icons/hi";

import { v4 as uuid } from "uuid";

import { Context } from "../../..";
import CourseWorkField from "./CourseWorkField";

const CourseWorksBlock = () => {
  const { dataStore } = useContext(Context);
  return (
    <VStack spacing={4}>
      {dataStore.groupToUpdate.courseWorks.map((v, i) => {
        return (
          <CourseWorkField
            key={i}
            courseWork={v}
            handler={(field: string, value: string) =>
              dataStore.updatePracticesOrCourseworks(
                "courseWorks",
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
          dataStore.addNewCoursework(uuid());
        }}
      />
    </VStack>
  );
};

export default observer(CourseWorksBlock);

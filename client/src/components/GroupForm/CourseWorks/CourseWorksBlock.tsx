import { Icon, IconButton, VStack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { HiDocumentAdd } from "react-icons/hi";

import { v4 as uuid } from "uuid";

import { Context } from "../../..";
import { ICourseWork } from "../../../models/IGroup";
import CourseWorkField from "./CourseWorkField";

const CourseWorksBlock = () => {
  const { dataStore } = useContext(Context);
  const [courseWorks, setCourseWorks] = useState<ICourseWork[]>(
    dataStore.groupToUpdate.courseWorks
  );
  return (
    <VStack spacing={4}>
      {courseWorks.map((v, i) => {
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
          const newCoursework = {
            uid: uuid(),
            title: "",
            attestation_form: "",
            semester: "",
          } as ICourseWork;
          setCourseWorks(courseWorks.concat(newCoursework));
          dataStore.addNewCoursework(newCoursework);
        }}
      />
    </VStack>
  );
};

export default CourseWorksBlock;

import { VStack } from "@chakra-ui/react";
import { useContext, useState } from "react";

import { v4 as uuid } from "uuid";

import { Context } from "../../..";
import { ICourseWork } from "../../../models/IGroup";
import AddButton from "../../AddButton";
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
            key={v._id ?? v.uid}
            courseWork={v}
            handler={(field: string, value: string) =>
              dataStore.updatePracticesOrCourseworks(
                "courseWorks",
                v._id || v.uid,
                field,
                value
              )
            }
            deleteHandler={(id: string) => {
              const newData = courseWorks.filter(
                (it) => it._id !== id && it.uid !== id
              );
              setCourseWorks(newData);
              dataStore.setCourseWorks(newData);
            }}
          />
        );
      })}
      <AddButton
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

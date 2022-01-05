import { Icon, IconButton, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { HiDocumentAdd } from "react-icons/hi";
import { ICourseWork } from "../../../models/IGroup";
import CourseWorkField from "./CourseWorkField";

type CWBlockProps = {
  CWList?: ICourseWork[];
};

const CourseWorksBlock = ({ CWList }: CWBlockProps) => {
  const [courseWorks, setCourseWorks] = useState<ICourseWork[]>(CWList || []);
  return (
    <VStack spacing={4}>
      {courseWorks.map((v, i) => {
        return <CourseWorkField key={i} courseWork={v} />;
      })}
      <IconButton
        alignSelf="flex-end"
        aria-label="Добавить курсовую работу"
        icon={<Icon as={HiDocumentAdd} />}
        colorScheme="green"
        onClick={() => {
          setCourseWorks(courseWorks.concat({} as ICourseWork));
        }}
      />
    </VStack>
  );
};

export default CourseWorksBlock;

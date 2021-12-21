import { Icon, IconButton, VStack } from "@chakra-ui/react";
import { FC, ReactNode, useState } from "react";
import { HiDocumentAdd } from "react-icons/hi";
import CourseWorkField from "./CourseWorkField";

const CourseWorksBlock: FC = () => {
  const [fields, setFields] = useState<ReactNode[]>([]);
  return (
    <VStack spacing={4}>
      {fields.map((v, i) => {
        return <CourseWorkField />;
      })}
      <IconButton
        alignSelf="flex-end"
        aria-label="Добавить курсовую работу"
        icon={<Icon as={HiDocumentAdd} />}
        colorScheme="green"
        onClick={() => {
          setFields(fields.concat(<CourseWorkField />));
        }}
      />
    </VStack>
  );
};

export default CourseWorksBlock;

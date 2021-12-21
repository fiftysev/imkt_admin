import { Icon, IconButton, VStack } from "@chakra-ui/react";
import { FC, ReactNode, useState } from "react";
import { HiDocumentAdd } from "react-icons/hi";
import DisciplineField from "./DisciplineField";

const DisciplineTabPanel: FC = () => {
  const [fields, setFields] = useState<ReactNode[]>([]);
  return (
    <VStack spacing={4}>
      {fields.map((v, i) => {
        return <DisciplineField />;
      })}
      <IconButton
        alignSelf="flex-end"
        aria-label="Добавить дисциплину"
        icon={<Icon as={HiDocumentAdd} />}
        colorScheme="green"
        onClick={() => {
          setFields(fields.concat(<DisciplineField />));
        }}
      />
    </VStack>
  );
};

export default DisciplineTabPanel;

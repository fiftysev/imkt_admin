import { VStack, IconButton, Icon } from "@chakra-ui/react";
import { useState, ReactNode } from "react";
import { HiDocumentAdd } from "react-icons/hi";
import PracticeField from "./PracticeField";

const PracticesBlock = () => {
  const [fields, setFields] = useState<ReactNode[]>([]);
  return (
    <VStack spacing={4}>
      {fields.map((v, i) => {
        return <PracticeField key={i} />;
      })}
      <IconButton
        alignSelf="flex-end"
        aria-label="Добавить курсовую работу"
        icon={<Icon as={HiDocumentAdd} />}
        colorScheme="green"
        onClick={() => {
          setFields(fields.concat(<PracticeField />));
        }}
      />
    </VStack>
  );
};

export default PracticesBlock;

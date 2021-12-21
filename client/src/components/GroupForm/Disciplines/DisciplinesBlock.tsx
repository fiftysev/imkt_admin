import { Box, Icon, IconButton, VStack } from "@chakra-ui/react";
import { HiDocumentAdd } from "react-icons/hi";
import { FC, ReactNode, useState } from "react";
import DisciplineField from "./DisciplineField";

const DisciplinesBlock: FC = () => {
  const [fields, setFields] = useState<ReactNode[]>([<DisciplineField />]);
  return (
    <Box padding={4} borderWidth={1} borderRadius={8} boxShadow={"lg"}>
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
    </Box>
  );
};

export default DisciplinesBlock;

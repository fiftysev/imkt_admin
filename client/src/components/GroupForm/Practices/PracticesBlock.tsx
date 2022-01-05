import { VStack, IconButton, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { HiDocumentAdd } from "react-icons/hi";
import { IPractice } from "../../../models/IGroup";
import PracticeField from "./PracticeField";

type PBlockProps = {
  PList?: IPractice[];
};

const PracticesBlock = ({ PList }: PBlockProps) => {
  const [practices, setPractices] = useState<IPractice[]>(PList || []);
  return (
    <VStack spacing={4}>
      {practices.map((v, i) => {
        return <PracticeField key={i} practice={v} />;
      })}
      <IconButton
        alignSelf="flex-end"
        aria-label="Добавить курсовую работу"
        icon={<Icon as={HiDocumentAdd} />}
        colorScheme="green"
        onClick={() => {
          setPractices(practices.concat({} as IPractice));
        }}
      />
    </VStack>
  );
};

export default PracticesBlock;

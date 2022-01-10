import { IconButton, Icon } from "@chakra-ui/react";
import { HiDocumentAdd } from "react-icons/hi";

type Props = {
  onClick?: Function;
};

const AddButton = ({ onClick }: Props) => {
  return (
    <IconButton
      alignSelf="flex-end"
      aria-label="Add new"
      icon={<Icon as={HiDocumentAdd} color="white" w={5} h={5} />}
      bgColor="#2a9d8f"
      onClick={() => onClick()}
    />
  );
};

export default AddButton;

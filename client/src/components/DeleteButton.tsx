import { IconButton, Icon } from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";

type Props = {
  onClick?: Function;
};

const DeleteButton = ({ onClick }: Props) => {
  return (
    <IconButton
      aria-label="Удалить"
      icon={<Icon as={AiOutlineDelete} color="white" w={5} h={5} />}
      onClick={() => onClick()}
      bgColor="#e63946"
    />
  );
};

export default DeleteButton;

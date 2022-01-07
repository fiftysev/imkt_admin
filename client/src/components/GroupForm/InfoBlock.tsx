import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { Context } from "../..";

type IBlockProps = {
  groupNumber?: string;
  master?: string;
};

const InfoBlock = ({ groupNumber, master }: IBlockProps) => {
  const { dataStore } = useContext(Context);
  return (
    <Box padding="4">
      <VStack>
        <FormControl>
          <FormLabel>Номер группы</FormLabel>
          <Input
            type="text"
            placeholder="Б9120-02.03.01сцт"
            value={groupNumber}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Руководитель образовательной программы</FormLabel>
          <Select
            placeholder="Выбрать из списка"
            defaultValue={dataStore.masters.find((v) => v._id === master)?._id}
          >
            {dataStore.masters.map((v, i) => {
              return (
                <option value={v._id} key={i}>
                  {v.name}
                </option>
              );
            })}
          </Select>
        </FormControl>
      </VStack>
    </Box>
  );
};

export default InfoBlock;

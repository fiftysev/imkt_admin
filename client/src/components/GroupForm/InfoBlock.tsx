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
  groupName?: string;
  master?: string;
};

const InfoBlock = ({ groupNumber, master, groupName }: IBlockProps) => {
  const { dataStore } = useContext(Context);
  return (
    <Box padding="4">
      <VStack>
        <FormControl>
          <FormLabel>Номер группы</FormLabel>
          <Input
            type="text"
            placeholder="Б9120-02.03.01сцт"
            onChange={(e) => {
              dataStore.setGroupNumber(e.target.value);
            }}
            defaultValue={groupNumber}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Имя группы (для бота)</FormLabel>
          <Input
            type="text"
            placeholder="Б9120-02.03.01sct"
            onChange={(e) => {
              dataStore.setGroupName(e.target.value);
            }}
            defaultValue={groupName}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Руководитель образовательной программы</FormLabel>
          <Select
            placeholder="Выбрать из списка"
            defaultValue={dataStore.masters.find((v) => v._id === master)?._id}
            onChange={(e) => {
              dataStore.setMaster(e.target.value);
            }}
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

import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";

// TODO: Masters list from backend
const masters = ["Сущенко А.А.", "Клевчихин Ю.А;", "Пак Т.В."];

const InfoBlock: FC = () => {
  return (
    <Box padding="8">
      <Heading size="lg" mb="4">
        Информация о группе
      </Heading>
      <VStack>
        <FormControl>
          <FormLabel>Номер группы</FormLabel>
          <Input type="text" placeholder="Б9120-02.03.01сцт" />
        </FormControl>
        <FormControl>
          <FormLabel>Руководитель образовательной программы</FormLabel>
          <Select placeholder="Выбрать из списка">
            {masters.map((v, i) => {
              return (
                <option value={v} key={i}>
                  {v}
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

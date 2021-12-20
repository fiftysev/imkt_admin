import { FC } from "react";
import {
  Checkbox,
  FormControl,
  HStack,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import { attestationForms } from "../../../data/constants";

const DisciplineField: FC = () => {
  return (
    <>
      <HStack w="100%" alignItems="flex-start">
        <FormControl>
          <Input type="text" placeholder="Web-программирование" />
        </FormControl>
        <FormControl w="40%">
          <Select placeholder="Выберите из списка">
            {attestationForms.map((v, i) => {
              return (
                <option value={v.value} key={i}>
                  {v.name}
                </option>
              );
            })}
          </Select>
        </FormControl>
        <VStack w="25%" alignItems="flex-start">
          <Checkbox>По выбору</Checkbox>
          <Checkbox>Факультатив</Checkbox>
        </VStack>
      </HStack>
    </>
  );
};

export default DisciplineField;

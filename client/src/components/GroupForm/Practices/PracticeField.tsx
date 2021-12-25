import { HStack, FormControl, Input, Select } from "@chakra-ui/react";
import { practiceForms } from "../../../data/constants";

const PracticeField = () => {
  console.log(test);
  return (
    <HStack w="100%" alignItems="flex-start">
      <FormControl>
        <Input type="text" placeholder="Преддипломная практика" />
      </FormControl>
      <FormControl w="40%">
        <Select placeholder="Выберите из списка">
          {practiceForms.map((v, i) => {
            return (
              <option value={v.value} key={i}>
                {v.name}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </HStack>
  );
};

export default PracticeField;

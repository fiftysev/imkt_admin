import { HStack, FormControl, Input, Select } from "@chakra-ui/react";
import { practiceForms } from "../../../data/constants";
import { IPractice } from "../../../models/IGroup";

type PFieldProps = {
  practice?: IPractice;
};

const PracticeField = ({ practice }: PFieldProps) => {
  return (
    <HStack w="100%" alignItems="flex-start">
      <FormControl>
        <Input
          type="text"
          placeholder="Преддипломная практика"
          value={practice?.title}
        />
      </FormControl>
      <FormControl w="40%">
        <Select
          placeholder="Выберите из списка"
          defaultValue={practice?.practice_form}
        >
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

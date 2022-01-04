import { HStack, FormControl, Input, Select } from "@chakra-ui/react";
import { FC } from "react";
import { attestationFormsList } from "../../../data/constants";
const CourseWorkField: FC = () => {
  return (
    <HStack w="100%" alignItems="flex-start">
      <FormControl>
        <Input type="text" placeholder="Проект по компьютерной графике" />
      </FormControl>
      <FormControl w="50%">
        <Select placeholder="Форма аттестации">
          {attestationFormsList.map((v, i) => {
            return (
              <option value={v.value} key={i}>
                {v.label}
              </option>
            );
          })}
        </Select>
      </FormControl>
      <FormControl w="30%">
        <Select placeholder="Номер семестра">
          {["1", "2", "3", "4", "5", "6", "7", "8"].map((v, i) => {
            return (
              <option value={v} key={i}>
                {v}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </HStack>
  );
};

export default CourseWorkField;

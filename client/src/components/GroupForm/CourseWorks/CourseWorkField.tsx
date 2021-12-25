import { HStack, FormControl, Input, Select } from "@chakra-ui/react";
import { FC } from "react";
import { courseWorkAttForms } from "../../../data/constants";
const CourseWorkField: FC = () => {
  return (
    <HStack w="100%" alignItems="flex-start">
      <FormControl>
        <Input type="text" placeholder="Проект по компьютерной графике" />
      </FormControl>
      <FormControl w="50%">
        <Select placeholder="Форма аттестации">
          {courseWorkAttForms.map((v, i) => {
            return (
              <option value={v.value} key={i}>
                {v.name}
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

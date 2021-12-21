import { HStack, FormControl, Input, Select } from "@chakra-ui/react";
import { FC } from "react";
import { courseWorkAttForms } from "../../../data/constants";
const CourseWorkField: FC = () => {
  return (
    <HStack w="100%" alignItems="flex-start">
      <FormControl>
        <Input type="text" placeholder="Проект по компьютерной графике" />
      </FormControl>
      <FormControl w="40%">
        <Select placeholder="Выберите из списка">
          {courseWorkAttForms.map((v, i) => {
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

export default CourseWorkField;

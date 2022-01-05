import { HStack, FormControl, Input, Select } from "@chakra-ui/react";
import { attestationFormsList } from "../../../data/constants";
import { ICourseWork } from "../../../models/IGroup";

type CWFieldProps = {
  courseWork?: ICourseWork;
};

const CourseWorkField = ({ courseWork }: CWFieldProps) => {
  return (
    <HStack w="100%" alignItems="flex-start">
      <FormControl>
        <Input
          type="text"
          placeholder="Проект по компьютерной графике"
          value={courseWork?.title}
        />
      </FormControl>
      <FormControl w="50%">
        <Select
          placeholder="Форма аттестации"
          defaultValue={courseWork?.attestation_form}
        >
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
        <Select
          placeholder="Номер семестра"
          defaultValue={courseWork?.semester}
        >
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

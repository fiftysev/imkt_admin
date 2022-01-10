import {
  HStack,
  FormControl,
  Input,
  Select,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { attestationFormsList } from "../../../data/constants";
import { ICourseWork } from "../../../models/IGroup";

type CWFieldProps = {
  courseWork?: ICourseWork;
  handler?: Function;
  deleteHandler?: Function;
};

const CourseWorkField = ({
  courseWork,
  handler,
  deleteHandler,
}: CWFieldProps) => {
  return (
    <HStack w="100%" alignItems="flex-start">
      <FormControl>
        <Input
          type="text"
          placeholder="Проект по компьютерной графике"
          defaultValue={courseWork?.title}
          name="title"
          onChange={(e) => {
            handler(e.target.name, e.target.value);
          }}
        />
      </FormControl>
      <FormControl w="50%">
        <Select
          placeholder="Форма аттестации"
          defaultValue={courseWork?.attestation_form}
          name="attestation_form"
          onChange={(e) => {
            handler(e.target.name, e.target.value);
          }}
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
          name="semester"
          onChange={(e) => {
            handler(e.target.name, e.target.value);
          }}
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
      <IconButton
        aria-label="Удалить"
        icon={<Icon as={AiOutlineDelete} color="white" w={5} h={5} />}
        onClick={() => deleteHandler(courseWork._id ?? courseWork.uid)}
        colorScheme="red"
      />
    </HStack>
  );
};

export default CourseWorkField;

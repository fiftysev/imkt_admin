import { HStack, FormControl, Input, Select, Button } from "@chakra-ui/react";
import { practiceForms } from "../../../data/constants";
import { IPractice } from "../../../models/IGroup";

type PFieldProps = {
  practice?: IPractice;
  handler?: Function;
  deleteHandler?: Function;
};

const PracticeField = ({ practice, handler, deleteHandler }: PFieldProps) => {
  return (
    <HStack w="100%" alignItems="flex-start">
      <FormControl>
        <Input
          type="text"
          placeholder="Преддипломная практика"
          onChange={(e) => handler(e.target.name, e.target.value)}
          defaultValue={practice?.title}
          name="title"
        />
      </FormControl>
      <FormControl w="40%">
        <Select
          placeholder="Выберите из списка"
          name="practice_form"
          onChange={(e) => handler(e.target.name, e.target.value)}
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
      <Button onClick={() => deleteHandler(practice.uid ?? practice._id)}>
        Удалить
      </Button>
    </HStack>
  );
};

export default PracticeField;

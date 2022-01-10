import {
  Button,
  Checkbox,
  FormControl,
  HStack,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import { attestationFormsList } from "../../../data/constants";
import { IDiscipline } from "../../../models/IGroup";

type FieldProps = {
  discipline?: IDiscipline;
  onChangeHandler?: Function;
  deleteHandler?: Function;
};

const DisciplineField = ({
  discipline,
  onChangeHandler,
  deleteHandler,
}: FieldProps) => {
  return (
    <HStack w="100%" alignItems="flex-start">
      <FormControl>
        <Input
          type="text"
          placeholder="Web-программирование"
          name="title"
          defaultValue={discipline.title}
          onChange={(e) => onChangeHandler(e.target.name, e.target.value)}
        />
      </FormControl>
      <FormControl w="40%">
        <Select
          placeholder="Выберите из списка"
          defaultValue={discipline.attestation_form}
          name="attestation_form"
          onChange={(e) => onChangeHandler(e.target.name, e.target.value)}
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
      <VStack w="25%" alignItems="flex-start">
        <Checkbox
          isChecked={discipline.optional}
          name="optional"
          onChange={(e) => onChangeHandler(e.target.name, e.target.checked)}
        >
          По выбору
        </Checkbox>
        <Checkbox
          isChecked={discipline.faculty}
          name="faculty"
          onChange={(e) => onChangeHandler(e.target.name, e.target.checked)}
        >
          Факультатив
        </Checkbox>
      </VStack>
      <Button onClick={() => deleteHandler(discipline._id ?? discipline.uid)}>
        Удалить
      </Button>
    </HStack>
  );
};

export default DisciplineField;

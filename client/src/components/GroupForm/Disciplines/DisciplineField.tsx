import {
  Checkbox,
  FormControl,
  HStack,
  Icon,
  IconButton,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiSave } from "react-icons/fi";
import { attestationFormsList } from "../../../data/constants";
import { IDiscipline } from "../../../models/IGroup";

type FieldProps = {
  info?: IDiscipline;
};

const DisciplineField = ({ info }: FieldProps) => {
  const [title, setTitle] = useState(info?.title);
  const [attForm, setAttForm] = useState(info?.attestation_form);
  const [faculty, setFaculty] = useState(info?.faculty);
  const [optional, setOptional] = useState(info?.optional);
  return (
    <HStack w="100%" alignItems="flex-start">
      <FormControl>
        <Input
          type="text"
          placeholder="Web-программирование"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormControl>
      <FormControl w="40%">
        <Select
          placeholder="Выберите из списка"
          onChange={(e) => {
            setAttForm(e.target.value);
            console.log(e.target.value);
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
      <VStack w="25%" alignItems="flex-start">
        <Checkbox
          isChecked={!!optional}
          onChange={(e) => setOptional(e.target.checked)}
        >
          По выбору
        </Checkbox>
        <Checkbox
          isChecked={!!faculty}
          onChange={(e) => setFaculty(e.target.checked)}
        >
          Факультатив
        </Checkbox>
      </VStack>
      <IconButton
        alignSelf="flex-end"
        aria-label="Сохранить дисциплину"
        icon={<Icon as={FiSave} />}
        colorScheme="blue"
        onClick={() => {}}
      />
    </HStack>
  );
};

export default DisciplineField;

import { FC, useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@chakra-ui/button";
import { Box, HStack, VStack } from "@chakra-ui/layout";
import {
  Heading,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Link,
} from "@chakra-ui/react";

import { Context } from "..";

const validationSchema = yup.object().shape({
  firstName: yup.string().required("Обязательное поле").trim(),
  lastName: yup.string().required("Обязательное поле").trim(),
  username: yup
    .string()
    .required("Обязательное поле")
    .min(8, "Mинимальная длина - 8 символов")
    .matches(/^[A-Za-z0-9]+$/, "Допускается латиница и цифры")
    .trim(),
  password: yup
    .string()
    .required("Обязательное поле")
    .min(8, "Mинимальная длина - 8 символов")
    .matches(/^[A-Za-z0-9]+$/, "Допускается латиница и цифры")
    .max(20, "Максимальная длина - 8 символов")
    .trim(),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Пароли должны совпадать")
    .trim(),
});

type SignUpFormInputs = {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  passwordConfirmation: string;
};

export const SignUpForm: FC = () => {
  const { store } = useContext(Context);

  const { register, handleSubmit, errors } = useForm<SignUpFormInputs>({
    mode: "onBlur",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: SignUpFormInputs) => {
    store.register(data.firstName, data.lastName, data.username, data.password);
  };

  return (
    <Box p={8} minW={"500px"} borderWidth={1} borderRadius={8} boxShadow={"lg"}>
      <Heading size={"lg"} textAlign={"center"} mb={4}>
        Регистрация
      </Heading>
      <form>
        <VStack spacing={4}>
          <HStack spacing={2}>
            <FormControl isInvalid={!!errors?.firstName?.message} isRequired>
              <FormLabel>Имя</FormLabel>
              <Input
                type="text"
                name="firstName"
                placeholder="Иван"
                ref={register}
              />
              <FormErrorMessage>{errors?.firstName?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors?.lastName?.message} isRequired>
              <FormLabel>Фамилия</FormLabel>
              <Input
                type="text"
                name="lastName"
                placeholder="Иванов"
                ref={register}
              />
              <FormErrorMessage>{errors?.lastName?.message}</FormErrorMessage>
            </FormControl>
          </HStack>
          <FormControl isInvalid={!!errors?.username?.message} isRequired>
            <FormLabel>Имя пользователя</FormLabel>
            <Input
              type="text"
              name="username"
              placeholder="IvanovIv23"
              ref={register}
            />
            <FormErrorMessage>{errors?.username?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors?.password?.message} isRequired>
            <FormLabel>Пароль</FormLabel>
            <Input
              type="password"
              name="password"
              placeholder="*******"
              ref={register}
            />
            <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={!!errors?.passwordConfirmation?.message}
            isRequired
          >
            <FormLabel>Подтверждение пароля</FormLabel>
            <Input
              type="password"
              name="passwordConfirmation"
              placeholder="*******"
              ref={register}
            />
            <FormErrorMessage>
              {errors?.passwordConfirmation?.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            colorScheme={"green"}
            w={"full"}
            disabled={
              !!errors.firstName ||
              !!errors.lastName ||
              !!errors.username ||
              !!errors.password ||
              !!errors.passwordConfirmation
            }
            onClick={handleSubmit(onSubmit)}
          >
            Зарегистрироваться
          </Button>
          <Box>
            <Text fontSize={"md"}>
              Уже есть аккаунт?{" "}
              <Link href="/login" color={"cyan.600"}>
                Войти
              </Link>
            </Text>
          </Box>
        </VStack>
      </form>
    </Box>
  );
};

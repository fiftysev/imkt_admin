import { FC, useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Heading, VStack, Text, Link } from "@chakra-ui/layout";

import { Context } from "..";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Обязательное поле")
    .min(8, "Mинимальная длина - 8 символов")
    .matches(/^[A-Za-z0-9]+$/, "Допускается латиница и цифры"),
  password: yup
    .string()
    .required("Обязательное поле")
    .min(8, "Mинимальная длина - 8 символов")
    .matches(/^[A-Za-z0-9]+$/, "Допускается латиница и цифры")
    .max(20, "Максимальная длина - 8 символов"),
});

type SignInFormInputs = {
  username: string;
  password: string;
};

const SignInForm: FC = () => {
  const { store } = useContext(Context);

  const { register, handleSubmit, errors } = useForm<SignInFormInputs>({
    mode: "onBlur",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: SignInFormInputs) => {
    store.login(data.username, data.password);
  };

  return (
    <Box p={8} minW={"500px"} borderWidth={1} borderRadius={8} boxShadow={"lg"}>
      <Heading size={"lg"} textAlign={"center"} mb={4}>
        Вход в систему
      </Heading>
      <form>
        <VStack spacing={4}>
          <FormControl
            isInvalid={!!errors?.username?.message}
            errorText={errors?.username?.message}
            isRequired
          >
            <FormLabel>Имя пользователя</FormLabel>
            <Input
              type="text"
              name="username"
              placeholder="IvanovIv23"
              ref={register}
            />
            <FormErrorMessage>{errors?.username?.message}</FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={!!errors?.password?.message}
            errorText={errors?.password?.message}
            isRequired
          >
            <FormLabel>Пароль</FormLabel>
            <Input
              type="password"
              name="password"
              placeholder="*******"
              ref={register}
            />
            <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
          </FormControl>
          <Button
            colorScheme={"green"}
            w={"full"}
            disabled={!!errors.username || !!errors.password}
            onClick={handleSubmit(onSubmit)}
          >
            Войти
          </Button>
          <Box>
            <Text fontSize={"md"}>
              Еще нет аккаунта?{" "}
              <Link href="/signup" color={"cyan.600"}>
                Зарегистрироваться
              </Link>
            </Text>
          </Box>
        </VStack>
      </form>
    </Box>
  );
};

export default SignInForm;

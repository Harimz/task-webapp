import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import { useAuth } from "../../hooks";
import { useForm } from "react-hook-form";
import { formErrors } from "../../utils";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const AuthForm = ({ type }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm(formErrors);
  const router = useRouter();
  const { registerUser, loginUser } = useAuth();
  const toast = useToast();

  const credentialsHandler = async (credentials) => {
    if (type === "register") {
      const data = await registerUser(credentials);

      if (data.status === "success") {
        router.replace("/dashboard");
      } else {
        toast({
          title: "An error has occurred",
          description: data.message,
          duration: 5000,
          isClosable: true,
          position: "top",
          status: "error",
          variant: "subtle",
        });
      }
    }

    if (type === "login") {
      const data = await loginUser(credentials);

      console.log(data);

      if (data.status === "success") {
        router.replace("/dashboard");
      } else {
        toast({
          title: "An error has occurred",
          description: data.message,
          duration: 5000,
          isClosable: true,
          position: "top",
          status: "error",
          variant: "subtle",
        });
      }
    }
  };

  return (
    <Flex
      w={{ base: "90%", md: "50%" }}
      flexDir="column"
      gap="1rem"
      as="form"
      onSubmit={handleSubmit(credentialsHandler)}
    >
      <Heading textStyle="h1">
        {type === "login" ? "Login" : "Register"}
      </Heading>

      <Button
        w={"full"}
        maxW={"lg"}
        variant={"outline"}
        leftIcon={<FaGoogle />}
        onClick={() => signIn("google", { redirect: "/" })}
      >
        <Center>
          <Text>
            {type === "login" ? "Login with Google" : "Sign in with Google"}
          </Text>
        </Center>
      </Button>

      <Box borderBottom="1px solid gray" />

      <Box>
        <Input placeholder="Enter Email..." {...register("email")} />

        <Text textStyle="error">{errors?.email && errors.email.message}</Text>
      </Box>

      <Box>
        <InputGroup>
          <Input
            placeholder="Enter Password..."
            {...register("password")}
            type={passwordVisible ? "text" : "password"}
          />
          <InputRightElement
            // eslint-disable-next-line react/no-children-prop
            children={
              passwordVisible ? (
                <AiFillEye
                  size={20}
                  cursor="pointer"
                  onClick={() => setPasswordVisible((state) => !state)}
                />
              ) : (
                <AiFillEyeInvisible
                  size={20}
                  cursor="pointer"
                  onClick={() => setPasswordVisible((state) => !state)}
                />
              )
            }
          />
        </InputGroup>

        <Text textStyle="error">
          {errors?.password && errors.password.message}
        </Text>
      </Box>

      <Button variant="primary" type="submit">
        {type === "register" ? "Register" : "Login"}
      </Button>

      {type === "register" ? (
        <Flex gap="0.25rem">
          <Text>Already have an account?</Text>
          <Link href="/login" passHref>
            <Text cursor="pointer" color="primary.200" fontWeight="bold">
              Log In
            </Text>
          </Link>
        </Flex>
      ) : (
        <Flex gap="0.25rem">
          <Text>Dont have an account?</Text>
          <Link href="/login" passHref>
            <Text cursor="pointer" color="primary.200" fontWeight="bold">
              Sign Up
            </Text>
          </Link>
        </Flex>
      )}
    </Flex>
  );
};

export default AuthForm;

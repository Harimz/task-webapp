import { Box, Flex } from "@chakra-ui/react";
import { getSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import AuthForm from "../components/auth-form";

const LoginPage = () => {
  return (
    <Flex
      justifyContent="center"
      w={{ base: "100%", md: "50rem" }}
      m="5rem auto"
    >
      <AuthForm type="login" />

      <Box position="relative" h="20rem" w={{ base: "0", md: "50%" }}>
        <Image
          layout="fill"
          alt="login"
          src="/images/login-image.png"
          style={{ userSelect: "none" }}
        />
      </Box>
    </Flex>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  console.log(session);

  if (session) {
    return {
      props: {},
      redirect: {
        permanent: false,
        destination: "/dashboard",
      },
    };
  } else {
    return {
      props: {},
    };
  }
};

export default LoginPage;

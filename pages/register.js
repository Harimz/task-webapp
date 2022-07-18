import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import AuthForm from "../components/auth-form";
import { getSession } from "next-auth/react";

const RegisterPage = () => {
  return (
    <Flex
      justifyContent="center"
      w={{ base: "100%", md: "50rem" }}
      m="5rem auto"
    >
      <AuthForm type="register" />

      <Box position="relative" h="20rem" w={{ base: "0", md: "50%" }}>
        <Image
          layout="fill"
          alt="login"
          src="/images/register-image.png"
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
        destination: "/list",
      },
    };
  } else {
    return {
      props: {},
    };
  }
};

export default RegisterPage;

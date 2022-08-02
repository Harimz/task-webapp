import { Container, Heading } from "@chakra-ui/react";
import React from "react";
import Inbox from "../components/inbox";

const InboxPage = () => {
  return (
    <Container p="3rem" m="0 auto" w="100%" maxW="60rem">
      <Heading size="md">Inbox</Heading>

      <Inbox />
    </Container>
  );
};

export default InboxPage;

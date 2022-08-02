import React, { useEffect } from "react";
import { Container, Heading } from "@chakra-ui/react";
import Inbox from "../components/inbox";
import { useSelector, useDispatch } from "react-redux";
import { getTaskSections } from "../redux/api/taskSectionCalls";

const InboxPage = () => {
  const { taskSections, pending } = useSelector((state) => state.taskSections);

  const dispatch = useDispatch();

  useEffect(() => {
    getTaskSections(dispatch);
  }, [dispatch]);

  if (pending) {
    return "";
  }

  return (
    <Container p="3rem" m="0 auto" w="100%" maxW="60rem">
      <Heading size="md">Inbox</Heading>

      <Inbox />
    </Container>
  );
};

export default InboxPage;

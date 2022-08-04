import React, { useEffect, useState } from "react";
import { Container, Flex, Heading, IconButton } from "@chakra-ui/react";
import Inbox from "../components/inbox";
import { useSelector, useDispatch } from "react-redux";
import { getTaskSections } from "../redux/api/taskSectionCalls";
import { MdPlaylistAdd } from "react-icons/md";
import AddSection from "../components/inbox-sections/add-section";

const InboxPage = () => {
  const [addSectionOpen, setAddSectionOpen] = useState(false);
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
      <Flex justifyContent="space-between" alignItems="center">
        <Heading size="md">Inbox</Heading>

        <IconButton
          variant="ghost"
          size="sm"
          onClick={() => setAddSectionOpen(true)}
          icon={<MdPlaylistAdd size={26} cursor="pointer" />}
        />
      </Flex>

      <Inbox taskSections={taskSections} />

      <AddSection
        addSectionOpen={addSectionOpen}
        setAddSectionOpen={setAddSectionOpen}
      />
    </Container>
  );
};

export default InboxPage;

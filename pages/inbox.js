import React, { useEffect, useState } from "react";
import { Container, Flex, Heading, IconButton } from "@chakra-ui/react";
import Inbox from "../components/inbox";
import { useSelector, useDispatch } from "react-redux";
import { getTaskSections } from "../redux/api/taskSectionCalls";
import { MdPlaylistAdd } from "react-icons/md";
import InboxSections from "../components/inbox/sections";
import AddSection from "../components/inbox/sections/add-section";
import { getInboxTasks } from "../redux/api/inboxCalls";

const InboxPage = () => {
  const [addSectionOpen, setAddSectionOpen] = useState(false);
  const { taskSections, pending } = useSelector((state) => state.taskSections);
  const { inboxTasks, pending: inboxPending } = useSelector(
    (state) => state.inboxTasks
  );

  const dispatch = useDispatch();

  useEffect(() => {
    getTaskSections(dispatch);
    getInboxTasks(dispatch);
  }, [dispatch]);

  if (pending || inboxPending) {
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

      <Inbox inboxTasks={inboxTasks} />

      <AddSection
        addSectionOpen={addSectionOpen}
        setAddSectionOpen={setAddSectionOpen}
      />

      <InboxSections taskSections={taskSections} />
    </Container>
  );
};

export default InboxPage;

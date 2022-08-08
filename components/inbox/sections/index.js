import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import AddSectionTask from "../add-section-task";
import SectionList from "./section-list";

const InboxSections = ({ taskSections }) => {
  return (
    <Flex mt="1rem" flexDir="column" gap="1rem">
      {taskSections.map((section) => (
        <SectionList key={section._id} section={section} />
      ))}
    </Flex>
  );
};

export default InboxSections;

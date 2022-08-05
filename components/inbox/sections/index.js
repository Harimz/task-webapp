import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import AddSectionTask from "../add-section-task";

const InboxSections = ({ taskSections }) => {
  const [mouseHover, setMouseHover] = useState(false);

  const sections = taskSections.filter(
    (section) => section.belongsTo !== "inbox"
  );

  return (
    <Flex>
      {sections.map((section) => (
        <Flex key={section._id}>{section.belongsTo}</Flex>
      ))}

      {/* <AddSectionTask /> */}
    </Flex>
  );
};

export default InboxSections;

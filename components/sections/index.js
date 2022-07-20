import React, { useState } from "react";
import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { updateProject } from "../../redux/api/projectCalls";
import { useDispatch } from "react-redux";

const Sections = ({ project, pending }) => {
  const [sectionName, setSectionName] = useState("");
  const dispatch = useDispatch();

  const addSectionHandler = () => {
    updateProject(dispatch, project._id, {
      sectionName,
    });
  };

  if (pending) {
    return "";
  }

  if (project?.sections.length === 0) {
    return (
      <Box w="95%" maxW="15rem">
        <Input
          placeholder="Name this section"
          size="sm"
          onChange={({ target }) => setSectionName(target.value)}
        />
        <Flex justifyContent="flex-end" mt="1rem">
          <Button
            variant="primary"
            size="sm"
            onClick={addSectionHandler}
            disabled={sectionName.length === 0}
          >
            Add Section
          </Button>
        </Flex>
      </Box>
    );
  }

  return <div>Sections</div>;
};

export default Sections;

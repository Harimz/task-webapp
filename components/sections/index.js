import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { updateProject } from "../../redux/api/projectCalls";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import BoardView from "./board-view";
import ListView from "./list-view";
import { GoDiffAdded } from "react-icons/go";

const Sections = ({ project, pending }) => {
  const [sectionName, setSectionName] = useState("");
  const [addSection, setAddSection] = useState(false);
  const { query } = useRouter();
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

  return (
    <Flex>
      {query.list === "board" ? (
        <Grid gridTemplateColumns="repeat(auto-fill, minmax(275px, 1fr))">
          {project?.sections.map((section) => (
            <BoardView
              key={project._id}
              section={section}
              projectColor={project.color}
            />
          ))}
        </Grid>
      ) : (
        <Flex>
          {project?.sections.map((project) => (
            <ListView key={project._id} section={section} />
          ))}
        </Flex>
      )}

      {!addSection ? (
        <Flex
          p="0.5rem"
          border="1px solid"
          borderColor="gray.100"
          borderRadius="5px"
          transition="all 0.3s ease"
          _hover={{ color: "gray.600" }}
          cursor="pointer"
          ml="2rem"
          h="3rem"
          gap="1rem"
          alignItems="center"
          w="275px"
          fontWeight="semibold"
          color="gray.500"
          onClick={() => setAddSection(true)}
        >
          <GoDiffAdded />
          <Text>Add Section</Text>
        </Flex>
      ) : (
        <Box ml="2rem" gap="1rem" alignItems="center" w="275px">
          <Input
            onChange={({ target }) => setSectionName(target.value)}
            placeholder="Section Name"
            mb="0.5rem"
            size="sm"
          />

          <Flex gap="1rem">
            <Button onClick={addSectionHandler} variant="primary" size="sm">
              Add Section
            </Button>
            <Button
              onClick={() => setAddSection(false)}
              variant="ghost"
              size="sm"
            >
              Cancel
            </Button>
          </Flex>
        </Box>
      )}
    </Flex>
  );
};

export default Sections;

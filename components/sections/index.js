import React, { useState } from "react";
import { Box, Button, Flex, Grid, Heading, Input } from "@chakra-ui/react";
import { updateProject } from "../../redux/api/projectCalls";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import BoardView from "./board-view";
import ListView from "./list-view";

const Sections = ({ project, pending }) => {
  const [sectionName, setSectionName] = useState("");
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
  console.log(project?.sections);

  return (
    <>
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
    </>
  );
};

export default Sections;

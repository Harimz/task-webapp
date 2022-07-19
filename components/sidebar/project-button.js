import React, { useState } from "react";
import { Box, Button, Flex, Grid, IconButton, Text } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

const ProjectButton = ({ project, sidebarOpen }) => {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <Button
      id={project._id}
      key={project._id}
      variant="project"
      onMouseOver={() => setShowEdit(true)}
      onMouseOut={() => setShowEdit(false)}
    >
      <Flex w="100%">
        <Grid
          gridTemplateColumns={sidebarOpen ? "1rem 2rem" : ""}
          gap="1rem"
          w="100%"
          alignItems="center"
          justifyContent={sidebarOpen ? "" : "center"}
        >
          <Box h="1rem" w="1rem" bgColor={project.color} borderRadius="50%" />
          <Text display={sidebarOpen ? "block" : "none"}>{project.name}</Text>
        </Grid>

        {sidebarOpen && (
          <IconButton
            display={showEdit ? "flex" : "none"}
            bgColor="transparent"
            color="black"
            size="sm"
            icon={<BsThreeDots />}
          />
        )}
      </Flex>
    </Button>
  );
};

export default ProjectButton;

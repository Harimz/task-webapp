import React, { useState } from "react";
import { Box, Flex, Grid, IconButton, Text } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";

const ProjectButton = ({ project, sidebarOpen }) => {
  const [showEdit, setShowEdit] = useState(false);
  const router = useRouter();
  const projectId = router.query.projectId;

  return (
    <Link passHref href={`/projects/${project._id}`}>
      <Flex
        onMouseOver={() => setShowEdit(true)}
        onMouseOut={() => setShowEdit(false)}
        h="2.5rem"
        p="1rem"
        transition="all 0.3s ease"
        color="gray.400"
        bgColor={projectId === project._id && "gray.100"}
        fontWeight="semibold"
        _hover={{ bgColor: "gray.100", color: "black" }}
        alignItems="center"
        cursor="pointer"
      >
        <Grid
          gridTemplateColumns={sidebarOpen ? "1rem 10rem" : ""}
          gap="1rem"
          w="100%"
          alignItems="center"
          justifyContent={sidebarOpen ? "" : "center"}
        >
          <Box h="1rem" w="1rem" bgColor={project.color} borderRadius="50%" />
          <Text display={sidebarOpen ? "block" : "none"} w="100%">
            {project.name}
          </Text>
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
    </Link>
  );
};

export default ProjectButton;

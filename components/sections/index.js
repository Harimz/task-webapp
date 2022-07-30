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
import { GoDiffAdded } from "react-icons/go";
import BoardItem from "./board";
import DefaultView from "./default-view";

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
      <DefaultView
        sectionName={sectionName}
        setSectionName={setSectionName}
        addSectionHandler={addSectionHandler}
      />
    );
  }

  return (
    <Flex
      pb="4rem"
      w="100%"
      maxW="80rem"
      overflowX="auto"
      css={{
        "&::-webkit-scrollbar": {
          width: "4px",
          height: "6px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "gray",
          borderRadius: "24px",
        },
      }}
    >
      <Flex gap="2rem">
        {project?.sections.map((section, i) => (
          <BoardItem
            project={project}
            key={i}
            section={section}
            projectColor={project.color}
          />
        ))}
      </Flex>

      <Flex>
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
            fontWeight="semibold"
            color="gray.500"
            onClick={() => setAddSection(true)}
            w="275px"
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
              <Button
                disabled={sectionName.length === 0}
                onClick={addSectionHandler}
                variant="primary"
                size="sm"
              >
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
    </Flex>
  );
};

export default Sections;

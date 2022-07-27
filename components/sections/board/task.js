import React from "react";
import { Divider, Flex, Heading, Text } from "@chakra-ui/react";

const Task = ({ task }) => {
  console.log(task);

  return (
    <Flex
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      flexDir="column"
      borderRadius="8px"
      p="1rem"
      m="3px"
      mt="1rem"
    >
      <Heading mb="0.5rem" size="sm">
        {task.title}
      </Heading>

      <Text mb="1rem" color="gray.400">
        {task.description}
      </Text>

      <Divider />
    </Flex>
  );
};

export default Task;

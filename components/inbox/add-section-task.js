import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";

const AddSectionTask = ({ setMouseHover, mouseHover, setAddTaskOpen }) => {
  return (
    <Flex
      mt="1rem"
      gap="1rem"
      alignItems="center"
      cursor="pointer"
      onMouseOver={() => setMouseHover(true)}
      onMouseOut={() => setMouseHover(false)}
      transition="background 0.3s ease"
      bgColor={mouseHover && "gray.100"}
      borderRadius="10px"
      p=".25rem"
      onClick={() => setAddTaskOpen(true)}
    >
      <AiOutlinePlus />
      <Text textStyle="text">Add Task</Text>
    </Flex>
  );
};

export default AddSectionTask;

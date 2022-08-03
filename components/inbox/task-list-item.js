import React, { useState } from "react";
import { Box, Flex, IconButton, Radio, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { FaDotCircle } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const TaskListItem = ({ task }) => {
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);
  const [mouseHover, setMouseHover] = useState(false);
  const { taskSections } = useSelector((state) => state.taskSections);

  return (
    <Flex
      p="0.5rem 0"
      borderBottom="1px solid rgba(236, 236, 236, 0.75)"
      onMouseOver={() => setMouseHover(true)}
      onMouseOut={() => setMouseHover(false)}
      justifyContent="space-between"
      cursor="pointer"
      minH="3.25rem"
    >
      <Flex gap="1rem">
        <Box
          h="1.25rem"
          w="1.25rem"
          border="1px solid gray"
          borderRadius="50%"
          cursor="pointer"
          transition="all 0.3s ease"
          bgColor={isCompleted && "primary.200"}
        />

        <Box>
          <Text color="gray.500" fontWeight="semibold">
            {task.title}
          </Text>

          <Text textStyle="text" fontSize=".75rem">
            {task.description}
          </Text>
        </Box>
      </Flex>

      {mouseHover && (
        <IconButton
          variant="ghost"
          size="sm"
          icon={<BiDotsHorizontalRounded />}
        />
      )}
    </Flex>
  );
};

export default TaskListItem;

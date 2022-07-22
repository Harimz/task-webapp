import React, { useState } from "react";
import {
  Box,
  Flex,
  GridItem,
  Heading,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";

const BoardView = ({ section, projectColor }) => {
  const [addTodo, setAddTodo] = useState(false);

  return (
    <GridItem>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        borderBottom="3px solid red"
        borderColor={projectColor}
        pb="1rem"
      >
        <Flex gap="0.5rem" alignItems="center">
          <Heading size="md">{section?.name}</Heading>
          <Flex
            border="1px solid gray"
            borderColor="gray.200"
            justifyContent="center"
            alignItems="center"
            borderRadius="50%"
            padding="10px"
            h="1rem"
            w="1rem"
          >
            <Text fontWeight="semibold" color="gray.400">
              {section?.tasks.length.toString()}
            </Text>
          </Flex>
        </Flex>

        <IconButton size="sm" variant="ghost" icon={<BsThreeDots />} />
      </Flex>

      {section?.tasks.map((task) => {})}

      {!addTodo ? (
        <Flex
          alignItems="center"
          gap="1rem"
          cursor="pointer"
          _hover={{ color: "primary.200" }}
          fontWeight="semibold"
          mt="0.5rem"
          onClick={() => setAddTodo(true)}
        >
          <IconButton size="sm" variant="ghost" icon={<FaPlus />} />
          <Text>Add Task</Text>
        </Flex>
      ) : (
        <Flex
          p="0.5rem"
          borderRadius="10px"
          mt="1rem"
          h="10rem"
          border="1px solid gray"
        >
          <Input variant="ghost" placeholder="ex. Go to work." size="sm" />
        </Flex>
      )}
    </GridItem>
  );
};

export default BoardView;
